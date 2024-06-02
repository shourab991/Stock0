const tickerImage = [
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
  const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${apiKey}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch stock data');
      }
      const data = await response.json();
      return data.results[0];
  } catch (error) {
      throw new Error(`Error fetching stock data for ${symbol}: ${error.message}`);
  }
}

async function displayStockComparison() {
  const comparisonDiv = document.getElementById('comparison');
  comparisonDiv.innerHTML = '';

  for (const { stockName, imageUrl } of tickerImage) {
      try {
          const stockData = await fetchStockData(stockName);
          const stockDiv = document.createElement('div');
          stockDiv.classList.add('stock-info');

          const image = document.createElement('img');
          image.src = imageUrl;
          image.alt = `${stockName} Logo`;
          stockDiv.appendChild(image);

          const dataDiv = document.createElement('div');
          dataDiv.classList.add('data');
          dataDiv.innerHTML = `
              <h2>${stockName}</h2>
              <p>Previous Close: ${stockData.c.toFixed(2)}</p>
              <p>High: ${stockData.h.toFixed(2)}</p>
              <p>Low: ${stockData.l.toFixed(2)}</p>
              <p>Open: ${stockData.o.toFixed(2)}</p>
              <p>Volume: ${stockData.v}</p>
          `;
          stockDiv.appendChild(dataDiv);

          comparisonDiv.appendChild(stockDiv);
      } catch (error) {
          console.error(error.message);
          comparisonDiv.innerHTML += `<p>Error fetching data for ${stockName}: ${error.message}</p>`;
      }
  }
}

displayStockComparison();