export default async function getTrains() {
    try {
      const response = await fetch('http://localhost:3000/api/gettrains', {
        cache: 'no-store',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json(); // Parse the JSON response
  
      // Now you can work with the 'data' object
      console.log(data); // Display the data in the console
      return data; // Optionally return the data to the caller
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // You can rethrow the error or handle it as needed
    }
  }