var questionDiv = document.querySelector(".question");
var answerFirst = document.querySelector(".Avariant");
var answerSecond = document.querySelector(".Bvariant");
var answerThird = document.querySelector(".Cvariant");
var answerFourth = document.querySelector(".Dvariant");
var pointsFirst = document.querySelector(".points-1");
var pointsSecond = document.querySelector(".points-2");
var pointsThird = document.querySelector(".points-3");
var pointsFourth = document.querySelector(".points-4");
var pointsFifth = document.querySelector(".points-5");
var pointsSixth = document.querySelector(".points-6");
var pointsSeventh = document.querySelector(".points-7");
var secondPointsFirst = document.querySelector(".second-div-points-1")
var secondPointsSecond = document.querySelector(".second-div-points-2")
var secondPointsThird = document.querySelector(".second-div-points-3")
var secondPointsFourth = document.querySelector(".second-div-points-4")
var secondPointsFifth = document.querySelector(".second-div-points-5")
var secondPointsSixth = document.querySelector(".second-div-points-6")
var secondPointsSeventh = document.querySelector(".second-div-points-7")
var popUpFirst = document.querySelector(".pop-up1");
var popUpSecond = document.querySelector(".pop-up2");
var yoxlama = [];
var pointNumber = 0;
var questions = [
  "A magnet would most likely attract which of the following?",
  "Which of these is not a standard procedure of airport security?",
  "Which two words traditionally appear onscreen at the termination of a feature film?",
  "Which of these pairs of apps offers roughly the same type of service?",
  "A person with well-developed abdominal muscles is said to have a what?",
  "Which of these names is not in the title of a Shakespeare play?",
  "What is the second planet in the solar system?",
  "When did the Second World War begin?",
  "What is water measured in?",
  "The earth is approximately how many miles away from the Sun?",
  "Which of the following men does not have a chemical element named after him?",
  "In the children's book series, where is Paddington Bear originally from?",
  "Which scientific unit is named after an Italian nobleman?",
  "Who was the first man to travel into space twice?",
  "Which	of	the	following	people	has	experienced	serious	mental	health	problems?",
];

