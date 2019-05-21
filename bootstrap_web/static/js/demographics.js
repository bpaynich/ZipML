function buildAnnualIndividualEarnings(zip_code) {

  const url = "/api/housing/" + zip_code;

  d3.json(url, function(data) {

  // Build a Pie Chart
  var x_array = [];
  var y_array = [];
  for (var i = 0; i < 3; i++) { 
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

  // data
  var data1 = [trace1];

  var layout1 = {
    title: 'Employment Status',
    showlegend: true,
    height: 600,
    width: 600
  };

  Plotly.newPlot("annual_individual_earnings", data1, layout1);
  
});
};

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

  var layout1 = {
    title: 'Employment Status',
    showlegend: true,
    height: 600,
    width: 600
  };

  Plotly.newPlot("employment_status", data1, layout1);
  
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