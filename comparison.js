const tickerInfo = {
  AAPL: {
      companyName: "Apple Inc.",
      price: 150.25,
      sector: "Technology",
      exchange: "NASDAQ",
      open: 174.34,
      high: 176.60,
      low: 173.03,
      MarketCap: "2.70T",
      weekhigh: 199.62,
      weekLow: 154.15,
      imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
  },
      MSFT: {
          companyName: "Microsoft Corporation",
          price: 300.50,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 290.20,
          high: 305.70,
          low: 288.40,
          MarketCap: "2.50T",
          weekHigh: 310.45,
          weekLow: 280.10,
          imageUrl: "https://g.foolcdn.com/art/companylogos/square/msft.png"
      },
      GOOGL: {
          companyName: "Alphabet Inc.",
          price: 2500.75,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 2525.00,
          high: 2536.40,
          low: 2498.30,
          MarketCap: "1.80T",
          weekHigh: 2550.20,
          weekLow: 2480.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/alphabet--600.png"
      },
      AMZN: {
          companyName: "Amazon.com Inc.",
          price: 3400.15,
          sector: "Consumer Cyclical",
          exchange: "NASDAQ",
          open: 3455.20,
          high: 3488.50,
          low: 3388.30,
          MarketCap: "1.70T",
          weekHigh: 3550.20,
          weekLow: 3370.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/amazon--600.png"
      },
      FB: {
          companyName: "Meta Platforms Inc.",
          price: 330.75,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 335.20,
          high: 340.50,
          low: 328.40,
          MarketCap: "1.00T",
          weekHigh: 345.20,
          weekLow: 325.10,
          imageUrl: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/02/meta-facebook_feature.jpg"
      },
      TSLA: {
          companyName: "Tesla Inc.",
          price: 900.25,
          sector: "Consumer Cyclical",
          exchange: "NASDAQ",
          open: 910.20,
          high: 920.50,
          low: 895.30,
          MarketCap: "900.75B",
          weekHigh: 930.20,
          weekLow: 880.10,
          imageUrl: "https://g.foolcdn.com/art/companylogos/square/tsla.png"
      },
      JPM: {
          companyName: "JPMorgan Chase & Co.",
          price: 150.35,
          sector: "Financial Services",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "450.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      BABA: {
          companyName: "Alibaba Group Holding Limited",
          price: 200.45,
          sector: "Consumer Cyclical",
          exchange: "NYSE",
          open: 205.20,
          high: 210.50,
          low: 198.30,
          MarketCap: "500.30B",
          weekHigh: 220.20,
          weekLow: 195.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      NVDA: {
          companyName: "NVIDIA Corporation",
          price: 300.65,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 305.20,
          high: 310.50,
          low: 298.30,
          MarketCap: "750.20B",
          weekHigh: 320.20,
          weekLow: 295.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      V: {
          companyName: "Visa Inc.",
          price: 250.45,
          sector: "Financial Services",
          exchange: "NYSE",
          open: 255.20,
          high: 260.50,
          low: 248.30,
          MarketCap: "500.30B",
          weekHigh: 270.20,
          weekLow: 245.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      MA: {
          companyName: "Mastercard Incorporated",
          price: 300.55,
          sector: "Financial Services",
          exchange: "NYSE",
          open: 305.20,
          high: 310.50,
          low: 298.30,
          MarketCap: "350.20B",
          weekHigh: 320.20,
          weekLow: 295.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      PG: {
          companyName: "Procter & Gamble Company",
          price: 150.25,
          sector: "Consumer Defensive",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "350.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      HD: {
          companyName: "The Home Depot Inc.",
          price: 250.45,
          sector: "Consumer Cyclical",
          exchange: "NYSE",
          open: 255.20,
          high: 260.50,
          low: 248.30,
          MarketCap: "300.30B",
          weekHigh: 270.20,
          weekLow: 245.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      DIS: {
          companyName: "The Walt Disney Company",
          price: 150.35,
          sector: "Communication Services",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "300.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      KO: {
          companyName: "The Coca-Cola Company",
          price: 50.45,
          sector: "Consumer Defensive",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.30B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      INTC: {
          companyName: "Intel Corporation",
          price: 50.65,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.20B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      CRM: {
          companyName: "Salesforce.com Inc.",
          price: 250.45,
          sector: "Technology",
          exchange: "NYSE",
          open: 255.20,
          high: 260.50,
          low: 248.30,
          MarketCap: "200.30B",
          weekHigh: 270.20,
          weekLow: 245.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      NFLX: {
          companyName: "Netflix Inc.",
          price: 450.35,
          sector: "Communication Services",
          exchange: "NASDAQ",
          open: 455.20,
          high: 460.50,
          low: 448.30,
          MarketCap: "200.40B",
          weekHigh: 470.20,
          weekLow: 445.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/netflix--600.png"
      },
      VZ: {
          companyName: "Verizon Communications Inc.",
          price: 50.25,
          sector: "Communication Services",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.40B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      PFE: {
          companyName: "Pfizer Inc.",
          price: 40.45,
          sector: "Healthcare",
          exchange: "NYSE",
          open: 45.20,
          high: 50.50,
          low: 38.30,
          MarketCap: "150.40B",
          weekHigh: 60.20,
          weekLow: 35.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      MRK: {
          companyName: "Merck & Co. Inc.",
          price: 80.65,
          sector: "Healthcare",
          exchange: "NYSE",
          open: 85.20,
          high: 90.50,
          low: 78.30,
          MarketCap: "200.20B",
          weekHigh: 100.20,
          weekLow: 75.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      BA: {
          companyName: "The Boeing Company",
          price: 200.25,
          sector: "Industrials",
          exchange: "NYSE",
          open: 205.20,
          high: 210.50,
          low: 198.30,
          MarketCap: "200.30B",
          weekHigh: 220.20,
          weekLow: 195.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      NKE: {
          companyName: "NIKE Inc.",
          price: 150.35,
          sector: "Consumer Cyclical",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "200.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      MCD: {
          companyName: "McDonald's Corporation",
          price: 250.45,
          sector: "Consumer Cyclical",
          exchange: "NYSE",
          open: 255.20,
          high: 260.50,
          low: 248.30,
          MarketCap: "200.30B",
          weekHigh: 270.20,
          weekLow: 245.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      CSCO: {
          companyName: "Cisco Systems Inc.",
          price: 50.65,
          sector: "Technology",
          exchange: "NASDAQ",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.20B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      WMT: {
          companyName: "Walmart Inc.",
          price: 150.25,
          sector: "Consumer Defensive",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "200.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      XOM: {
          companyName: "Exxon Mobil Corporation",
          price: 50.45,
          sector: "Energy",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.30B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      CVX: {
          companyName: "Chevron Corporation",
          price: 80.65,
          sector: "Energy",
          exchange: "NYSE",
          open: 85.20,
          high: 90.50,
          low: 78.30,
          MarketCap: "200.20B",
          weekHigh: 100.20,
          weekLow: 75.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      KO: {
          companyName: "The Coca-Cola Company",
          price: 50.45,
          sector: "Consumer Defensive",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.30B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      JNJ: {
          companyName: "Johnson & Johnson",
          price: 150.25,
          sector: "Healthcare",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "200.40B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      ORCL: {
          companyName: "Oracle Corporation",
          price: 80.65,
          sector: "Technology",
          exchange: "NYSE",
          open: 85.20,
          high: 90.50,
          low: 78.30,
          MarketCap: "200.20B",
          weekHigh: 100.20,
          weekLow: 75.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      PEP: {
          companyName: "PepsiCo Inc.",
          price: 150.25,
          sector: "Consumer Defensive",
          exchange: "NYSE",
          open: 155.20,
          high: 157.50,
          low: 149.80,
          MarketCap: "200.30B",
          weekHigh: 160.20,
          weekLow: 145.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      CMCSA: {
          companyName: "Comcast Corporation",
          price: 50.45,
          sector: "Communication Services",
          exchange: "NASDAQ",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.40B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      T: {
          companyName: "AT&T Inc.",
          price: 30.25,
          sector: "Communication Services",
          exchange: "NYSE",
          open: 35.20,
          high: 40.50,
          low: 28.30,
          MarketCap: "200.30B",
          weekHigh: 50.20,
          weekLow: 25.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      V: {
          companyName: "Visa Inc.",
          price: 250.45,
          sector: "Financial Services",
          exchange: "NYSE",
          open: 255.20,
          high: 260.50,
          low: 248.30,
          MarketCap: "200.30B",
          weekHigh: 270.20,
          weekLow: 245.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      TSM: {
          companyName: "Taiwan Semiconductor Manufacturing Company Limited",
          price: 100.65,
          sector: "Technology",
          exchange: "NYSE",
          open: 105.20,
          high: 110.50,
          low: 98.30,
          MarketCap: "200.20B",
          weekHigh: 120.20,
          weekLow: 95.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      UNH: {
          companyName: "UnitedHealth Group Incorporated",
          price: 400.25,
          sector: "Healthcare",
          exchange: "NYSE",
          open: 405.20,
          high: 410.50,
          low: 398.30,
          MarketCap: "200.30B",
          weekHigh: 420.20,
          weekLow: 395.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      BAC: {
          companyName: "Bank of America Corporation",
          price: 50.45,
          sector: "Financial Services",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.40B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      },
      VZ: {
          companyName: "Verizon Communications Inc.",
          price: 50.25,
          sector: "Communication Services",
          exchange: "NYSE",
          open: 55.20,
          high: 60.50,
          low: 48.30,
          MarketCap: "200.40B",
          weekHigh: 70.20,
          weekLow: 45.10,
          imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg"
      }
// Add more stocks here
};
function addStockInput() {
    const additionalStockSymbol = document.getElementById('additionalStockSymbol').value.toUpperCase();
    

    if (tickerInfo[additionalStockSymbol]) {
        const additionalStockInfo = tickerInfo[additionalStockSymbol];
        const comparisonResultsElement = document.createElement('div');
        const containerId = `comparisonResults${additionalStockSymbol}`; 
        comparisonResultsElement.id = containerId; 
        comparisonResultsElement.classList.add('stock-container');

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
        alert('Please enter a valid stock symbol.');
    }
}


function removeStock(symbol) {
    const stockElement = document.getElementById(`comparisonResults${symbol}`);
    if (stockElement) {
        stockElement.parentNode.removeChild(stockElement);
    }
}



function compareStocks() {
    const container = document.getElementById('additionalStockInput');
    container.style.display = 'block';
  const stockSymbol1 = document.getElementById('searchBox1').value.toUpperCase();
  const stockSymbol2 = document.getElementById('searchBox2').value.toUpperCase();

  
  const stock1Info = tickerInfo[stockSymbol1];
  const stock2Info = tickerInfo[stockSymbol2];

  // Check if both stock symbols are valid
  if (stock1Info && stock2Info) {
      
      displayComparison(stock1Info, stock2Info);
  } else {
      
      alert('Please enter valid stock symbols');
  }
  function displayComparison(stock1Info, stock2Info) {
    // Get the comparison results element where you want to display the comparison
    const comparisonResultsElement1 = document.getElementById('comparisonResults1');
    const comparisonResultsElement2 = document.getElementById('comparisonResults2');
    
    comparisonResultsElement1.innerHTML = '';
    comparisonResultsElement2.innerHTML = '';

    // Create HTML content for stock 1
    const stock1HTML = `
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
            
        </div>
    `;

    const stock2HTML = `
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
        
        </div>
    `;


    comparisonResultsElement1.innerHTML = stock1HTML;
    comparisonResultsElement2.innerHTML = stock2HTML;
}
}



function handleKeyPress(event) {
  if (event.key === 'Enter') {
      
      document.querySelector('.compareButton').click();}
}