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
button.on("click", function() {
    tbody.html("");
var inputfield=d3.select("#datetime");
var inputfield2=d3.select("#cityname");
var inputValue = inputfield.property("value");
var inputValue2 = inputfield2.property("value");
var inputfield3=d3.select("#statename");
var inputValue3 = inputfield3.property("value");
var inputfield4=d3.select("#countryname");
var inputValue4 = inputfield4.property("value");
var inputfield5=d3.select("#shapename");
var inputValue5 = inputfield5.property("value");
console.log(inputValue);
console.log(inputValue2);
console.log(inputValue3);
console.log(inputValue4);
console.log(inputValue5);

if(inputfield) === tableData.filter(tableData => tableData.datetime === inputValue){

// var filteredData = tableData.filter(ufo => ufo.datetime === inputValue||ufo.cityname === inputValue2||ufo.state === inputValue3 ||ufo.country === inputValue4||ufo.shape === inputValue5);
// // console.log(filteredData);
filteredData.forEach(function(select_data){
    var row = tbody.append("tr");   
Object.entries(select_data).forEach(function([key, value]){
        console.log(key,value);
    var cell = row.append("td");
        cell.text(value);
    })        
})
}
});