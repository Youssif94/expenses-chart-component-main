//Chart

//Chart - Data

let xValues = [];
let yValues = [];
var barColors = ["hsl(10, 79%, 65%)"];

function getData(cb){
    fetch('./data.json')
    .then(res=>{
       res.json()
   .then((res)=>{
       console.log(res)
        res.map(obj=>{
        xValues.push(obj.day)
        yValues.push(obj.amount)
        })
        cb()
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
        display:false
    }
});
}


getData(makeChart)