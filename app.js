//Chart

//Chart - Data

let xValues = [];
let yValues = [];
var barColors = ["hsl(10, 79%, 65%)"];

function getData(makeChart){
    fetch('./data.json')
    .then(res=>{
       res.json()
   .then((res)=>{
       console.log(res)
        res.map(obj=>{
        xValues.push(obj.day)
        yValues.push(obj.amount)
        })
        makeChart()
   })
   })
   
}


function makeChart(){
    var myChart = new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors, 
                data: yValues
            }]
        },
        options: {
            borderRadius: 10,
            inflateAmount: 1,
            hoverBackgroundColor: 'rgba(53,172,206,255)',
            plugins: {
                legend : false,
                tooltip:{
                    padding: 50
                }
            },

            scales: {
                x:{
                    grid: {
                    drawOnChartArea: false,
                    drawTicks:false,
                    },

               },
               y: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks:false,

                },
                ticks:{
                    display: false
                }
               }
            }
            
        },
});
}


getData(makeChart)