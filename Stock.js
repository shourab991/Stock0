const apiKey = 'py0oHgf3bcN3Q1OMgpUaqORS7SD3koDs';
const stockSymbol = 'AAPL'; // Example stock symbol

fetch(`https://api.example.com/stock/${stockSymbol}?apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Handle the data and update your UI
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
