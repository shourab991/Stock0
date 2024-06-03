// Function to fetch stock data from the API
async function fetchStockData(symbol, from, to) {
  const apiKey = 'py0oHgf3bcN3Q1OMgpUaqORS7SD3koDs'; // Replace with your actual API key
  const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${from}/${to}?adjusted=true&sort=asc&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}




async function compareStocks() {
  const container = document.getElementById("additionalStockInput");
  container.style.display = "block";
  const stockSymbol1 = document.getElementById("searchBox1").value.toUpperCase();
  const stockSymbol2 = document.getElementById("searchBox2").value.toUpperCase();

  try {
    const stock1Info = await fetchStockData(stockSymbol1);
    const stock2Info = await fetchStockData(stockSymbol2);

    if (stock1Info && stock2Info) {
      // Update this part to directly display the stock information instead of calling displayComparison
      const comparisonResultsElement1 = document.getElementById("comparisonResults1");
      const comparisonResultsElement2 = document.getElementById("comparisonResults2");

      const stock1Div = document.createElement("div");
      stock1Div.classList.add("stock-info1");
      const stock2Div = document.createElement("div");
      stock2Div.classList.add("stock-info2");

      // Create HTML content for stock 1
      stock1Div.innerHTML = `
        <div class="stock-info1">
          <button class="remove-button" onclick="removeStock(1)">❌</button>
          <img src="${stock1Info.imageUrl}" alt="${stock1Info.symbol} Image">
          <h2>${stock1Info.symbol}</h2>
          <p>Price: ${stock1Info.close}</p>
          <p>High: ${stock1Info.high}</p>
          <p>Low: ${stock1Info.low}</p>
          <p>Open: ${stock1Info.open}</p>
          <p>Volume: ${stock1Info.volume}</p>
        </div>
      `;

      // Create HTML content for stock 2
      stock2Div.innerHTML = `
        <div class="stock-info2">
          <button class="remove-button" onclick="removeStock(2)">❌</button>
          <img src="${stock2Info.imageUrl}" alt="${stock2Info.symbol} Image">
          <h2>${stock2Info.symbol}</h2>
          <p>Price: ${stock2Info.close}</p>
          <p>High: ${stock2Info.high}</p>
          <p>Low: ${stock2Info.low}</p>
          <p>Open: ${stock2Info.open}</p>
          <p>Volume: ${stock2Info.volume}</p>
        </div>
      `;

      // Append stock information to the comparison results elements
      comparisonResultsElement1.appendChild(stock1Div);
      comparisonResultsElement2.appendChild(stock2Div);
    } else {
      alert("Please enter valid stock symbols");
    }
  } catch (error) {
    console.error('Error comparing stocks:', error);
    alert("Failed to compare stocks. Please try again later.");
  }
}
