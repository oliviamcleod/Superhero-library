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

fetch("https://api.kanye.rest/")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var div = document.querySelector("#div");
    var p = document.createElement("p");
    p.classList.add("kanye-quote");
    div.appendChild(p);
    console.log(data);
    p.innerText = data.quote;
  });

function newHero() {
  window.location.reload();
}
