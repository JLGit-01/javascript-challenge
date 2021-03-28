// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(tableData);

tableData.forEach((alienReport) => {
   
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = row.append("td"); //table cell
        cell.text(value);
    });
});

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
//var form = d3.select("#form");

// Create event handlers 
button.on("click", function() {
   
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement)
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    //   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    var filteredData = tableData.filter(x => x.datetime === inputValue)

    console.log(filteredData);
    tbody.html("")
    filteredData.forEach((alienReport) => {       
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
            var cell = row.append("td"); //table cell
            cell.text(value);
        });
    });

})