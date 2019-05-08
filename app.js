//element selectors - define first

var volumeNum = document.getElementById("volumeNum");
var gravityNum = document.getElementById("gravityNum");
var calculateButton = document.getElementById("calculate-button");
var standardDrinks = document.getElementById("standard-drinks");
var unitsOfAlcohol = document.getElementById("units-of-alcohol");
var gramsOfAlcohol = document.getElementById("grams-of-alcohol");

//event listeners (event, function, )

calculateButton.addEventListener("click", calculateStandardDrinks);
calculateButton.addEventListener("click", calculateUnitsOfAlcohol);
calculateButton.addEventListener("click", calculateGramsOfAlcohol);

function roundNum(num) {
  return Math.round(num*100)/100;
}

// functions

function calculateStandardDrinks() {
  var x = document.getElementById('volumeUnit');
  var userInput = x.options[x.selectedIndex].value;
  var volumeNum = document.getElementById("volumeNum").value;
  var gravityNum = document.getElementById("gravityNum").value;
  var ozDrinks = roundNum((volumeNum * gravityNum) /60);
  var mlDrinks = roundNum(((volumeNum * gravityNum) /60)/29.5735);
  var clDrinks = roundNum(((volumeNum * gravityNum) /60)/29.5735)*10;

  if (userInput === "oz") {
    document.getElementById("standard-drinks").innerHTML = ozDrinks + " standard drinks";
  } else if (userInput === "ml") {
    document.getElementById("standard-drinks").innerHTML = mlDrinks + " standard drinks";
  } else {
    document.getElementById("standard-drinks").innerHTML = clDrinks + " standard drinks";
  }
}

function calculateUnitsOfAlcohol() {
  var x = document.getElementById('volumeUnit');
  var userInput = x.options[x.selectedIndex].value;
  var volumeNum = document.getElementById("volumeNum").value;
  var gravityNum = document.getElementById("gravityNum").value;
  var ozUnits = roundNum(((volumeNum * 29.5735) * gravityNum) /1000);
  var mlUnits = roundNum((volumeNum * gravityNum)/1000);
  var clUnits = roundNum((volumeNum * gravityNum) /100);

  if (userInput === "oz") {
    document.getElementById("units-of-alcohol").innerHTML = ozUnits + " units of alcohol";
  } else if (userInput === "ml") {
    document.getElementById("units-of-alcohol").innerHTML = mlUnits + " units of alcohol";
  } else {
    document.getElementById("units-of-alcohol").innerHTML = clUnits + " units of alcohol";
  }
}

function calculateGramsOfAlcohol() {
  var x = document.getElementById('volumeUnit');
  var userInput = x.options[x.selectedIndex].value;
  var volumeNum = document.getElementById("volumeNum").value;
  var gravityNum = document.getElementById("gravityNum").value;
  var ozGrams = roundNum((((volumeNum * 29.5735) * gravityNum) /1000)*8);
  var mlGrams = roundNum(((volumeNum * gravityNum)/1000)*8);
  var clGrams = roundNum(((volumeNum * gravityNum) /100)*8);

  if (userInput === "oz") {
    document.getElementById("grams-of-alcohol").innerHTML = ozGrams + " grams of alcohol";
  } else if (userInput === "ml") {
    document.getElementById("grams-of-alcohol").innerHTML = mlGrams + " grams of alcohol";
  } else {
    document.getElementById("grams-of-alcohol").innerHTML = clGrams + " grams of alcohol";
  }
}
