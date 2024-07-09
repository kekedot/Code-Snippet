const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

running = true;

const inputNum = document.getElementById("myNum");
const submit = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

document.getElementById("attempts").textContent = attempts;

while (running) {

    submit.onclick = function () {

        let guess = inputNum.value.trim();

        attempts++;
        document.getElementById("attempts").textContent = attempts;

        if (guess === "") {
            myLabel.textContent = "please enter a number";
        } else {
            guess = Number(guess);

            if (guess < minNum || guess > maxNum) {
                myLabel.textContent = `please enter a number from ${minNum} - ${maxNum}`;
            } else {

                if (guess < answer) {
                    myLabel.textContent = `TOO LOW!!`;
                } else if (guess > answer) {
                    myLabel.textContent = `TOO HIGH!!`;
                } else if (guess = answer) {
                    myLabel.textContent = `CONGRATULATIONS YOUR ANSWER IS CORRECT!!`;
                    document.getElementById("tookAttempts").textContent = `you took ${attempts} attempts`;
                    submit.disabled = true;

                    const resetButton = document.createElement('button');
                    resetButton.textContent = `reset`;
                    resetButton.id = `myresetButton`;

                    document.getElementById("container").appendChild(resetButton);

                    document.getElementById("myresetButton").onclick = function() {
                        resetGame();
                    }
                }
            }

        }

    }

    running = false;
};

function resetGame() {
    attempts = 0;
    document.getElementById("attempts").textContent = attempts;
    submit.disabled = false;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    inputNum.value = ``;
    myLabel.textContent = ``;
    document.getElementById("tookAttempts").textContent = ``;

    if (document.getElementById("myresetButton")) {
        document.getElementById("myresetButton").remove();
    }
}

console.log(answer);

