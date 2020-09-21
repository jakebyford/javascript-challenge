// from data.js
var tableData = data;

// YOUR CODE HERE!
var myTable = d3.select("table");

myTable.attr("class", "table table-striped");

var myTableBody = d3.select("tbody");

            //console.log(tableData);

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
            

            tableData.forEach(function(myRow) {
                console.log(myRow);
                var t_row = myTableBody.append("tr");

                Object.entries(myRow).forEach(function([k, v]) {
                    console.log(k, v);
                    var my_cell = t_row.append("td");
                    my_cell.text(v);
                })
            });