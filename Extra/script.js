const tickerInfo = {
  AAPL: {
    companyName: "Apple Inc.",
    price: 150.25,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 174.34,
    high: 176.6,
    low: 173.03,
    MarketCap: "2.70T",
    weekhigh: 199.62,
    weekLow: 154.15,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  MSFT: {
    companyName: "Microsoft Corporation",
    price: 300.5,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 290.2,
    high: 305.7,
    low: 288.4,
    MarketCap: "2.50T",
    weekHigh: 310.45,
    weekLow: 280.1,
    imageUrl: "https://g.foolcdn.com/art/companylogos/square/msft.png",
  },
  GOOGL: {
    companyName: "Alphabet Inc.",
    price: 2500.75,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 2525.0,
    high: 2536.4,
    low: 2498.3,
    MarketCap: "1.80T",
    weekHigh: 2550.2,
    weekLow: 2480.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/alphabet--600.png",
  },
  AMZN: {
    companyName: "Amazon.com Inc.",
    price: 3400.15,
    sector: "Consumer Cyclical",
    exchange: "NASDAQ",
    open: 3455.2,
    high: 3488.5,
    low: 3388.3,
    MarketCap: "1.70T",
    weekHigh: 3550.2,
    weekLow: 3370.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/amazon--600.png",
  },
  FB: {
    companyName: "Meta Platforms Inc.",
    price: 330.75,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 335.2,
    high: 340.5,
    low: 328.4,
    MarketCap: "1.00T",
    weekHigh: 345.2,
    weekLow: 325.1,
    imageUrl:
      "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/02/meta-facebook_feature.jpg",
  },
  TSLA: {
    companyName: "Tesla Inc.",
    price: 900.25,
    sector: "Consumer Cyclical",
    exchange: "NASDAQ",
    open: 910.2,
    high: 920.5,
    low: 895.3,
    MarketCap: "900.75B",
    weekHigh: 930.2,
    weekLow: 880.1,
    imageUrl: "https://g.foolcdn.com/art/companylogos/square/tsla.png",
  },
  JPM: {
    companyName: "JPMorgan Chase & Co.",
    price: 150.35,
    sector: "Financial Services",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "450.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  BABA: {
    companyName: "Alibaba Group Holding Limited",
    price: 200.45,
    sector: "Consumer Cyclical",
    exchange: "NYSE",
    open: 205.2,
    high: 210.5,
    low: 198.3,
    MarketCap: "500.30B",
    weekHigh: 220.2,
    weekLow: 195.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  NVDA: {
    companyName: "NVIDIA Corporation",
    price: 300.65,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 305.2,
    high: 310.5,
    low: 298.3,
    MarketCap: "750.20B",
    weekHigh: 320.2,
    weekLow: 295.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  V: {
    companyName: "Visa Inc.",
    price: 250.45,
    sector: "Financial Services",
    exchange: "NYSE",
    open: 255.2,
    high: 260.5,
    low: 248.3,
    MarketCap: "500.30B",
    weekHigh: 270.2,
    weekLow: 245.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  MA: {
    companyName: "Mastercard Incorporated",
    price: 300.55,
    sector: "Financial Services",
    exchange: "NYSE",
    open: 305.2,
    high: 310.5,
    low: 298.3,
    MarketCap: "350.20B",
    weekHigh: 320.2,
    weekLow: 295.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  PG: {
    companyName: "Procter & Gamble Company",
    price: 150.25,
    sector: "Consumer Defensive",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "350.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  HD: {
    companyName: "The Home Depot Inc.",
    price: 250.45,
    sector: "Consumer Cyclical",
    exchange: "NYSE",
    open: 255.2,
    high: 260.5,
    low: 248.3,
    MarketCap: "300.30B",
    weekHigh: 270.2,
    weekLow: 245.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  DIS: {
    companyName: "The Walt Disney Company",
    price: 150.35,
    sector: "Communication Services",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "300.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  KO: {
    companyName: "The Coca-Cola Company",
    price: 50.45,
    sector: "Consumer Defensive",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.30B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  INTC: {
    companyName: "Intel Corporation",
    price: 50.65,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.20B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  CRM: {
    companyName: "Salesforce.com Inc.",
    price: 250.45,
    sector: "Technology",
    exchange: "NYSE",
    open: 255.2,
    high: 260.5,
    low: 248.3,
    MarketCap: "200.30B",
    weekHigh: 270.2,
    weekLow: 245.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  NFLX: {
    companyName: "Netflix Inc.",
    price: 450.35,
    sector: "Communication Services",
    exchange: "NASDAQ",
    open: 455.2,
    high: 460.5,
    low: 448.3,
    MarketCap: "200.40B",
    weekHigh: 470.2,
    weekLow: 445.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/netflix--600.png",
  },
  VZ: {
    companyName: "Verizon Communications Inc.",
    price: 50.25,
    sector: "Communication Services",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.40B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  PFE: {
    companyName: "Pfizer Inc.",
    price: 40.45,
    sector: "Healthcare",
    exchange: "NYSE",
    open: 45.2,
    high: 50.5,
    low: 38.3,
    MarketCap: "150.40B",
    weekHigh: 60.2,
    weekLow: 35.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  MRK: {
    companyName: "Merck & Co. Inc.",
    price: 80.65,
    sector: "Healthcare",
    exchange: "NYSE",
    open: 85.2,
    high: 90.5,
    low: 78.3,
    MarketCap: "200.20B",
    weekHigh: 100.2,
    weekLow: 75.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  BA: {
    companyName: "The Boeing Company",
    price: 200.25,
    sector: "Industrials",
    exchange: "NYSE",
    open: 205.2,
    high: 210.5,
    low: 198.3,
    MarketCap: "200.30B",
    weekHigh: 220.2,
    weekLow: 195.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  NKE: {
    companyName: "NIKE Inc.",
    price: 150.35,
    sector: "Consumer Cyclical",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "200.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  MCD: {
    companyName: "McDonald's Corporation",
    price: 250.45,
    sector: "Consumer Cyclical",
    exchange: "NYSE",
    open: 255.2,
    high: 260.5,
    low: 248.3,
    MarketCap: "200.30B",
    weekHigh: 270.2,
    weekLow: 245.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  CSCO: {
    companyName: "Cisco Systems Inc.",
    price: 50.65,
    sector: "Technology",
    exchange: "NASDAQ",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.20B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  WMT: {
    companyName: "Walmart Inc.",
    price: 150.25,
    sector: "Consumer Defensive",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "200.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  XOM: {
    companyName: "Exxon Mobil Corporation",
    price: 50.45,
    sector: "Energy",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.30B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  CVX: {
    companyName: "Chevron Corporation",
    price: 80.65,
    sector: "Energy",
    exchange: "NYSE",
    open: 85.2,
    high: 90.5,
    low: 78.3,
    MarketCap: "200.20B",
    weekHigh: 100.2,
    weekLow: 75.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  KO: {
    companyName: "The Coca-Cola Company",
    price: 50.45,
    sector: "Consumer Defensive",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.30B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  JNJ: {
    companyName: "Johnson & Johnson",
    price: 150.25,
    sector: "Healthcare",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "200.40B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  ORCL: {
    companyName: "Oracle Corporation",
    price: 80.65,
    sector: "Technology",
    exchange: "NYSE",
    open: 85.2,
    high: 90.5,
    low: 78.3,
    MarketCap: "200.20B",
    weekHigh: 100.2,
    weekLow: 75.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  PEP: {
    companyName: "PepsiCo Inc.",
    price: 150.25,
    sector: "Consumer Defensive",
    exchange: "NYSE",
    open: 155.2,
    high: 157.5,
    low: 149.8,
    MarketCap: "200.30B",
    weekHigh: 160.2,
    weekLow: 145.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  CMCSA: {
    companyName: "Comcast Corporation",
    price: 50.45,
    sector: "Communication Services",
    exchange: "NASDAQ",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.40B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  T: {
    companyName: "AT&T Inc.",
    price: 30.25,
    sector: "Communication Services",
    exchange: "NYSE",
    open: 35.2,
    high: 40.5,
    low: 28.3,
    MarketCap: "200.30B",
    weekHigh: 50.2,
    weekLow: 25.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  V: {
    companyName: "Visa Inc.",
    price: 250.45,
    sector: "Financial Services",
    exchange: "NYSE",
    open: 255.2,
    high: 260.5,
    low: 248.3,
    MarketCap: "200.30B",
    weekHigh: 270.2,
    weekLow: 245.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  TSM: {
    companyName: "Taiwan Semiconductor Manufacturing Company Limited",
    price: 100.65,
    sector: "Technology",
    exchange: "NYSE",
    open: 105.2,
    high: 110.5,
    low: 98.3,
    MarketCap: "200.20B",
    weekHigh: 120.2,
    weekLow: 95.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  UNH: {
    companyName: "UnitedHealth Group Incorporated",
    price: 400.25,
    sector: "Healthcare",
    exchange: "NYSE",
    open: 405.2,
    high: 410.5,
    low: 398.3,
    MarketCap: "200.30B",
    weekHigh: 420.2,
    weekLow: 395.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  BAC: {
    companyName: "Bank of America Corporation",
    price: 50.45,
    sector: "Financial Services",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.40B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  VZ: {
    companyName: "Verizon Communications Inc.",
    price: 50.25,
    sector: "Communication Services",
    exchange: "NYSE",
    open: 55.2,
    high: 60.5,
    low: 48.3,
    MarketCap: "200.40B",
    weekHigh: 70.2,
    weekLow: 45.1,
    imageUrl: "https://s3-symbol-logo.tradingview.com/apple--big.svg",
  },
  // Add more stocks here
};

function getTickerInfo(ticker) {
  ticker = ticker.toUpperCase();

  if (tickerInfo[ticker]) {
    const stockDetails = tickerInfo[ticker];
    document.getElementById("stockImage").src = stockDetails.imageUrl;
    document.getElementById("stockPriceInfo").textContent =
      stockDetails.companyName;
    document.getElementById(
      "stockDataRecieved"
    ).textContent = `${ticker} Price : ${stockDetails.price}`;
    document.getElementById(
      "openStockPrice"
    ).textContent = `Open: ${stockDetails.open}`;
    document.getElementById("high").textContent = `High: ${stockDetails.high}`;
    document.getElementById("low").textContent = `Low: ${stockDetails.low}`;
    document.getElementById(
      "marketCap"
    ).textContent = `Market Cap: ${stockDetails.MarketCap}`;
    document.getElementById(
      "weekHigh52"
    ).textContent = `52 Week High: ${stockDetails.weekHigh}`;
    document.getElementById(
      "weekLow52"
    ).textContent = `52 Week Low: ${stockDetails.weekLow}`;
    document.getElementById(
      "sectorStock"
    ).textContent = `Sector: ${stockDetails.sector}`;
    document.getElementById(
      "exchangeStock"
    ).textContent = `Exchange: ${stockDetails.exchange}`;
  } else {
    document.getElementById("stockPriceInfo").textContent = "Ticker not found";
    alert("SORRY WE DO NOT HAVE THAT YET");
  }
}
// Add autocomplete functionality
const searchBar = document.getElementById("searchBox");
const autocompleteSuggestions = document.getElementById(
  "autocompleteSuggestions"
);

// Define your data for autocomplete suggestions
const tickerSymbols = Object.keys(tickerInfo);

// Add event listener for input event on the search bar
searchBox.addEventListener("input", function () {
  // Clear previous suggestions
  autocompleteSuggestions.innerHTML = "";

  // Get user input
  const userInput = searchBox.value.toLowerCase();

  // Filter data to find matches
  const matches = tickerSymbols.filter((symbol) =>
    symbol.toLowerCase().includes(userInput)
  );

  // Generate HTML for suggestions and update the autocomplete suggestions container
  matches.forEach((match) => {
    const suggestion = document.createElement("div");
    suggestion.textContent = match;
    autocompleteSuggestions.appendChild(suggestion);
  });
});

// Add event listener to handle selection from autocomplete suggestions
autocompleteSuggestions.addEventListener("click", function (event) {
  const selectedSymbol = event.target.textContent;
  searchBox.value = selectedSymbol;
  // Call your function to fetch and display ticker info
  getTickerInfo(selectedSymbol);
});

// Additional function to handle enter key press
searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const selectedSymbol = searchBox.value.toUpperCase();
    // Call your function to fetch and display ticker info
    getTickerInfo(selectedSymbol);
  }
});
function handleKeyUp(event) {
  const input = document.getElementById("searchBox");
  const inputValue = input.value.trim(); // Trim whitespace from input value

  // If input value is empty, hide autocomplete suggestions
  if (!inputValue) {
    hideAutocompleteSuggestions();
    return;
  }

  // Show autocomplete suggestions if input value is not empty
  showAutocompleteSuggestions(inputValue);
}

function hideAutocompleteSuggestions() {
  const autocompleteSuggestions = document.getElementById(
    "autocompleteSuggestions"
  );
  autocompleteSuggestions.innerHTML = ""; // Clear autocomplete suggestions
}

function showAutocompleteSuggestions(inputValue) {
  const autocompleteSuggestions = document.getElementById(
    "autocompleteSuggestions"
  );

  // Your autocomplete logic here to populate suggestions based on inputValue
  const suggestions = tickerInfo.keys; // Replace this with your actual autocomplete suggestions

  // Check if there are any suggestions
  if (suggestions.length > 0) {
    // Construct HTML for displaying suggestions
    const suggestionHTML = suggestions
      .map((suggestion) => `<div>${suggestion}</div>`)
      .join("");
      
    autocompleteSuggestions.innerHTML = suggestionHTML;
  } else {
    // If no suggestions, hide autocomplete suggestions
    hideAutocompleteSuggestions();
  }
}

// Attach the handleKeyUp function to the keyup event of the search bar
document.getElementById("searchBox").addEventListener("keyup", handleKeyUp);

function handleKeyPress(event) {
  if (event.key === "Enter") {
    document.querySelector(".searchButton").click();
  }
}
function updateDateTime() {
  var now = new Date();
  var datetimeElement = document.getElementById("datetime");
  var date = now.toDateString(); // Get date in "Day Month Date Year" format
  var time = now.toLocaleTimeString(); // Get time in local time format

  // Update the content of the datetime element
  datetimeElement.textContent = "Date: " + date + " | Time: " + time;
}

// Call the updateDateTime function initially to set the initial date and time
updateDateTime();

// Update date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
