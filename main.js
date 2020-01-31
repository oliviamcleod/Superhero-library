// plan with disney ideation
// superhero stat generator
//generate image, powerstats, bio?
//animate image (pow?) make error message a cartoon using try/catch?
//

// split up tasks
// Website should include:
// fetch
// fetch on the click of a <button></button> (or another event)
// @keyframes animation
// some dom manipulation
// something new!
// git and github
// frequent commits
// branches and pullrequest (merging)

fetch("https://kanye.rest/", {
  headers: { Accept: "application/json" }
})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(data) {
    console.log(data);
  });
//     var div = document.querySelector("#div");
//     var p = document.createElement("p");
//     p.classList.add("superhero-stats");
//     div.appendChild(p);
//     console.log(data);
//     p.innerText = data.quote;
//     return data;
//   });
// // .catch(function(error) {
// //   console.log(error);
// // });

// function newHero() {
//   window.location.reload();
// // }
