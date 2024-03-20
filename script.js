const staticStockData = {
  AAPL: {
      price: 200,
      name: 'Apple',
  },
  AMZN: {
      price: 300,
      name: 'Amazon'
  },
  GOOGL: {
      price: 500,
      name: 'Google'
  },
  MSFT: {
      price: 800,
      name: 'Microsoft'
  },
};

function getStockPrice() {
    let stockInput = document.getElementById("searchBox").value.toUpperCase();
    const selectedStock = staticStockData[stockInput];
    
    let stockInfo = "";
    
    if (selectedStock) {
        stockInfo = `${selectedStock.name}: $${selectedStock.price}`;
    } else {
        stockInfo = "Stock not found";
    }
    
    document.getElementById("stockDataReceived").innerHTML = stockInfo;
}

/*function getStockPrice() {
let stockInput = document.getElementById("searchBox").value.toUpperCase();

const selectedStock = staticStockData[stockInput];

let stockInfo = `${selectedStock.price}`;

stockInfo = document.getElementById("stockDataRecieved");
}
//document.getElementById("stockDataRecieved").innerHTML = stockInfo; */