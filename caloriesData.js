function caloriesData(data) {
    data && localStorage.setItem("thetoken", data);
  
    fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("thetoken"),
      },
      body: JSON.stringify(requestBody_calories),
    })
      .then((response) => response.json())
      .then((data) => {
        var steps = data.bucket[0].dataset[0].point[0].value[0].fpVal;
        let small_steps = steps.toFixed(0);
        var stepsElement = document.getElementById("calories");
      //   stepsElement.innerHTML = small_steps + " kcal";
      })
      .catch((error) => {
        console.error(error);
      });
  }