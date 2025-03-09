let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".img");

let uScore=document.querySelector("#yScore")
let cScore=document.querySelector("#cScore")
let outCome=document.querySelector("#msg")
let newGame=document.querySelector("#newGame")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")

        let randomNo=Math.floor(Math.random()*10)%3
        let compChoice=choices[randomNo].getAttribute("id")

        let winner="";
        if(userChoice!==compChoice){
            if((userChoice=="rock" && compChoice==="paper") || (userChoice=="paper" && compChoice==="rock")){
                if(userChoice==="rock"){
                    compScore++;
                    winner="comp";
                    updateScore("comp");
                }
                else{
                    userScore++;
                    winner="user";
                    updateScore("user");
                }
            }
            else if((userChoice=="rock" && compChoice==="scissor") || (userChoice=="scissor" && compChoice==="rock")){
                if(userChoice==="rock"){
                    winner="user";
                    userScore++;
                    updateScore("user");
                }
                else{
                    compScore++;
                    winner="comp";
                    updateScore("comp");
                }
            }
            else{
                if(userChoice==="paper"){
                    compScore++;
                    winner="comp";
                    updateScore("comp");
                }
                else{
                    userScore++;
                    winner="user";
                    updateScore("user");
                }
            }
        }

        if(winner!==""){
            if(winner==="user"){
                outCome.innerText=`You won. ${userChoice} beats ${compChoice}`
                outCome.style.backgroundColor="#6a994e"
            }
            else{
                outCome.innerText=`You lost! ${compChoice} beats ${userChoice}.`
                outCome.style.backgroundColor="#c1121f"
            }
        }
        else{
            outCome.innerText='It was Draw.'
            outCome.style.backgroundColor="#14213d"
        }
    })
})

let updateScore=(winner)=>{
    if(winner==="user")
        uScore.innerText=userScore;
    else
        cScore.innerText=compScore;
}

let resetGame=()=>{
    userScore=0
    compScore=0
    yScore.innerText=0
    cScore.innerText=0
    winner="";
    outCome.style.backgroundColor="#14213d"
    outCome.innerText='Play the game by selecting any one of the option from above.'
}
newGame.addEventListener("click",resetGame)