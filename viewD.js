const viewD = () => {
  document.getElementById("steps").innerHTML = stepsDailyData;
  document.getElementById("othersteps1").innerHTML = steps8data;
  document.getElementById("othersteps").innerHTML = steps2data;
  // document.getElementById("today").innerHTML = "today";
  // span1.innerHTML = "";
  // span2.innerHTML = "";
  // span3.innerHTML = "";

  const chartData = {
    labels: [
      00, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ],
    datasets: [
      {
        label: "Steps",
        data: [
          stepsDailyData,
          steps1data,
          steps2data,
          steps3data,
          steps4data,
          steps5data,
          steps6data,
          steps7data,
          steps8data,
          steps9data,
          steps10data,
          steps11data,
          steps12data,
          steps13data,
          steps14data,
          steps15data,
          steps16data,
          steps17data,
          steps18data,
          steps19data,
          steps20data,
          steps21data,
          steps22data,
          steps23data,
        ],
        backgroundColor: "blue",
        borderColor: "red",
        borderWidth: 10,
        borderLeftWidth: 5
      },
    ],
  };

  // Get chart element from the DOM
  const chartElement = document.getElementById("myChart");
  chartElement.style.display = "block";
  const hide = document.getElementById("chartWeek");
  hide.style.display = "none";

  // Create chart
  const myChart = new Chart(chartElement, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        yAxes: {
          beginAtZero: true,
          position: "right",
          grid: {
            color: "gray",
            tickColor: "gray",
            borderWidth: "0.1",
            tickWidth: "0",
            lineWidth: 0.5
          },
          ticks: {
            stepSize: 1000,
            maxRotation: 0,
            minRotation: 0,

          }

        },
        xAxes: {
          grid: {
            color: "gray",
            tickColor: "gray",
            tickWidth: "0.3",
            borderDash: [1, 1],
            tickMarkLength: 10,
            lineWidth: 0.5
            
          },
          ticks: {
            beginAtZero: true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit: 4,
            borderDash: [1, 1],
            lineWidth: 0.5
          },
          gridLines: {
            borderDash: [2, 2],
            tickMarkLength: 3
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        customCanvasBackgroundColor: {
          color: "lightGreen",
        },
      },
    },
  });
  console.log("gi");

  chartElement.style.backgroundColor = "transparent";
};
