// Define a function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url); // Fetch data from the provided URL
    if (!response.ok) {
      throw new Error('Failed to fetch data'); // Throw an error if response is not ok
    }
    const data = await response.json(); // Extract JSON from the response
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors that occur during fetching
    throw error; // Re-throw the error to be caught by the caller
  }
}

// Example usage:
const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
fetchData(apiUrl)
  .then(data => {
    // Process the fetched data
    console.log('Fetched data:', data);
  })
  .catch(error => {
    // Handle errors gracefully
    console.error('Failed to fetch data:', error);
  });
