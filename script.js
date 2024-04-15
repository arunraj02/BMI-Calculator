const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const submitButton = document.getElementById("submit-btn");
const resetButton = document.getElementById("reset-btn");
const resultEle = document.querySelector('.bmi-result');
const comment = document.querySelector('.comment');
const content = document.querySelector('.bmi-content');

function calculate(){
    if(age.value === "" || height.value === "" || weight.value === "" || (male.checked===false && female.checked === false)){
        alert("All fields are required")
    }else{
        bmiCalculation();
    }
}

function bmiCalculation(){ 
        var bmi = Number(weight.value)/ Number(height.value / 100)**2;
        var result = "";

        if(bmi < 18.5){
            result = "Underweight";
        }else if (bmi >= 18.5 &&  bmi <=24.9){
            result = "Normal Weight";
        }else if (bmi >=25 && bmi <=29.9){
            result = "Overweight";
        }else if (bmi >= 30){
            result = "Obesity";
        }
        //console.log(result);

        resultEle.innerHTML = Math.floor(bmi * 100 / 100);
        comment.innerHTML = result.toUpperCase();

        document.querySelector(".bmi-content").style.display = "block";
        document.querySelector(".bmi-result").style.display = "block";
        document.querySelector(".comment").style.display = "block";
    }

submitButton.addEventListener("click",calculate);

function reset(){
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.querySelector(".bmi-content").style.display = "none";
    document.querySelector(".bmi-result").style.display = "none";
    document.querySelector(".comment").style.display = "none";
}

resetButton.addEventListener("click",reset);