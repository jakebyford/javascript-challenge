// from data.js
var tableData = data;

// YOUR CODE HERE!
var myTable = d3.select("table");

myTable.attr("class", "table table-striped");

var myTableBody = d3.select("tbody");

//console.log(tableData);

/**********************************************************/


//Step 1: Loop through `data` and console.log 
//each ufo sighting data

    /* tableData.forEach(function(data) {
        console.log(data);
    })*/

//Step 2: Use d3 to append onetable row `tr` for each ufo sighting data report object. 
//Dont worry about adding cells or text yet, just try appending `tr` elements

    /* tableData.forEach(function(myRow) {
        console.log(myRow)
        var t_row = myTableBody.append("tr");
    }) */

//Step 3: Use 'Object.entries' to console.log each value

    /* tableData.forEach(function(myRow) {
        console.log(myRow)
        var t_row = myTableBody.append("tr");

        Object.entries(myRow).forEach(function([k, v]) {
            console.log(k, v);
        })
    }); */

//Step 4: Use d3 to append 1 cell per ufo report value (datetime, city, state, country, shape, etc...)
//Step 5: Use d3 to update each cells text with weather report value (datetime, city, state, country, shape, etc...)
// ***This is Steps 1 - 5 combined. How to make the table.***

tableData.forEach(function(myRow) {
    //console.log(myRow);
    var t_row = myTableBody.append("tr");
    Object.entries(myRow).forEach(function([k, v]) {
        console.log(k, v);
        var my_cell = t_row.append("td");
        my_cell.text(v);
    })
});

// Step 6: Set the button to the filtered date

var button = d3.select("#filter-btn");
var form = d3.select("#form-group");
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {
    //Clear all table data
    var table = document.getElementById("ufo-table");

    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

    // Prevent the page from refreshing 
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    //Print the value to the console
    console.log(inputValue);

    //Get the filtered data and return it to the website
    var filteredData = tableData.filter(inputDate => inputDate.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        });
    });
};