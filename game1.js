let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#computer-score");


const gencompchoice=()=>{
    const options=["rocks","paper","scissors"];
     const index=Math.floor(Math.random()*3);
    //rock,paper,scissors
    return options[index];
}

const showWinner= (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScore.innerText=userscore;
       // console.log("you win!");
        msg.innerText=`you win! Your ${compchoice}  beats ${userchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScore.innerText=compscore;
       msg.innerText=`you lose!  ${userchoice} beats Your ${compchoice}`; 
       msg.style.backgroundColor="red";
    }
};

const playGame = (userchoice)=>{
    console.log("userchoice=",userchoice);
    //generate computer choice->
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
    
    if(userchoice===compchoice){
        console.log("the game is draw");
        msg.innerText="Game was draw, play again!"; 
        msg.style.backgroundColor="#081b31";
    }
    else{
        let userwin=true;

        if(userchoice==="rock"){
            //scissor,paper
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
           userwin = compchoice==="scissors"?false:true;
        }
        else{
           userwin= compchoice==="rock"?false:true;
        }
        showWinner(userwin,compchoice,userchoice);
    }
    
};

choices.forEach((choic) => {
    choic.addEventListener("click",()=>{
    const userchoice=choic.getAttribute("id")  
    console.log("choice was clicked",userchoice);  
    playGame(userchoice);
    });
});