zip_code = '85286';

function buildAnnualIndividualEarnings(zip_code) {

        const url = "/api/housing/" + zip_code;
    
        d3.json(url, function(data) {

        // Build a Pie Chart
        var x_array = [];
        var y_array = [];
        for (var i = 0; i < 5; i++) { 
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
          title: 'Annual Individual Earnings',
          showlegend: true,
          height: 600,
          width: 600
        };
    
        Plotly.newPlot("annual_individual_earnings_pie", data1, layout1);
        
    });
};

function buildEmploymentStatus(zip_code) {

  const url = "/api/housing/" + zip_code;

  d3.json(url, function(data) {

  // Build a Pie Chart
  var x1_array = [];
  var y1_array = [];
  for (var i = 0; i < 5; i++) { 
    x = data.employment_status[0].values[i].x
    y = data.employment_status[0].values[i].y
    x1_array.push(x);
    y1_array.push(y);
  }

  var trace1 = {
    values: y1_array,
    labels: x1_array,
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


buildAnnualIndividualEarnings(zip_code);
buildEmploymentStatus(zip_code);


