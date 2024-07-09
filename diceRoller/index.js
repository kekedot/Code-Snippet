function rollDice() {
    
    const numOfDice = document.getElementById("numOfDice").value;
    const dices = document.getElementById("dices");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);

        values.push(value);
        images.push(`<img src="dice-images/${value}.png"> `)
    }

    dices.textContent = values;
    diceImg.innerHTML = images;

    console.log(images);

}