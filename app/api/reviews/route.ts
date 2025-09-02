import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJD8TZ2clhK4gRs7HkBtJS1K0';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyDVEoSMYuRHs9BHRRWasTeqEzPZNrzGrpg';

// In-memory cache
let cachedData: any = null;
let cacheTime: number | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET() {
  try {
    // Check if we have cached data that's still valid
    if (cachedData && cacheTime && (Date.now() - cacheTime < CACHE_DURATION)) {
      console.log('Serving cached reviews');
      return NextResponse.json(cachedData);
    }

    // If no API key, return error with details
    if (!API_KEY) {
      console.error('GOOGLE_PLACES_API_KEY not found in environment variables');
      return NextResponse.json(
        { 
          error: 'Configuration error',
          details: 'API key not found. Please add GOOGLE_PLACES_API_KEY to Vercel environment variables.',
          hasKey: false
        },
        { status: 500 }
      );
    }

    // Fetch from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?` +
      `place_id=${PLACE_ID}&` +
      `fields=rating,user_ratings_total,reviews&` +
      `reviews_sort=newest&` +
      `key=${API_KEY}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message || '');
      throw new Error(`Google API error: ${data.status}. ${data.error_message || ''}`);
    }

    // Cache the successful response
    cachedData = data.result;
    cacheTime = Date.now();
    
    console.log('Fetched fresh reviews from Google');
    return NextResponse.json(data.result);

  } catch (error) {
    console.error('Error fetching reviews:', error);
    
    // Return cached data if available, even if expired
    if (cachedData) {
      console.log('Returning stale cache due to error');
      return NextResponse.json(cachedData);
    }
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to fetch reviews', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}