 // Setup
        const a = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // Random number between 5 and 15
        const b = Math.floor(Math.random() * (70 - 30 + 1)) + 30; // Random number between 3 and 5
        const radians = b * (Math.PI / 180);
        // Display random values for a and b
        document.getElementById("velo").textContent = a;
        document.getElementById("theta").textContent = b;
        
        // Answers
        
        const ansA = (a ** 2 * Math.cos(radians) ** 2 * (Math.tan(radians) + Math.sqrt(Math.tan(radians) ** 2))) / 9.80; // Equation for part a
        //const ansB = ((a ** 2) + (b ** 2)) / (2 * b); // Length of the wire for part b

        // Check answers
        function checkAnswers() {
            const userAnsA = parseFloat(document.getElementById('answerA').value.trim());
            //const userAnsB = parseFloat(document.getElementById('answerB').value.trim());
            const resultDiv = document.getElementById('result');

            let resultText = '';

            // Check part a
            if (Math.abs(userAnsA - ansA) < 0.02) {
                resultText += "Part a is correct!<br>";
            } else {
                resultText += `Part a is incorrect. The correct equation is: ${ansA}<br>`;
            }

            /* Check part b
            if (Math.abs(userAnsB - ansB) < 0.01) { // Allow for small floating-point differences
                resultText += "Part b is correct!";
            } else {
                resultText += `Part b is incorrect. The correct length is: ${ansB.toFixed(2)} feet`;
            }
            */
            // Display result
            resultDiv.innerHTML = resultText;
        }
