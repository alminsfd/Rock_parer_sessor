let userScore=0;
let computerScore=0;
let choiches=document.querySelectorAll(".choich")
let msg=document.querySelector("#msg")
let You=document.querySelector("#You")
let Comp=document.querySelector("#Comp")
choiches.forEach((choich)=>{
    choich.addEventListener("click",()=>{;
        let userChoice=choich.getAttribute("id")
        playGame(userChoice)
    })
})
//function
const playGame=(userChoice)=>{
console.log("user choice is",userChoice);
let b= gencomputerChoice()
console.log("Computer choice is",b);
cheakWinner(userChoice,b)
}

//function
const gencomputerChoice=()=>{
    let computerOption=["Rock","Paper","Scissor"]
    let compIndex=Math.floor(Math.random()*3)
    return computerOption[compIndex]
}
//function
const cheakWinner=(userChoice,b)=>{
       if(userChoice===b){
         draw();
       }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=b==="Paper"?false:true
        }else if(userChoice==="Paper"){
            userWin=b==="Scissor"?false:true
        }else{
            userWin=b==="Rock"?false:true
        }
        showWinner(userWin,userChoice,b)
       }
}
//function
draw=()=>{
    msg.innerText="Game is Draw.Play again!"
    msg.style.backgroundColor="#1e272e"
}
const showWinner=(userWin,userChoice,b)=>{
    if(userWin){
        userScore++
        You.innerText=userScore
        msg.innerText=`You are win.You are ${userChoice} beats computer's ${b}`
        msg.style.backgroundColor="green"
    }else{
        computerScore++
        Comp.innerText=computerScore
        msg.innerText=`Computer is win.Computer is ${b} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}