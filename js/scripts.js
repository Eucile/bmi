var kg = prompt("What is your weight?") * 0.453;
var height = prompt('What is your height? example 6\'2"')

if (height.length == 5) {
var inchesAlone = parseInt(height.charAt(2) + height.charAt(3))
} else {
var inchesAlone = parseInt(height.charAt(2))
}

var inches = parseInt(height.charAt(0) * 12) + inchesAlone

var meters = inches * 0.0254

var bmi = kg / (meters*meters)

alert("Your BMI is " + bmi + ".")
