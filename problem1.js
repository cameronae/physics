 // Setup
        const a = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Random number between 5 and 15
        const b = Math.floor(Math.random() * (5 - 3 + 1)) + 3; // Random number between 3 and 5

        // Display random values for a and b
        document.getElementById('aValue').textContent = a;
        document.getElementById('bValue').textContent = b;

        // Answers
        const ansA = `${a}^2 + (x-${b})^2 = x^2`; // Equation for part a
        const ansB = ((a ** 2) + (b ** 2)) / (2 * b); // Length of the wire for part b

        // Check answers
        function checkAnswers() {
            const userAnsA = document.getElementById('answerA').value.trim();
            const userAnsB = parseFloat(document.getElementById('answerB').value.trim());
            const resultDiv = document.getElementById('result');

            let resultText = '';

            // Check part a
            if (userAnsA === ansA) {
                resultText += "Part a is correct!<br>";
            } else {
                resultText += `Part a is incorrect. The correct equation is: ${ansA}<br>`;
            }

            // Check part b
            if (Math.abs(userAnsB - ansB) < 0.01) { // Allow for small floating-point differences
                resultText += "Part b is correct!";
            } else {
                resultText += `Part b is incorrect. The correct length is: ${ansB.toFixed(2)} feet`;
            }

            // Display result
            resultDiv.innerHTML = resultText;
        }
