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

fetch("https://superheroapi.com/api//10101411974306204", {
  headers: { Accept: "application/json" }
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    var div = document.querySelector("#div");
    var p = document.createElement("p");
    p.classList.add("superhero1");
    div.appendChild(p);
    console.log(data);
    p.innerText = data.superhero;
    return data;
  });

function newHero() {
  window.location.reload();
}

var config = {
  trace: true,
  spiralResolution: 1, //Lower = better resolution
  spiralLimit: 50 * 5,
  lineHeight: 0.8,
  xWordPadding: 0,
  yWordPadding: 3,
  font: "sans-serif"
};

anychart.onDocumentReady(function() {
  var data = [
  {"Kanye"}, 
  {"West"},
  {"cool"},
  {"and"},
  {"touch"},
  {"sky"},
  {"greatest"},
  {"I am Warhol"},
  {"I don't like to"},
  {"fashion"},
  {"Number 1"}  
  ];

 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

   // set a chart title
  chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("container");
  chart.draw();
});
