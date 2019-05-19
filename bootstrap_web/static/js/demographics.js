<<<<<<< HEAD
// zip_code = '85286';

// function buildEmploymentStatus(zip_code) {
=======
zip_code = '90210';

function buildAnnualIndividualEarnings(zip_code) {
>>>>>>> 63f96aeb6de59e6a2def3d1fe2409f183f64b581

//         const url = "/api/housing/" + zip_code;
    
<<<<<<< HEAD
//         d3.json(url, function(data) {
//         console.log("Employment_status");
//         console.log(data.employment_status.key);
//         console.log("End Employment_status");
//         // Build a Pie Chart
      
//         var trace1 = {
//           values: data.employment_status.map(d => d.y),
//           labels: data.employment_status.map(d => d.x),
//           type: 'pie'
//         };
=======
        d3.json(url, function(data) {

        // Build a Pie Chart
        var x_array = [];
        var y_array = [];
        for (var i = 0; i < 9; i++) { 
          x = data.annual_individual_earnings[0].values[i].x
          y = data.annual_individual_earnings[0].values[i].y
          x_array.push(x);
          y_array.push(y);
        }

        var trace1 = {
          values: y_array,
          labels: x_array,
          type: 'pie'
        };
>>>>>>> 63f96aeb6de59e6a2def3d1fe2409f183f64b581
    
//         // data
//         var data1 = [trace1];
    
<<<<<<< HEAD
//         var layout1 = {
//           title: 'Employment Status',
//           showlegend: true,
//           height: 600,
//           width: 600
//         };
    
//         Plotly.newPlot("pie", data1, layout1);
=======
        var layout1 = {
          title: 'Annual Individual Earnings',
          showlegend: true,
          height: 600,
          width: 600
        };
    
        Plotly.newPlot("annual_individual_earnings_pie", data1, layout1);
>>>>>>> 63f96aeb6de59e6a2def3d1fe2409f183f64b581
        
//     });
// };

<<<<<<< HEAD
// buildEmploymentStatus(zip_code);
=======
function buildEmploymentStatus(zip_code) {

  const url = "/api/housing/" + zip_code;

  d3.json(url, function(data) {

  // Build a Pie Chart
  var x_array = [];
  var y_array = [];
  for (var i = 0; i < 3; i++) { 
    x = data.employment_status[0].values[i].x
    y = data.employment_status[0].values[i].y
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
>>>>>>> 63f96aeb6de59e6a2def3d1fe2409f183f64b581

  var layout1 = {
    title: 'Employment Status',
    showlegend: true,
    height: 600,
    width: 600
  };

  Plotly.newPlot("employment_status_pie", data1, layout1);
  
});
};

function buildAverageHouseholdIncomeOverTime(zip_code) {

  const url = "/api/housing/" + zip_code;

  d3.json(url, function(data) {

  var x3_array = [];
  var y3_array = [];
  for (var i = 0; i < 10; i++) { 
    x = data.average_household_income_over_time[0].values[i].x
    y = data.average_household_income_over_time[0].values[i].y
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
    title: 'Average Household income over time',
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
  
  Plotly.newPlot("average_household_income_over_time", data, layout);
  
});
};

buildAnnualIndividualEarnings(zip_code);
buildEmploymentStatus(zip_code);
buildAverageHouseholdIncomeOverTime(zip_code);