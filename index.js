

function rollDice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const imgresult=document.getElementById("imgresult");
    const values=[];
    const images=[];

    for(let i=0;i<numofdice;i++){
        const v=Math.floor(Math.random()*6)+1;
        console.log(v);
        values.push(v);
        images.push(`<img src="dice/dice-${v}.svg" alt="">`)
    }

    diceresult.textContent=`Dice: ${values.join(', ')}`;
    imgresult.innerHTML=images.join(``);
}