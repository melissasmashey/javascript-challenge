// from data.js
var tableData = data;
// console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach(function(ufoData){
   var row = tbody.append("tr");   
Object.entries(ufoData).forEach(function([key, value]){
    // console.log(key,value);
    var cell = row.append("td");
      cell.text(value);
 })   
})
var row = tbody.append("tr");

var button=d3.select("#filter-btn");
var form=d3.select("#form")
function runEnter() {
d3.event.preventDefault();    
    tbody.html("");
var inputfield=d3.select("#datetime");
var inputValue = inputfield.property("value");
// console.log(inputValue);
var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
// console.log(filteredData);
filteredData.forEach(function(select_date){
    // console.log(select_date);
    var row = tbody.append("tr");   
Object.entries(select_date).forEach(function([key, value]){
        // console.log(key,value);
    var cell = row.append("td");
        cell.text(value);
        })        
})
};
button.on("click", runEnter);
form.on("submit", runEnter);

