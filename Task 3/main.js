function validateInput() {
    var temperatureInput = document.getElementById("temperature").value;
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById("temperature").value = "";
    }
}

function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById("temperature").value = "";
        resultElement.innerHTML = "";
        return;
    }

    var convertedTemperature;

    // Convert input to Celsius
    switch (inputUnit) {
        case "celsius":
            convertedTemperature = temperatureInput;
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput - 32) * 5/9;
            break;
        case "kelvin":
            convertedTemperature = temperatureInput - 273.15;
            break;
        default:
            resultElement.innerHTML = "Invalid input unit";
            return;
    }

    // Convert Celsius to the desired output unit
    switch (outputUnit) {
        case "celsius":
            resultElement.innerHTML = "Converted Temperature: " + convertedTemperature + " °C";
            break;
        case "fahrenheit":
            resultElement.innerHTML = "Converted Temperature: " + (convertedTemperature * 9/5 + 32) + " °F";
            break;
        case "kelvin":
            resultElement.innerHTML = "Converted Temperature: " + (convertedTemperature + 273.15) + " K";
            break;
        default:
            resultElement.innerHTML = "Invalid output unit";
    }
}