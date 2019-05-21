function buildHousingOccupancy(zipcode) {

        const url = "/api/housing/" + zipcode;
    
        d3.json(url, function(data) {

        // Build a Pie Chart
        var x_array = [];
        var y_array = [];
        for (var i = 0; i < 4; i++) { 
          x = data.housing_occupancy[0].values[i].x
          y = data.housing_occupancy[0].values[i].y
          x_array.push(x);
          y_array.push(y);
        }

        var trace1 = {
          values: y_array,
          labels: x_array,
          type: 'pie'
        };
    
        // data
        var data1 = [trace1];
    
        var layout1 = {
          title: 'Annual Individual Earnings',
          showlegend: true,
          height: 600,
          width: 600
        };
    
        Plotly.newPlot("housing_occupancy", data1, layout1);
        
    });
};

function buildHousingType(zipcode) {

  const url = "/api/housing/" + zipcode;

  d3.json(url, function(data) {

  // Build a Pie Chart
  var x_array = [];
  var y_array = [];
  for (var i = 0; i < 3; i++) { 
    x = data.housing_type[0].values[i].x
    y = data.housing_type[0].values[i].y
    x_array.push(x);
    y_array.push(y);
  }

  var trace1 = {
    values: y_array,
    labels: x_array,
    type: 'pie'
  };

  // data
  var data1 = [trace1];

  var layout1 = {
    title: 'Housing Type',
    showlegend: true,
    height: 600,
    width: 600
  };

  Plotly.newPlot("housing_type", data1, layout1);
  
});
};

function buildOwnerOccupiedHomeValues(zipcode) {

  const url = "/api/housing/" + zipcode;

  d3.json(url, function(data) {

  var x3_array = [];
  var y3_array = [];
  for (var i = 0; i < 10; i++) { 
    x = data.owner_occupied_home_values[0].values[i].x
    y = data.owner_occupied_home_values[0].values[i].y
    x3_array.push(x);
    y3_array.push(y);
  }

  var trace1 = {
    x: x3_array,
    y: y3_array,
    type: 'bar',
    text: y3_array.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
      color: 'rgb(158,202,225)',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Owner Occupied Home Values',
    xaxis: {
      tickangle: -45
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
    },
  };
  
  Plotly.newPlot("owner_occupied_home_values", data, layout);
  
});
};

buildHousingOccupancy(zip_code);
buildHousingType(zip_code);
buildOwnerOccupiedHomeValues(zip_code);