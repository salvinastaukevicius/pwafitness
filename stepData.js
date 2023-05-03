function stepsData0(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps0 = data.bucket[0].dataset[0].point[0].value[0].intVal;
    getStepsdaily(steps0);
  })
  .catch((error) => {
      var steps0 = 0;
      console.log(steps0);
      getStepsdaily(steps0);
    console.error(error);
  });
};

function stepsData1(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps1 = data.bucket[1].dataset[0].point[0].value[0].intVal;
    getSteps1(steps1);
  })
  .catch((error) => {
      var steps1 = 0;
      console.log(steps1);
      getSteps1(steps1);
    console.error(error);
  });
};

function stepsData2(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps2 = data.bucket[2].dataset[0].point[0].value[0].intVal;
    getSteps2(steps2);
  })
  .catch((error) => {
      var steps2 = 0;
      console.log(steps2);
      getSteps2(steps2);
    console.error(error);
  });
};

function stepsData3(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps3 = data.bucket[3].dataset[0].point[0].value[0].intVal;
    getSteps3(steps3);
  })
  .catch((error) => {
      var steps3 = 0;
      console.log(steps3);
      getSteps3(steps3);
    console.error(error);
  });
};

function stepsData4(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps4 = data.bucket[4].dataset[0].point[0].value[0].intVal;
    getSteps4(steps4);
  })
  .catch((error) => {
      var steps4 = 0;
      console.log(steps4);
      getSteps4(steps4);
    console.error(error);
  });
};

function stepsData5(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps5 = data.bucket[5].dataset[0].point[0].value[0].intVal;
    getSteps5(steps5);
  })
  .catch((error) => {
      var steps5 = 0;
      console.log(steps5);
      getSteps5(steps5);
    console.error(error);
  });
};

function stepsData6(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps6 = data.bucket[6].dataset[0].point[0].value[0].intVal;
    getSteps6(steps6);
  })
  .catch((error) => {
      var steps6 = 0;
      console.log(steps6);
      getSteps6(steps6);
    console.error(error);
  });
};

function stepsData7(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps7 = data.bucket[7].dataset[0].point[0].value[0].intVal;
    getSteps7(steps7);
  })
  .catch((error) => {
      var steps7 = 0;
      console.log(steps7);
      getSteps7(steps7);
    console.error(error);
  });
};

function stepsData8(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps8 = data.bucket[8].dataset[0].point[0].value[0].intVal;
    getSteps8(steps8);
  })
  .catch((error) => {
      var steps8 = 0;
      console.log(steps8);
      getSteps8(steps8);
    console.error(error);
  });
};

function stepsData9(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps9 = data.bucket[9].dataset[0].point[0].value[0].intVal;
    getSteps9(steps9);
  })
  .catch((error) => {
      var steps9 = 0;
      console.log(steps9);
      getSteps9(steps9);
    console.error(error);
  });
};

function stepsData10(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps10 = data.bucket[10].dataset[0].point[0].value[0].intVal;
    getSteps10(steps10);
  })
  .catch((error) => {
      var steps10 = 0;
      console.log(steps10);
      getSteps10(steps10);
    console.error(error);
  });
};

function stepsData11(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps11 = data.bucket[11].dataset[0].point[0].value[0].intVal;
    getSteps11(steps11);
  })
  .catch((error) => {
      var steps11 = 0;
      console.log(steps11);
      getSteps11(steps11);
    console.error(error);
  });
};

function stepsData12(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps12 = data.bucket[12].dataset[0].point[0].value[0].intVal;
    getSteps12(steps12);
  })
  .catch((error) => {
      var steps12 = 0;
      console.log(steps12);
      getSteps12(steps12);
    console.error(error);
  });
};

function stepsData13(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps13 = data.bucket[13].dataset[0].point[0].value[0].intVal;
    getSteps13(steps13);
  })
  .catch((error) => {
      var steps13 = 0;
      console.log(steps13);
      getSteps13(steps13);
    console.error(error);
  });
};

function stepsData14(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps14 = data.bucket[14].dataset[0].point[0].value[0].intVal;
    getSteps14(steps14);
  })
  .catch((error) => {
      var steps14 = 0;
      console.log(steps14);
      getSteps14(steps14);
    console.error(error);
  });
};

function stepsData15(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps15 = data.bucket[15].dataset[0].point[0].value[0].intVal;
    getSteps15(steps15);
  })
  .catch((error) => {
      var steps15 = 0;
      console.log(steps15);
      getSteps15(steps15);
    console.error(error);
  });
};

function stepsData16(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps16 = data.bucket[16].dataset[0].point[0].value[0].intVal;
    getSteps16(steps16);
  })
  .catch((error) => {
      var steps16 = 0;
      console.log(steps16);
      getSteps16(steps16);
    console.error(error);
  });
};

function stepsData17(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps17 = data.bucket[17].dataset[0].point[0].value[0].intVal;
    getSteps17(steps17);
  })
  .catch((error) => {
      var steps17 = 0;
      console.log(steps17);
      getSteps17(steps17);
    console.error(error);
  });
};

function stepsData18(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps18 = data.bucket[18].dataset[0].point[0].value[0].intVal;
    getSteps18(steps18);
  })
  .catch((error) => {
      var steps18 = 0;
      console.log(steps18);
      getSteps18(steps18);
    console.error(error);
  });
};

function stepsData19(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps19 = data.bucket[19].dataset[0].point[0].value[0].intVal;
    getSteps19(steps19);
  })
  .catch((error) => {
      var steps19 = 0;
      console.log(steps19);
      getSteps19(steps19);
    console.error(error);
  });
};

