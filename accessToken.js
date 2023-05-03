const code = new URLSearchParams(window.location.search).get("code");

const data = {
    code: code,
    client_id: "643398672506-a5k2fjtmk0hsljf90qli3jiibebalpok.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:5500/main.html",
      // redirect_uri: 'https://i481136.hera.fhict.nl/redirect.html',
    grant_type: "authorization_code",
  };
  
  fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.access_token;
      caloriesData(accessToken);
      stepsData1(accessToken);
      stepsData0(accessToken);
      stepsData2(accessToken);
      stepsData3(accessToken);
      stepsData4(accessToken);
      stepsData5(accessToken);
      stepsData6(accessToken);
      stepsData7(accessToken);
      stepsData8(accessToken);
      stepsData9(accessToken);
      stepsData10(accessToken);
      stepsData11(accessToken);
      stepsData12(accessToken);
      stepsData13(accessToken);
      stepsData14(accessToken);
      stepsData15(accessToken);
      stepsData16(accessToken);
      stepsData17(accessToken);
      stepsData18(accessToken);
      stepsData19(accessToken);
      stepsData20(accessToken);
      stepsData21(accessToken);
      stepsData22(accessToken);
      stepsData23(accessToken);
      stepsDataWeek(accessToken);
      stepsDataMonth(accessToken);
    });