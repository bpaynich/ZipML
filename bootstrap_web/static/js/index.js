//  var zip_code = document.getElementById("tag");
zip_code = '85027';
// console.log(zip_code); 

  function buildRestaurantData(zip_code) {

    // Build the metadata panel
    const url = "/api/restaurants/" + zip_code;
      //tbody.html("");
      d3.json(url, function(data) {
        var columnHead=["Name", "Address", "City", 'State', "Phone", "Rating", "# of Reviews"];

        function tabulate(data, columns) {
              var table = d3.select('#restaurant_table').append('table')
              var thead = table.append('thead')
              var tbody = table.append('tbody');
             
              // append the header row
              thead.append('tr')
                .selectAll('th')
                .data(columnHead).enter()
                .append('th')
                  .text(function (column) { return column; });
      
              // create a row for each object in the data
              var rows = tbody.selectAll('tr')
                .data(data.businesses)
                .enter()
                .append('tr');
      
              // create a cell in each row for each column
              var cells = rows.selectAll('td')
                .data(function (row) {
                  return columns.map(function (column) {
                    return {column: column, value: row[column]};
                  });
                })
                .enter()
                .append('td')
                .text(function (d) { return d.value; });
      
            return table;
          }
      
          // render the table(s)
          for (var i=0; i<data.businesses.length; i++) {
              data.businesses[i]["address"]= data.businesses[i]['location']['address1']
              data.businesses[i]["city"]=data.businesses[i]['location']['city']
              data.businesses[i]["state"]=data.businesses[i]['location']['state']
          }


          tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'rating', 'review_count']);

      });
          
    };

  function buildTheatersData(zip_code) {

    // Build the metadata panel
    const url = "/api/theater/" + zip_code;
  
      d3.json(url, function (data) {
      var columnHead=["Name", "Address", "City", 'State', "Phone", "Price Range", "Rating", "# of Reviews"];

        function tabulate(data, columns) {
              var table = d3.select('#theater_table').append('table')
              var thead = table.append('thead')
              var tbody = table.append('tbody');
             
              // append the header row
              thead.append('tr')
                .selectAll('th')
                .data(columnHead).enter()
                .append('th')
                  .text(function (column) { return column; });
      
              // create a row for each object in the data
              var rows = tbody.selectAll('tr')
                .data(data.businesses)
                .enter()
                .append('tr');
      
              // create a cell in each row for each column
              var cells = rows.selectAll('td')
                .data(function (row) {
                  return columns.map(function (column) {
                    return {column: column, value: row[column]};
                  });
                })
                .enter()
                .append('td')
                  .text(function (d) { return d.value; });
      
            return table;
          }
      
          // render the table(s)
          for (var i=0; i<data.businesses.length; i++) {
            data.businesses[i]["address"]= data.businesses[i]['location']['address1']
            data.businesses[i]["city"]=data.businesses[i]['location']['city']
            data.businesses[i]["state"]=data.businesses[i]['location']['state']
        }
          tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'price', 'rating', 'review_count']);
          
      });
    };

  function buildToursData(zip_code) {

        // Build the metadata panel
        const url = "/api/tours/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {
          var columnHead=["Name", "Address", "City", 'State', "Phone", "Price Range", "Rating", "# of Reviews"];
            function tabulate(data, columns) {
                  var table = d3.select('#tours_table').append('table')
                  var thead = table.append('thead')
                  var tbody = table.append('tbody');
                 
                  // append the header row
                  thead.append('tr')
                    .selectAll('th')
                    .data(columnHead).enter()
                    .append('th')
                      .text(function (column) { return column; });
          
                  // create a row for each object in the data
                  var rows = tbody.selectAll('tr')
                    .data(data.businesses)
                    .enter()
                    .append('tr');
          
                  // create a cell in each row for each column
                  var cells = rows.selectAll('td')
                    .data(function (row) {
                      return columns.map(function (column) {
                        return {column: column, value: row[column]};
                      });
                    })
                    .enter()
                    .append('td')
                      .text(function (d) { return d.value; });
          
                return table;
              }
          
              // render the table(s)
              for (var i=0; i<data.businesses.length; i++) {
                data.businesses[i]["address"]= data.businesses[i]['location']['address1']
                data.businesses[i]["city"]=data.businesses[i]['location']['city']
                data.businesses[i]["state"]=data.businesses[i]['location']['state']
            }
              tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'price', 'rating', 'review_count']);
          });
        };

  function buildStadiumsData(zip_code) {

        // Build the metadata panel
        const url = "/api/stadiums/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {
            var columnHead=["Name", "Address", "City", 'State', "Phone", "Price Range", "Rating", "# of Reviews"];
      
            function tabulate(data, columns) {
                  var table = d3.select('#stadium_table').append('table')
                  var thead = table.append('thead')
                  var tbody = table.append('tbody');
                 
                  // append the header row
                  thead.append('tr')
                    .selectAll('th')
                    .data(columnHead).enter()
                    .append('th')
                      .text(function (column) { return column; });
          
                  // create a row for each object in the data
                  var rows = tbody.selectAll('tr')
                    .data(data.businesses)
                    .enter()
                    .append('tr');
          
                  // create a cell in each row for each column
                  var cells = rows.selectAll('td')
                    .data(function (row) {
                      return columns.map(function (column) {
                        return {column: column, value: row[column]};
                      });
                    })
                    .enter()
                    .append('td')
                      .text(function (d) { return d.value; });
          
                return table;
              }
          
              // render the table(s)
              for (var i=0; i<data.businesses.length; i++) {
                data.businesses[i]["address"]= data.businesses[i]['location']['address1']
                data.businesses[i]["city"]=data.businesses[i]['location']['city']
                data.businesses[i]["state"]=data.businesses[i]['location']['state']
            }
              tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'price', 'rating', 'review_count']);
          });
        };

  function buildHouseholdIncomeData(zip_code) {

            // Build the metadata panel
            const url = "/api/housing/" + zip_code;
           
            //   tbody.html("");
              d3.json(url, function (data) {
    
                function tabulate(data, columns) {
                      var table = d3.select('#household_income_table').append('table')
                      var thead = table.append('thead')
                      var tbody = table.append('tbody');
                     
                      // append the header row
                      thead.append('tr')
                        .selectAll('th')
                        .data(columns).enter()
                        .append('th')
                          .text(function (column) { return column; });
              
                      // create a row for each object in the data
                      var rows = tbody.selectAll('tr')
                        .data(data)
                        .enter()
                        .append('tr');
              
                      // create a cell in each row for each column
                      var cells = rows.selectAll('td')
                        .data(function (row) {
                          return columns.map(function (column) {
                            return {column: column, value: row[column]};
                          });
                        })
                        .enter()
                        .append('td')
                          .text(function (d) { return d.value; });
              
                    return table;
                  }
              
                  // render the table(s)
                  tabulate(data, ['x','y']);
              });
        };


  buildRestaurantData(zip_code);
  buildTheatersData(zip_code);
  buildToursData(zip_code);
  buildStadiumsData(zip_code);
  buildHouseholdIncomeData(zip_code);