function stepsData20(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps20 = data.bucket[20].dataset[0].point[0].value[0].intVal;
    getSteps20(steps20);
  })
  .catch((error) => {
      var steps20 = 0;
      console.log(steps20);
      getSteps20(steps20);
    console.error(error);
  });
};

function stepsData21(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps21 = data.bucket[21].dataset[0].point[0].value[0].intVal;
    getSteps21(steps21);
  })
  .catch((error) => {
      var steps21 = 0;
      console.log(steps21);
      getSteps21(steps21);
    console.error(error);
  });
};

function stepsData22(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps22 = data.bucket[22].dataset[0].point[0].value[0].intVal;
    getSteps22(steps22);
  })
  .catch((error) => {
      var steps22 = 0;
      console.log(steps22);
      getSteps22(steps22);
    console.error(error);
  });
};

function stepsData23(data) {
  data && localStorage.setItem("thetoken", data);
fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("thetoken"),
  },
  body: JSON.stringify(requestBody_steps),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    var steps23 = data.bucket[23].dataset[0].point[0].value[0].intVal;
    getSteps23(steps23);
  })
  .catch((error) => {
      var steps23 = 0;
      console.log(steps23);
      getSteps23(steps23);
    console.error(error);
  });
};

















function stepsDataWeek(data) {
    data && localStorage.setItem("thetoken", data);

  fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("thetoken"),
    },
    body: JSON.stringify(requestBody_steps_week),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    
      var one = data.bucket[0].dataset[0].point[0].value[0].intVal;
      var two = data.bucket[1].dataset[0].point[0].value[0].intVal;
      var three = data.bucket[2].dataset[0].point[0].value[0].intVal;
      var four = data.bucket[3].dataset[0].point[0].value[0].intVal;
      var five = data.bucket[4].dataset[0].point[0].value[0].intVal;
      var six = data.bucket[5].dataset[0].point[0].value[0].intVal;
      var seven = data.bucket[6].dataset[0].point[0].value[0].intVal;

      stepsweek = one + two + three + four + five + six + seven;
      getStepsWeek(stepsweek);
      getStepsWeekAverage(stepsweek);
      getOne(one);
      getTwo(two);
      getThree(three);
      getFour(four);
      getFive(five);
      getSix(six);
      getSeven(seven);
    })
    .catch((error) => {
      console.error(error);
    });
};



function stepsDataMonth(data) {
    data && localStorage.setItem("thetoken", data);

  fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("thetoken"),
    },
    body: JSON.stringify(requestBody_steps_month),
  })
    .then((response) => response.json())
    .then((data) => {
      var stepsmonth = data.bucket[0].dataset[0].point[0].value[0].intVal;
      getStepsMonth(stepsmonth);
    })
    .catch((error) => {
      console.error(error);
    });
};



let stepsDailyData, stepsWeekData, stepsWeekDataAverage, stepsWeekDataAverageReally, stepsMonthData,
 steps1data, steps2data, steps3data, steps4data, steps5data, steps6data, steps7data, steps8data, steps9data, 
 steps10data, steps11data, steps13data, steps14data, steps15data, steps16data, steps17data, steps18data, 
 steps19data, steps20data, steps21data, steps22data, steps23data;


const getStepsdaily = data => stepsDailyData = data;
const getSteps1 = data => steps1data = data
const getSteps2 = data => steps2data = data
const getSteps3 = data => steps3data = data
const getSteps4 = data => steps4data = data
const getSteps5 = data => steps5data = data
const getSteps6 = data => steps6data = data
const getSteps7 = data => steps7data = data
const getSteps8 = data => steps8data = data
const getSteps9 = data => steps9data = data
const getSteps10 = data => steps10data = data
const getSteps11 = data => steps11data = data
const getSteps12 = data => steps12data = data
const getSteps13 = data => steps13data = data
const getSteps14 = data => steps14data = data
const getSteps15 = data => steps15data = data
const getSteps16 = data => steps16data = data
const getSteps17 = data => steps17data = data
const getSteps18 = data => steps18data = data
const getSteps19 = data => steps19data = data
const getSteps20 = data => steps20data = data
const getSteps21 = data => steps21data = data
const getSteps22 = data => steps22data = data
const getSteps23 = data => steps23data = data



const getStepsWeek = data => stepsWeekData = data;
let getStepsWeekAverage = data => (stepsWeekDataAverage = data, stepsWeekDataAverageReally = stepsWeekDataAverage / dayOfWeek);
const getStepsMonth = data => stepsMonthData = data;




let oneData, twoData, threeData, fourData, fiveData, sixData, sevenData;
const getOne = data => oneData = data;
const getTwo = data => twoData = data;
const getThree = data => threeData = data;
const getFour = data => fourData = data;
const getFive = data => fiveData = data;
const getSix = data => sixData = data;
const getSeven = data => sevenData = data;




const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayName1 = daysOfWeek[now.getDay()];
const index2 = (now.getDay() - 1 + 7) % 7; 
const dayName2 = daysOfWeek[index2];
const index3 = (now.getDay() - 2 + 7) % 7; 
const dayName3 = daysOfWeek[index2];
const index4 = (now.getDay() - 3 + 7) % 7; 
const dayName4 = daysOfWeek[index2];
const index5 = (now.getDay() - 4 + 7) % 7; 
const dayName5 = daysOfWeek[index2];
const index6 = (now.getDay() - 5 + 7) % 7; 
const dayName6 = daysOfWeek[index2];
const index7 = (now.getDay() - 6 + 7) % 7; 
const dayName7 = daysOfWeek[index2];








