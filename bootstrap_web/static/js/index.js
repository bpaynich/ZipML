zip_code ='77001'; 

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
      var columnHead=["Name", "Address", "City", 'State', "Phone", "Rating", "# of Reviews"];

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
          tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'rating', 'review_count']);
          
      });
    };

  function buildToursData(zip_code) {

        // Build the metadata panel
        const url = "/api/tours/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {
          var columnHead=["Name", "Address", "City", 'State', "Phone", "Rating", "# of Reviews"];
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
              tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'rating', 'review_count']);
          });
        };

  function buildStadiumsData(zip_code) {

        // Build the metadata panel
        const url = "/api/stadiums/" + zip_code;
       
        //   tbody.html("");
          d3.json(url, function (data) {
            var columnHead=["Name", "Address", "City", 'State', "Phone", "Rating", "# of Reviews"];
      
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
              tabulate(data, ['name','address', 'city', 'state', 'display_phone', 'rating', 'review_count']);
          });
        };

    function buildWeatherData(zip_code) {

        const url = "http://localhost:5000/api/weather/" + zip_code;
        d3.json(url, function(weather_data) {
         document.getElementById("weather_table").innerHTML = 
         '<h4><strong>City:</strong> ' + weather_data.name + '</h4>' +
         '<br/><h4><strong>Forecast:</strong> ' + weather_data.weather[0].main + '</h4>' +
         '<br/><h4><strong>Temperature:</strong> ' + weather_data.main.temp + " F" + '</h4>' +
         '<br/><h4><strong>Humidity:</strong> ' + weather_data.main.humidity + " %" + '</h4>' +
         '<br/><h4><strong>Wind Speed:</strong> ' + weather_data.wind.speed + " mph" + '</h4>'
         ;
                });
          };
    
    function buildWeatherImg() {
      const url = "http://localhost:5000/api/weather/" + zip_code;
        d3.json(url, function(weather_data) { 
            
            if (weather_data.main.temp > 80) {
              var img = "static/img/portfolio/beer.jpg";
            }
            else if (weather_data.main.temp < 80 && weather_data.main.temp > 60) {
              img = "static/img/portfolio/coffee.jpg";
            }
            else {
              img = "static/img/portfolio/coco.jpg";
            }
            d3.json(img, function() {
            document.getElementById("weather_image").innerHTML = 
            
             '<img src='+img+'></img>'
             ;
            });
          });
        }

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

  buildWeatherImg();
  buildWeatherData(zip_code);
  buildRestaurantData(zip_code);
  buildTheatersData(zip_code);
  buildToursData(zip_code);
  buildStadiumsData(zip_code);
  buildHouseholdIncomeData(zip_code);