var cavablar = [
  ["Metal", "Plastic", "Wood", "The wrong man"],
  [
    "Baggage X-ray",
    "Metal-detecting body scan",
    "Removal of shoes",
    "Foot Massage",
  ],
  ["The End", "The Conclusion", "The Finish", "The Pizza Rolls Are Done"],
  [
    "Snapchat and Grubhub",
    "Whatsapp and SHAREit",
    "TikTok and Spotify",
    "Lyft and Uber",
  ],
  ["One-pack", "Six-Pack", "12-pack", "Family-pack"],
  ["Hamlet", "Romeo", "Macbeth", "Darren"],
  ["Mercury", "The Earth", "Venus", "Jupiter"],
  ["1935", "1945", "1941", "1939"],
  ["liter", "meter", "hours", "km"],
  ["9.3 million", "39 million", "93 million", "193 million"],
  ["Albert Einstein", "Niels Bohr", "Isaac Newton", "Enrico Fermi"],
  ["India", "Peru", "Canada", "Iceland"],
  ["Pascal", "Ohm", "Volt", "Hertz"],
  ["Vladimir Titov", "Michael Collins", "Gus Grissom", "Yuri Gagarin"],
  ["JK	Rowling", "Catherine	Tate", "Robbie Williams", "All of them"],
];
var esasCavab = [
  "Metal",
  "Foot Massage",
  "The End",
  "Lyft and Uber",
  "Six-Pack",
  "Darren",
  "Venus",
  "1939",
  "liter",
  "93 million",
  "Isaac Newton",
  "Peru",
  "Volt",
  "Gus Grissom",
  "All of them",
];


 function mainFunction() {
  answerFirst.style.backgroundColor = `rgb(32, 32, 99)`;
  answerSecond.style.backgroundColor = `rgb(32, 32, 99)`;
  answerThird.style.backgroundColor = `rgb(32, 32, 99)`;
  answerFourth.style.backgroundColor = `rgb(32, 32, 99)`;
  var random = Math.floor(Math.random() * questions.length);
  if (yoxlama.includes(random) == true) {
    var random = Math.floor(Math.random() * questions.length);
  }
  if (yoxlama.includes(random) == false) {
    yoxlama.push(random);
    pointNumber++;
    questionDiv.innerHTML = questions[random];

    answerFirst.innerHTML = cavablar[random][0];
    answerSecond.innerHTML = cavablar[random][1];
    answerThird.innerHTML = cavablar[random][2];
    answerFourth.innerHTML = cavablar[random][3];

    answerFirst.onclick = function () {
      if (cavablar[random][0] == esasCavab[random]) {
        answerFirst.style.backgroundColor = `green`;
        setTimeout(function(){mainFunction()}, 1500)
      } else if (cavablar[random][0] !== esasCavab[random]) {
        answerFirst.style.backgroundColor = `red`;
        setTimeout(function(){
          popUpFirst.style.display = "flex";
          nextButton.style.visibility = `hidden`;
        }, 1000)
        
      }
    };
    answerSecond.onclick = function () {
      if (cavablar[random][1] == esasCavab[random]) {
        answerSecond.style.backgroundColor = `green`;
        setTimeout(function(){mainFunction()}, 1500)
        pointsFirst.style.backgroundColor = "yellow";
        pointsFirst.style.color = "black";
        secondPointsFirst.style.backgroundColor = "yellow";
        secondPointsFirst.style.color = "black";
      } else if (cavablar[random][1] !== esasCavab[random]) {
        answerSecond.style.backgroundColor = `red`;
        setTimeout(function(){
          popUpFirst.style.display = "flex";
        }, 1000)
      }
    };
    answerThird.onclick = function () {
      if (cavablar[random][2] == esasCavab[random]) {
        answerThird.style.backgroundColor = `green`;
        setTimeout(function(){mainFunction()}, 1500)
      } else if (cavablar[random][2] !== esasCavab[random]) {
        answerThird.style.backgroundColor = `red`;
        setTimeout(function(){
          popUpFirst.style.display = "flex";
        }, 1000)
      }
    };
    answerFourth.onclick = function () {
      if (cavablar[random][3] == esasCavab[random]) {
        answerFourth.style.backgroundColor = `green`;
        setTimeout(function(){mainFunction()}, 1500)
      } else if (cavablar[random][3] !== esasCavab[random]) {
        answerFourth.style.backgroundColor = `red`;
        setTimeout(function(){
          popUpFirst.style.display = "flex";
        }, 1000)
      }
    };
  }
  if (pointNumber == 2) {
    pointsFirst.style.backgroundColor = "yellow";
    pointsFirst.style.color = "black";
    secondPointsFirst.style.backgroundColor = "yellow";
    secondPointsFirst.style.color = "black";
  } else if (pointNumber == 3) {
    pointsFirst.style.backgroundColor = `rgb(32, 32, 99)`
    pointsFirst.style.color = "gold"
    pointsSecond.style.backgroundColor = "yellow";
    pointsSecond.style.color = "black";
    secondPointsFirst.style.display = "none"
    secondPointsSecond.style.backgroundColor = "yellow";
    secondPointsSecond.style.color = "black";
    secondPointsSecond.style.display = "flex"
  } else if (pointNumber == 4) {
    pointsSecond.style.backgroundColor = `rgb(32, 32, 99)`
    pointsSecond.style.color = "gold"
    pointsThird.style.backgroundColor = "yellow";
    pointsThird.style.color = "black";
    secondPointsSecond.style.display = "none"
    secondPointsThird.style.backgroundColor = "yellow";
    secondPointsThird.style.color = "black";
    secondPointsThird.style.display = "flex"
  } else if (pointNumber == 5) {
    pointsThird.style.backgroundColor = `rgb(32, 32, 99)`
    pointsThird.style.color = "gold"
    pointsFourth.style.backgroundColor = "yellow";
    pointsFourth.style.color = "black";
    secondPointsThird.style.display = "none"
    secondPointsFourth.style.backgroundColor = "yellow";
    secondPointsFourth.style.color = "black";
    secondPointsFourth.style.display = "flex"
  } else if (pointNumber == 6) {
    pointsFourth.style.backgroundColor = `rgb(32, 32, 99)`
    pointsFourth.style.color = "gold"
    pointsFifth.style.backgroundColor = "yellow";
    pointsFifth.style.color = "black";
    secondPointsFourth.style.display = "none"
    secondPointsFifth.style.backgroundColor = "yellow";
    secondPointsFifth.style.color = "black";
    secondPointsFifth.style.display = "flex"
  } else if (pointNumber == 7) {
    pointsFifth.style.backgroundColor = `rgb(32, 32, 99)`
    pointsFifth.style.color = "gold"
    pointsSixth.style.backgroundColor = "yellow";
    pointsSixth.style.color = "black";
    secondPointsFifth.style.display = "none"
    secondPointsSixth.style.backgroundColor = "yellow";
    secondPointsSixth.style.color = "black";
    secondPointsSixth.style.display = "flex"
  } else if (pointNumber == 8) {
    pointsSixth.style.backgroundColor = `rgb(32, 32, 99)`
    pointsSixth.style.color = "gold"
    pointsSeventh.style.backgroundColor = "yellow";
    pointsSeventh.style.color = "black";
    secondPointsSixth.style.display = "none"
    secondPointsSeventh.style.backgroundColor = "yellow";
    secondPointsSeventh.style.color = "black";
    secondPointsSeventh.style.display = "flex"
    popUpSecond.style.display = "flex";
  }
};
mainFunction()
