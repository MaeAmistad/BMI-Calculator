// Declare Variables
let height = document.getElementById('height');
let weight = document.getElementById('weight');

// Submit BTN
submit.addEventListener("click", () => {
    // Validation
    if (height.value == "" && weight.value == "" || height.value == "" || weight.value == ""){
        document.getElementById('output').innerHTML = "Error";
    }
    else{
        // Calculate the BMI
        // step 1. cm to m
        cm_to_m = height.value / 100;
        // step 2. multiply m^2
        m2 = cm_to_m * cm_to_m;
        // step 3. compute bmi
        result = weight.value / m2;

        // Identify Classification
        if (result.toFixed(1) < 18.5){
            // Display Result
            document.getElementById('output').innerHTML = result.toFixed(1) + " " + "Underweight";
        }
        else if (result.toFixed(1) > parseFloat(18.5) && result.toFixed(1) < parseFloat(24.9)){
            // Display Result
            document.getElementById('output').innerHTML = result.toFixed(1) + " " + "Normal";
        }
        else if(result.toFixed(1) > parseFloat(25.0) && result.toFixed(1) < parseFloat(29.9)){
            // Display Result
            document.getElementById('output').innerHTML = result.toFixed(1) + " " + "Overweight";
        }
        else if(result.toFixed(1) > parseFloat(30.0)){
            // Display Result
            document.getElementById('output').innerHTML = result.toFixed(1) + " " + "Obesity";
        }
        else{
            console.log("Error")
        }
    }
    
});

// Clear BTN
clear.addEventListener('click' , () => {

    // Display Result Clear
    document.getElementById('output').innerHTML = "";
    height.value = "";
    weight.value = "";
});