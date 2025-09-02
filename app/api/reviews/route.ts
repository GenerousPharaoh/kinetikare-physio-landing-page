import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJD8TZ2clhK4gRs7HkBtJS1K0';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

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

    // If no API key, return mock data for development
    if (!API_KEY) {
      const mockData = {
        rating: 4.9,
        user_ratings_total: 8,
        reviews: [
          {
            author_name: "Sarah M.",
            rating: 5,
            text: "Kareem is an exceptional physiotherapist. His thorough assessment and personalized treatment plan helped me recover from chronic back pain that I'd been dealing with for years.",
            relative_time_description: "2 weeks ago"
          },
          {
            author_name: "Mike T.",
            rating: 5,
            text: "Professional, knowledgeable, and genuinely cares about his patients. The clinic is clean and well-equipped. Highly recommend!",
            relative_time_description: "1 month ago"
          },
          {
            author_name: "Jennifer L.",
            rating: 5,
            text: "After my knee surgery, Kareem's rehabilitation program got me back to running faster than expected. His expertise in sports injuries is outstanding.",
            relative_time_description: "2 months ago"
          },
          {
            author_name: "David R.",
            rating: 5,
            text: "The dry needling treatment was incredibly effective for my shoulder pain. Kareem explains everything clearly and makes you feel comfortable throughout.",
            relative_time_description: "3 months ago"
          }
        ]
      };
      return NextResponse.json(mockData);
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
      throw new Error(`Google API error: ${data.status}`);
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