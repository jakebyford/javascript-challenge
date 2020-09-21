// from data.js
var tableData = data;

// YOUR CODE HERE!
var myTable = d3.select("table");

myTable.attr("class", "table table-striped");

var myTableBody = d3.select("tbody");

    //console.log(tableData);

//Pull in all the data from the data.js file and append to a table on the website
/* We pull everything from UFO-level-1 folder for the filter-button */
    tableData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            //console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        })
    });

//Set the button to the filtered date
    var button = d3.select("#filter-btn");
    var form = d3.select("#form-group");
    button.on("click", runEnter);
    form.on("submit", runEnter);


//Function to filter data by date
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
//Get the datetime data
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
/************************************************************/
    //Get the City Data 
    var filteredCityData = tableData.filter(inputCity => inputCity.city === inputValue);
    console.log(filteredCityData);

    filteredCityData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            //console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        });
    });
/************************************************************/
    //Get the State Data 
    var filteredStateData = tableData.filter(inputState => inputState.state === inputValue);
    console.log(filteredStateData);

    filteredStateData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            //console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        });
    });
/************************************************************/
    //Get the Country Data 
    var filteredCountryData = tableData.filter(inputCountry => inputCountry.country === inputValue);
    console.log(filteredCountryData);

    filteredCountryData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            //console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        });
    });
/************************************************************/
    //Get the Shape Data 
    var filteredShapeData = tableData.filter(inputShape => inputShape.shape === inputValue);
    console.log(filteredShapeData);

    filteredShapeData.forEach(function(myRow) {
        //console.log(myRow);
        var t_row = myTableBody.append("tr");
        Object.entries(myRow).forEach(function([k, v]) {
            //console.log(k, v);
            var my_cell = t_row.append("td");
            my_cell.text(v);
        });
    });


};

