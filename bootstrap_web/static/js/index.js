 zip_code = '85286';

  function buildRestaurantData(zip_code) {

    // Build the metadata panel
    const url = "/api/restaurants/" + zip_code;
  
      d3.json(url, function (data) {

        function tabulate(data, columns) {
              var table = d3.select('#restaurant_table').append('table')
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
          tabulate(data, ['name','display_address', 'display_phone', 'rating', 'review_count']);
      
      });
          
    };

  function buildTheatersData(zip_code) {

    // Build the metadata panel
    const url = "/api/theater/" + zip_code;
  
      d3.json(url, function (data) {

        function tabulate(data, columns) {
              var table = d3.select('#theater_table').append('table')
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
          tabulate(data, ['name','location', 'price', 'rating', 'review_count']);
      });
    };

  function buildToursData(zip_code) {

        // Build the metadata panel
        const url = "/api/tours/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {

            function tabulate(data, columns) {
                  var table = d3.select('#tours_table').append('table')
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
              tabulate(data, ['name','location', 'price', 'rating', 'review_count']);
          });
        };

  function buildStadiumsData(zip_code) {

        // Build the metadata panel
        const url = "/api/stadiums/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {

            function tabulate(data, columns) {
                  var table = d3.select('#stadium_table').append('table')
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
              tabulate(data, ['name','location', 'price', 'rating', 'review_count']);
          });
        };

  buildRestaurantData(zip_code);
  buildTheatersData(zip_code);
  buildToursData(zip_code);
  buildStadiumsData(zip_code);

//   buildSchoolsData(zip_code);