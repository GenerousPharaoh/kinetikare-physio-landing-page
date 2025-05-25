/**
 * Simple route testing script
 * Run this after starting the development server with npm run dev
 */

const http = require('http');
const https = require('https');

// Define the base URL of your site
const BASE_URL = 'http://localhost:3000';

// List all the routes to test
const routes = [
  '/',
  '/about',
  '/services',
  '/faq',
  '/success-stories',
  '/blog',
  '/blog/understanding-low-back-pain',
  '/nonexistent-page' // Should return 404
];

// Function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data
        });
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.end();
  });
}

// Main function to test all routes
async function testRoutes() {
  console.log('🔍 Starting route tests...\n');
  
  const results = {
    success: 0,
    error: 0,
    notFound: 0,
    details: []
  };
  
  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    console.log(`Testing route: ${route}`);
    
    try {
      const response = await makeRequest(url);
      const status = response.statusCode;
      
      // Check if we got expected response
      if (status >= 200 && status < 300) {
        console.log(`  ✅ Status ${status} - Success`);
        results.success++;
      } else if (status === 404) {
        if (route === '/nonexistent-page') {
          console.log(`  ✅ Status ${status} - Not Found (expected for this route)`);
          results.success++;
        } else {
          console.log(`  ❌ Status ${status} - Not Found`);
          results.notFound++;
        }
      } else {
        console.log(`  ❌ Status ${status} - Error`);
        results.error++;
      }
      
      // Store result details
      results.details.push({
        route,
        status,
        success: (status >= 200 && status < 300) || (status === 404 && route === '/nonexistent-page')
      });
      
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
      results.error++;
      
      results.details.push({
        route,
        error: error.message,
        success: false
      });
    }
    
    console.log(''); // Empty line for readability
  }
  
  // Print summary
  console.log('📊 Test Summary:');
  console.log(`  Total routes tested: ${routes.length}`);
  console.log(`  Successful: ${results.success}`);
  console.log(`  Not Found: ${results.notFound}`);
  console.log(`  Errors: ${results.error}`);
  
  // Calculate overall success rate
  const successRate = (results.success / routes.length) * 100;
  console.log(`  Success rate: ${successRate.toFixed(2)}%`);
  
  if (results.error > 0 || results.notFound > 0) {
    console.log('\n❌ Some routes are not working correctly. Please check the details above.');
    process.exit(1);
  } else {
    console.log('\n✅ All routes are working correctly!');
    process.exit(0);
  }
}

// Execute tests
testRoutes().catch(err => {
  console.error('Error running tests:', err);
  process.exit(1);
}); 