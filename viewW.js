

let viewW = () => {
    
    const hide = document.getElementById('myChart');
    hide.style.display = "none"
    document.getElementById("steps").innerHTML = stepsWeekData;
                document.getElementById("today").innerHTML = "Last 7 days";
                // document.getElementById("average").innerHTML = stepsWeekDataAverageReally;
                console.log("no")

            const chartData = {
            labels: [dayName7, dayName6, dayName5, dayName4, dayName3, dayName2, dayName1],
            datasets: [{
              label: 'Sales',
              data: [oneData, twoData, threeData, fourData, fiveData, sixData, sevenData],
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 100
            }]
          };
          
          // Get chart element from the DOM
          const chartElement = document.getElementById('chartWeek');
          chartElement.style.display = "block";
          // Create chart
          const myChart = new Chart(chartElement, {
            type: 'bar',
            data: chartData,
            options: {
                
              scales: {
                y: {
                  beginAtZero: true,
                  position: "right",
                  grid: {
                    color: "gray",
                    lineWidth: 0.5
                    
                  },
                  ticks: {
                    stepSize: 5000,
                    lineWidth: 0
                  }
                },
                x: {
                    grid: {
                        color: "gray",
                        borderDash: [1, 1],
                        lineWidth: 0.5
                      },
                }
        
              },
              plugins: {
                legend: {
                  display: false
                },
                customCanvasBackgroundColor: {
                    color: 'lightGreen',
                  }
            
              }
            }
          });
        console.log("gi")
        
          chartElement.style.backgroundColor = 'transparent'


};


