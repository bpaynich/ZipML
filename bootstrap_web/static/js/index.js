zip_code = '90010';

function buildRestaurantData(zip_code) {

  // Build the metadata panel
  const url = "/api/restaurants/" + zip_code;
 
  let tbody = d3.select("#restaurant_table");

    tbody.html("");

    d3.json(url, function(data) {
      console.log(data);
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
  
    //   d3.json(url).then(function(data) {
    d3.json(url, function(data) {
        console.log(data);
        Object.entries(data).forEach(function([key, value]) {
          tbody.append("tr");
           tbody.append("td").text(key);
          tbody.append("td").text(value);
          
        });
      });
    };

    function buildToursData(zip_code) {

        // Build the metadata panel
        const url = "/api/tours/" + zip_code;
       
        let tbody = d3.select("#tours_table");
      
          tbody.html("");
      
        //   d3.json(url).then(function(data) {
        d3.json(url, function(data) {
            console.log(data);
            Object.entries(data).forEach(function([key, value]) {
              tbody.append("tr");
               tbody.append("td").text(key);
              tbody.append("td").text(value);
              
            });
          });
        };

        function buildSchoolsData(zip_code) {

            // Build the metadata panel
            const url = "/api/schools/" + zip_code;
           
            let tbody = d3.select("#schools_table");
          
              tbody.html("");
          
            //   d3.json(url).then(function(data) {
            d3.json(url, function(data) {
                console.log(data);
                Object.entries(data).forEach(function([key, value]) {
                  tbody.append("tr");
                   tbody.append("td").text(key);
                  tbody.append("td").text(value);
                  
                });
              });
            };

            function buildStadiumsData(zip_code) {

                // Build the metadata panel
                const url = "/api/stadiums/" + zip_code;
               
                let tbody = d3.select("#stadiums_table");
              
                  tbody.html("");
              
                //   d3.json(url).then(function(data) {
                d3.json(url, function(data) {
                    console.log(data);
                    Object.entries(data).forEach(function([key, value]) {
                      tbody.append("tr");
                       tbody.append("td").text(key);
                      tbody.append("td").text(value);
                      
                    });
                  });
                };


  buildRestaurantData(zip_code);
  buildTheatersData(zip_code);
  buildToursData(zip_code);
  buildSchoolsData(zip_code);
  buildStadiumsData(zip_code);