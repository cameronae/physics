//random vars for problem 1
const a = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // Random number between 100 and 200 
const b = Math.floor(Math.random() * (70 - 30 + 1)) + 30; // Random number between 30 and 70
const radians = b * (Math.PI / 180);
//random vars for problem 2
const c = Math.floor(Math.random() * (33 - 18 + 1)) + 18; //rand between 18-33 degrees for bank
const d = Math.floor(Math.random() * (90 - 70 + 1)) + 70; // rand between 1450-1540 kg for car speed
// Display random values for a and b
document.getElementById("velo").textContent = a;
document.getElementById("theta").textContent = b;
//display for second problem
document.getElementById("bank").textContent = c;
document.getElementById("speed").textContent = d;

// Answers
//prob 1
const ansA = (a ** 2 * Math.cos(radians) ** 2 * (Math.tan(radians) + Math.sqrt(Math.tan(radians) ** 2))) / 9.80; // Equation for part a
const ansB = (a ** 2 * Math.cos(radians) ** 2 * (Math.tan(radians) + Math.sqrt(Math.tan(radians) ** 2))) / 2.0; // equation with gravity = 2.0 m/s^2

const ans2 = (Math.sqrt( (150 * 9.8 * (Math.sin(c) + Math.cos(c))) / (Math.cos(c) - Math.sin(c))));

// Check answers
function checkAnswers() {
    const userAnsA = parseFloat(document.getElementById('answerA').value.trim());
    const userAnsB = parseFloat(document.getElementById('answerB').value.trim());
    const resultDiv = document.getElementById('result');

    let resultText = '';

    // Check part a
    if (Math.abs(userAnsA - ansA) < 0.01) {
        resultText += "Part a is correct!<br>";
    } else {
        resultText += `Part a is incorrect. The correct equation is: ${ansA}<br>`;
    }

    //check part b
    if (Math.abs(userAnsB - ansB) < 0.01) { // Allow for small floating-point differences
        resultText += "Part b is correct!";
    } else 
    {
    resultText += `Part b is incorrect. The correct length is: ${ansB.toFixed(2)} feet`;
    }
    
    // Display result
    resultDiv.innerHTML = resultText;
}
/*function checkAnswer2(){
    
    const userAns2 = document.getElementById('answer2').value.trim();
    const result2 = document.getElementById('result2');

    let resultTxt = '';
    if ((userAns2 == 'yes' || userAns2 == 'Yes') && d <= ans2)
    {
        resultTxt += 'Correct!';
    }
    else if ((userAns2 == 'no' || userAns2 == 'No') && d > ans2)
    {
        resultTxt += 'Correct!';
    }
    else
    {
        resultTxt += 'Incorrect try again.';
    }

    //display result
    result2.innerHTML = resultTxt;
}*/
