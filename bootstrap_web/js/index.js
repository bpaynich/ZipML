zip_code = '85021'

function buildRestaurantData(zip_code) {

  // Build the metadata panel
  const url = "/api/restaurant/" + zip_code;
 
  let tbody = d3.select("#restaurant_table");

    tbody.html("");

    d3.json(url).then(function(data) {
      console.log(data);
    //   tbody.html('<a><img src="static/img/'+ ticker +'.png"></a><br/>');
      Object.entries(data).forEach(function([key, value]) {
        tbody.append("tr");
         tbody.append("td").text(key);
        tbody.append("td").text(value);
      });
    });
  };

  function buildTheatersData(zip_code) {

    // Build the metadata panel
    const url = "/api/theater/" + zip_code;
   
    let tbody = d3.select("#theater_table");
  
      tbody.html("");
  
      d3.json(url).then(function(data) {
        console.log(data);
      //   tbody.html('<a><img src="static/img/'+ ticker +'.png"></a><br/>');
        Object.entries(data).forEach(function([key, value]) {
          tbody.append("tr");
           tbody.append("td").text(key);
          tbody.append("td").text(value);
        });
      });
    };




  buildRestaurantData(zip_code);
  buildTheatersData(zip_code);