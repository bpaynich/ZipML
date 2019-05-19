// zip_code = '85286';

// function buildEmploymentStatus(zip_code) {

//         const url = "/api/housing/" + zip_code;
    
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
    
//         // data
//         var data1 = [trace1];
    
//         var layout1 = {
//           title: 'Employment Status',
//           showlegend: true,
//           height: 600,
//           width: 600
//         };
    
//         Plotly.newPlot("pie", data1, layout1);
        
//     });
// };

// buildEmploymentStatus(zip_code);


