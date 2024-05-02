
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
    

function getTickerInfo(ticker) {
    ticker = ticker.toUpperCase();

    if (tickerInfo[ticker]) {
        const stockDetails = tickerInfo[ticker];
        document.getElementById('stockImage').src = stockDetails.imageUrl;
        document.getElementById('stockPriceInfo').textContent = stockDetails.companyName;
        document.getElementById('stockDataRecieved').textContent = `${ticker} Price : ${stockDetails.price}`;
        document.getElementById('openStockPrice').textContent = `Open: ${stockDetails.open}`;
        document.getElementById('high').textContent = `High: ${stockDetails.high}`;
        document.getElementById('low').textContent = `Low: ${stockDetails.low}`;
        document.getElementById('marketCap').textContent = `Market Cap: ${stockDetails.MarketCap}`;
        document.getElementById('weekHigh52').textContent = `52 Week High: ${stockDetails.weekHigh}`;
        document.getElementById('weekLow52').textContent = `52 Week Low: ${stockDetails.weekLow}`;
        document.getElementById('sectorStock').textContent = `Sector: ${stockDetails.sector}`;
        document.getElementById('exchangeStock').textContent = `Exchange: ${stockDetails.exchange}`;
       
       
    } else {
        document.getElementById('stockPriceInfo').textContent = 'Ticker not found';
        alert("SORRY WE DO NOT HAVE THAT YET");
        
    }
}
// Add autocomplete functionality
const searchBar = document.getElementById('searchBox');
const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');

// Define your data for autocomplete suggestions
const tickerSymbols = Object.keys(tickerInfo);

// Add event listener for input event on the search bar
searchBox.addEventListener('input', function() {
    // Clear previous suggestions
    autocompleteSuggestions.innerHTML = '';

    // Get user input
    const userInput = searchBox.value.toLowerCase();

    // Filter data to find matches
    const matches = tickerSymbols.filter(symbol => symbol.toLowerCase().includes(userInput));

    // Generate HTML for suggestions and update the autocomplete suggestions container
    matches.forEach(match => {
        const suggestion = document.createElement('div');
        suggestion.textContent = match;
        autocompleteSuggestions.appendChild(suggestion);
    });
});

// Add event listener to handle selection from autocomplete suggestions
autocompleteSuggestions.addEventListener('click', function(event) {
    const selectedSymbol = event.target.textContent;
    searchBox.value = selectedSymbol;
    // Call your function to fetch and display ticker info
    getTickerInfo(selectedSymbol);
});

// Additional function to handle enter key press
searchBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const selectedSymbol = searchBox.value.toUpperCase();
        // Call your function to fetch and display ticker info
        getTickerInfo(selectedSymbol);
    }
});
function handleKeyUp(event) {
    const input = document.getElementById('searchBox');
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
    const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');
    autocompleteSuggestions.innerHTML = ''; // Clear autocomplete suggestions
}

function showAutocompleteSuggestions(inputValue) {
    const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');

    // Your autocomplete logic here to populate suggestions based on inputValue
    const suggestions = tickerInfo.keys; // Replace this with your actual autocomplete suggestions

    // Check if there are any suggestions
    if (suggestions.length > 0) {
        // Construct HTML for displaying suggestions
        const suggestionHTML = suggestions.map(suggestion => `<div>${suggestion}</div>`).join('');
        autocompleteSuggestions.innerHTML = suggestionHTML;
    } else {
        // If no suggestions, hide autocomplete suggestions
        hideAutocompleteSuggestions();
    }
}

// Attach the handleKeyUp function to the keyup event of the search bar
document.getElementById('searchBox').addEventListener('keyup', handleKeyUp);




function handleKeyPress(event) {
    if (event.key === 'Enter') {
        
        document.querySelector('.searchButton').click();
    }
}
function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    var date = now.toDateString(); // Get date in "Day Month Date Year" format
    var time = now.toLocaleTimeString(); // Get time in local time format
  
    // Update the content of the datetime element
    datetimeElement.textContent = 'Date: ' + date + ' | Time: ' + time;
  }
  
  // Call the updateDateTime function initially to set the initial date and time
  updateDateTime();
  
  // Update date and time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);
