const tickerInfo = [
    {
        "stockName": "AAPL",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "MSFT",
        "imageUrl": "https://g.foolcdn.com/art/companylogos/square/msft.png"
    },
    {
        "stockName": "GOOGL",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/alphabet--600.png"
    },
    {
        "stockName": "AMZN",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/amazon--600.png"
    },
    {
        "stockName": "FB",
        "imageUrl": "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/02/meta-facebook_feature.jpg"
    },
    {
        "stockName": "TSLA",
        "imageUrl": "https://g.foolcdn.com/art/companylogos/square/tsla.png"
    },
    {
        "stockName": "JPM",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "BABA",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "NVDA",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "V",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "MA",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "PG",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "HD",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "DIS",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "KO",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "INTC",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "CRM",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "NFLX",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/netflix--600.png"
    },
    {
        "stockName": "VZ",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "PFE",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "MRK",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "BA",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "NKE",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "MCD",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "CSCO",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "WMT",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "XOM",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "CVX",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "JNJ",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "ORCL",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "PEP",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "CMCSA",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "T",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "TSM",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "UNH",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    },
    {
        "stockName": "BAC",
        "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
    }
  ]
  async function fetchStockData(symbol) {
    const apiKey = 'py0oHgf3bcN3Q1OMgpUaqORS7SD3koDs';
    const fromDate = '2023-01-09';
    const toDate = '2023-01-09';
    const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return null;
    }
}

function addStockInput() {
  const additionalStockSymbol = document
    .getElementById("additionalStockSymbol")
    .value.toUpperCase();

  fetchStockData(additionalStockSymbol)
    .then(stockData => {
      if (stockData) {
        const comparisonResultsElement = document.createElement("div");
        const containerId = `comparisonResults${additionalStockSymbol}`;
        comparisonResultsElement.id = containerId;
        comparisonResultsElement.classList.add("stock-container");

        const stockHTML = `
            <div class="stock-info">
                <button class="remove-button" onclick="removeStock('${additionalStockSymbol}')">❌</button>
                <h2>${additionalStockSymbol}</h2>
                <p>Price: ${stockData[0].o}</p>
                <p>Open: ${stockData[0].o}</p>
                <p>High: ${stockData[0].h}</p>
                <p>Low: ${stockData[0].l}</p>
                <p>Close: ${stockData[0].c}</p>
                <p>Volume: ${stockData[0].v}</p>
            </div>
        `;

        comparisonResultsElement.innerHTML = stockHTML;
        document.body.appendChild(comparisonResultsElement);
      } else {
        alert("Failed to fetch stock data. Please try again later.");
      }
    });
}

// Remove function remains the same as before



function addStockInput() {
  const additionalStockSymbol = document
    .getElementById("additionalStockSymbol")
    .value.toUpperCase();

  if (tickerInfo[additionalStockSymbol]) {
    const additionalStockInfo = tickerInfo[additionalStockSymbol];
    const comparisonResultsElement = document.createElement("div");
    const containerId = `comparisonResults${additionalStockSymbol}`;
    comparisonResultsElement.id = containerId;
    comparisonResultsElement.classList.add("stock-container");

    const stockHTML = `
            <div class="stock-info">
                <button class="remove-button" onclick="removeStock('${additionalStockSymbol}')">❌</button>
                <img src="${additionalStockInfo.imageUrl}" alt="${additionalStockInfo.companyName} Image">
                <h2>${additionalStockInfo.companyName}</h2>
                <p>Price: ${additionalStockInfo.price}</p>
                <p>Sector: ${additionalStockInfo.sector}</p>
                <p>Exchange: ${additionalStockInfo.exchange}</p>
                <p>Open: ${additionalStockInfo.open}</p>
                <p>High: ${additionalStockInfo.high}</p>
                <p>Low: ${additionalStockInfo.low}</p>
                <p>Market Cap: ${additionalStockInfo.MarketCap}</p>
                <p>52 Week High: ${additionalStockInfo.weekHigh}</p>
                <p>52 Week Low: ${additionalStockInfo.weekLow}</p>
            </div>
        `;

    comparisonResultsElement.innerHTML = stockHTML;
    document.body.appendChild(comparisonResultsElement);
  } else {
    alert("Please enter a valid stock symbol.");
  }
}

function removeStock(symbol) {
  const stockElement = document.getElementById(`comparisonResults${symbol}`);
  if (stockElement) {
    stockElement.innerHTML = ""; // Clear inner HTML
  }
}

function compareStocks() {
  const container = document.getElementById("additionalStockInput");
  container.style.display = "block";
  const stockSymbol1 = document
    .getElementById("searchBox1")
    .value.toUpperCase();
  const stockSymbol2 = document
    .getElementById("searchBox2")
    .value.toUpperCase();

  const stock1Info = tickerInfo[stockSymbol1];
  const stock2Info = tickerInfo[stockSymbol2];

  // Check if both stock symbols are valid
  if (stock1Info && stock2Info) {
    displayComparison(stock1Info, stock2Info);
  } else {
    alert("Please enter valid stock symbols");
  }
}
function displayComparison(stock1Info, stock2Info) {
  let comparisonResultsElement1 = document.getElementById("comparisonResults1");
  let comparisonResultsElement2 = document.getElementById("comparisonResults2");

  if (!comparisonResultsElement1) {
    comparisonResultsElement1 = document.createElement("div");
    comparisonResultsElement1.id = "comparisonResults1";
  }
  if (!comparisonResultsElement2) {
    comparisonResultsElement2 = document.createElement("div");
    comparisonResultsElement2.id = "comparisonResults2";
  }
    const stock1Div = document.createElement("div");
    stock1Div.classList.add("stock-info1");
    const stock2Div = document.createElement("div");
    stock2Div.classList.add("stock-info2");

    // Create HTML content for stock 1
    stock1Div.innerHTML = `
        <div class="stock-info1">
        <button class="remove-button" onclick="removeStock(1)">❌</button>
          <img src="${stock1Info.imageUrl}" alt="${stock1Info.companyName} Image">
            <h2>${stock1Info.companyName}</h2>
            <p>Price: ${stock1Info.price}</p>
            <p>Sector: ${stock1Info.sector}</p>
            <p>Exchange: ${stock1Info.exchange}</p>
            <p>Open: ${stock1Info.open}</p>
            <p>High: ${stock1Info.high}</p>
            <p>Low: ${stock1Info.low}</p>
            <p>Market Cap: ${stock1Info.MarketCap}</p>
            <p>52 Week High: ${stock1Info.weekHigh}</p>
            <p>52 Week Low: ${stock1Info.weekLow}</p>
            
    `;

    stock2Div.innerHTML = `
        <div class="stock-info2">
        <button class="remove-button" onclick="removeStock(2)">❌</button>
        <img src="${stock2Info.imageUrl}" alt="${stock1Info.companyName} Image">
        <h2>${stock2Info.companyName}</h2>
        <p>Price: ${stock2Info.price}</p>
        <p>Sector: ${stock2Info.sector}</p>
        <p>Exchange: ${stock2Info.exchange}</p>
        <p>Open: ${stock2Info.open}</p>
        <p>High: ${stock2Info.high}</p>
        <p>Low: ${stock2Info.low}</p>
        <p>Market Cap: ${stock2Info.MarketCap}</p>
        <p>52 Week High: ${stock2Info.weekHigh}</p>
        <p>52 Week Low: ${stock2Info.weekLow}</p>
        
    `;

    comparisonResultsElement1.appendChild(stock1Div);
    comparisonResultsElement2.appendChild(stock2Div);
  

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      document.querySelector(".compareButton").click();
    }
  }
}
