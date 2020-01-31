fetch("https://kanye.rest/")
  //mode: "no-cors"

  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data)) {
    console.log(data)}