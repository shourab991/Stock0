const watchlistData = [
  {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "price": 150.25,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 174.34,
      "high": 176.6,
      "low": 173.03,
      "MarketCap": "2.70T",
      "weekhigh": 199.62,
      "weekLow": 154.15,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "MSFT",
      "companyName": "Microsoft Corporation",
      "price": 300.5,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 290.2,
      "high": 305.7,
      "low": 288.4,
      "MarketCap": "2.50T",
      "weekHigh": 310.45,
      "weekLow": 280.1,
      "imageUrl": "https://g.foolcdn.com/art/companylogos/square/msft.png"
  },
  {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "price": 2500.75,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 2525,
      "high": 2536.4,
      "low": 2498.3,
      "MarketCap": "1.80T",
      "weekHigh": 2550.2,
      "weekLow": 2480.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/alphabet--600.png"
  },
  {
      "symbol": "AMZN",
      "companyName": "Amazon.com Inc.",
      "price": 3400.15,
      "sector": "Consumer Cyclical",
      "exchange": "NASDAQ",
      "open": 3455.2,
      "high": 3488.5,
      "low": 3388.3,
      "MarketCap": "1.70T",
      "weekHigh": 3550.2,
      "weekLow": 3370.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/amazon--600.png"
  },
  {
      "symbol": "FB",
      "companyName": "Meta Platforms Inc.",
      "price": 330.75,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 335.2,
      "high": 340.5,
      "low": 328.4,
      "MarketCap": "1.00T",
      "weekHigh": 345.2,
      "weekLow": 325.1,
      "imageUrl": "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/02/meta-facebook_feature.jpg"
  },
  {
      "symbol": "TSLA",
      "companyName": "Tesla Inc.",
      "price": 900.25,
      "sector": "Consumer Cyclical",
      "exchange": "NASDAQ",
      "open": 910.2,
      "high": 920.5,
      "low": 895.3,
      "MarketCap": "900.75B",
      "weekHigh": 930.2,
      "weekLow": 880.1,
      "imageUrl": "https://g.foolcdn.com/art/companylogos/square/tsla.png"
  },
  {
      "symbol": "JPM",
      "companyName": "JPMorgan Chase & Co.",
      "price": 150.35,
      "sector": "Financial Services",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "450.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "BABA",
      "companyName": "Alibaba Group Holding Limited",
      "price": 200.45,
      "sector": "Consumer Cyclical",
      "exchange": "NYSE",
      "open": 205.2,
      "high": 210.5,
      "low": 198.3,
      "MarketCap": "500.30B",
      "weekHigh": 220.2,
      "weekLow": 195.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "NVDA",
      "companyName": "NVIDIA Corporation",
      "price": 300.65,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 305.2,
      "high": 310.5,
      "low": 298.3,
      "MarketCap": "750.20B",
      "weekHigh": 320.2,
      "weekLow": 295.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "V",
      "companyName": "Visa Inc.",
      "price": 250.45,
      "sector": "Financial Services",
      "exchange": "NYSE",
      "open": 255.2,
      "high": 260.5,
      "low": 248.3,
      "MarketCap": "200.30B",
      "weekHigh": 270.2,
      "weekLow": 245.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "MA",
      "companyName": "Mastercard Incorporated",
      "price": 300.55,
      "sector": "Financial Services",
      "exchange": "NYSE",
      "open": 305.2,
      "high": 310.5,
      "low": 298.3,
      "MarketCap": "350.20B",
      "weekHigh": 320.2,
      "weekLow": 295.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "PG",
      "companyName": "Procter & Gamble Company",
      "price": 150.25,
      "sector": "Consumer Defensive",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "350.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "HD",
      "companyName": "The Home Depot Inc.",
      "price": 250.45,
      "sector": "Consumer Cyclical",
      "exchange": "NYSE",
      "open": 255.2,
      "high": 260.5,
      "low": 248.3,
      "MarketCap": "300.30B",
      "weekHigh": 270.2,
      "weekLow": 245.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "DIS",
      "companyName": "The Walt Disney Company",
      "price": 150.35,
      "sector": "Communication Services",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "300.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "KO",
      "companyName": "The Coca-Cola Company",
      "price": 50.45,
      "sector": "Consumer Defensive",
      "exchange": "NYSE",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.30B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "INTC",
      "companyName": "Intel Corporation",
      "price": 50.65,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.20B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "CRM",
      "companyName": "Salesforce.com Inc.",
      "price": 250.45,
      "sector": "Technology",
      "exchange": "NYSE",
      "open": 255.2,
      "high": 260.5,
      "low": 248.3,
      "MarketCap": "200.30B",
      "weekHigh": 270.2,
      "weekLow": 245.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "NFLX",
      "companyName": "Netflix Inc.",
      "price": 450.35,
      "sector": "Communication Services",
      "exchange": "NASDAQ",
      "open": 455.2,
      "high": 460.5,
      "low": 448.3,
      "MarketCap": "200.40B",
      "weekHigh": 470.2,
      "weekLow": 445.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/netflix--600.png"
  },
  {
      "symbol": "VZ",
      "companyName": "Verizon Communications Inc.",
      "price": 50.25,
      "sector": "Communication Services",
      "exchange": "NYSE",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.40B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "PFE",
      "companyName": "Pfizer Inc.",
      "price": 40.45,
      "sector": "Healthcare",
      "exchange": "NYSE",
      "open": 45.2,
      "high": 50.5,
      "low": 38.3,
      "MarketCap": "150.40B",
      "weekHigh": 60.2,
      "weekLow": 35.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "MRK",
      "companyName": "Merck & Co. Inc.",
      "price": 80.65,
      "sector": "Healthcare",
      "exchange": "NYSE",
      "open": 85.2,
      "high": 90.5,
      "low": 78.3,
      "MarketCap": "200.20B",
      "weekHigh": 100.2,
      "weekLow": 75.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "BA",
      "companyName": "The Boeing Company",
      "price": 200.25,
      "sector": "Industrials",
      "exchange": "NYSE",
      "open": 205.2,
      "high": 210.5,
      "low": 198.3,
      "MarketCap": "200.30B",
      "weekHigh": 220.2,
      "weekLow": 195.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "NKE",
      "companyName": "NIKE Inc.",
      "price": 150.35,
      "sector": "Consumer Cyclical",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "200.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "MCD",
      "companyName": "McDonald's Corporation",
      "price": 250.45,
      "sector": "Consumer Cyclical",
      "exchange": "NYSE",
      "open": 255.2,
      "high": 260.5,
      "low": 248.3,
      "MarketCap": "200.30B",
      "weekHigh": 270.2,
      "weekLow": 245.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "CSCO",
      "companyName": "Cisco Systems Inc.",
      "price": 50.65,
      "sector": "Technology",
      "exchange": "NASDAQ",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.20B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "WMT",
      "companyName": "Walmart Inc.",
      "price": 150.25,
      "sector": "Consumer Defensive",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "200.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "XOM",
      "companyName": "Exxon Mobil Corporation",
      "price": 50.45,
      "sector": "Energy",
      "exchange": "NYSE",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.30B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "CVX",
      "companyName": "Chevron Corporation",
      "price": 80.65,
      "sector": "Energy",
      "exchange": "NYSE",
      "open": 85.2,
      "high": 90.5,
      "low": 78.3,
      "MarketCap": "200.20B",
      "weekHigh": 100.2,
      "weekLow": 75.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "JNJ",
      "companyName": "Johnson & Johnson",
      "price": 150.25,
      "sector": "Healthcare",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "200.40B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "ORCL",
      "companyName": "Oracle Corporation",
      "price": 80.65,
      "sector": "Technology",
      "exchange": "NYSE",
      "open": 85.2,
      "high": 90.5,
      "low": 78.3,
      "MarketCap": "200.20B",
      "weekHigh": 100.2,
      "weekLow": 75.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "PEP",
      "companyName": "PepsiCo Inc.",
      "price": 150.25,
      "sector": "Consumer Defensive",
      "exchange": "NYSE",
      "open": 155.2,
      "high": 157.5,
      "low": 149.8,
      "MarketCap": "200.30B",
      "weekHigh": 160.2,
      "weekLow": 145.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "CMCSA",
      "companyName": "Comcast Corporation",
      "price": 50.45,
      "sector": "Communication Services",
      "exchange": "NASDAQ",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.40B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "T",
      "companyName": "AT&T Inc.",
      "price": 30.25,
      "sector": "Communication Services",
      "exchange": "NYSE",
      "open": 35.2,
      "high": 40.5,
      "low": 28.3,
      "MarketCap": "200.30B",
      "weekHigh": 50.2,
      "weekLow": 25.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "TSM",
      "companyName": "Taiwan Semiconductor Manufacturing Company Limited",
      "price": 100.65,
      "sector": "Technology",
      "exchange": "NYSE",
      "open": 105.2,
      "high": 110.5,
      "low": 98.3,
      "MarketCap": "200.20B",
      "weekHigh": 120.2,
      "weekLow": 95.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "UNH",
      "companyName": "UnitedHealth Group Incorporated",
      "price": 400.25,
      "sector": "Healthcare",
      "exchange": "NYSE",
      "open": 405.2,
      "high": 410.5,
      "low": 398.3,
      "MarketCap": "200.30B",
      "weekHigh": 420.2,
      "weekLow": 395.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
  {
      "symbol": "BAC",
      "companyName": "Bank of America Corporation",
      "price": 50.45,
      "sector": "Financial Services",
      "exchange": "NYSE",
      "open": 55.2,
      "high": 60.5,
      "low": 48.3,
      "MarketCap": "200.40B",
      "weekHigh": 70.2,
      "weekLow": 45.1,
      "imageUrl": "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  }
]


function addToWatchlist() {
  const symbolInput = document.getElementById("symbolInput").value.toUpperCase();
  
  const stock = watchlistData.find(item => item.symbol === symbolInput);
  
  if (stock) {
      
      const stockContainer = document.createElement("div");
      stockContainer.classList.add("stock-container");

      
      const companyName = document.createElement("p");
      companyName.textContent = stock.companyName;
      stockContainer.appendChild(companyName);

      const price = document.createElement("p");
      price.textContent = "Price: $" + stock.price.toFixed(2);
      stockContainer.appendChild(price);

    
      const image = document.createElement("img");
      image.src = stock.imageUrl;
      image.alt = stock.companyName;
      stockContainer.appendChild(image);

      
      const closeButton = document.createElement("button");
      closeButton.textContent = "❌";
      closeButton.classList.add("close-button");
      closeButton.addEventListener("click", () => {
          watchlistContainer.removeChild(stockContainer);
      });
      stockContainer.appendChild(closeButton);

    
      const watchlistContainer = document.getElementById("watchlistContainer");
      watchlistContainer.appendChild(stockContainer);

    
      document.getElementById("symbolInput").value = "";
  } else {
      alert("Stock not found!");
  }
}


