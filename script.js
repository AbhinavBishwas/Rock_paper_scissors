let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const user=document.querySelector('#user');
const comp=document.querySelector('#comp');




const draw=()=>{
    console.log("Match is getting drawed");
    msg.innerText="GAME IS DRAW. PlAY AGAIN";
    msg.style.backgroundColor="blue";
}
const showwinner=(userwin,user_choice,comp_choice)=>{
    if(userwin){
        console.log("YOU WON");
        user_score++;
        user.innerText=user_score;
        msg.innerText=`YOU WON. your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("YOU LOSE");
        comp_score++;
        comp.innerText=comp_score;
        msg.innerText=`YOU LOST. ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
    }
}

const gencomp_choice=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const playGame=(user_choice)=>{
    console.log("user choice= ", user_choice);
    //generate computer choice now
    const comp_choice=gencomp_choice();
    console.log("comp choice= ",comp_choice);
    if(user_choice===comp_choice){ 
        //draw game
        draw();
    }
    else{
        let userwin=true;
        if(user_choice==="rock"){
            //comp choice=paper ya ohir scissors
            userwin=comp_choice==="paper"?false:true;
        }
        else if(user_choice==="paper"){
            //comp choice=roxk ya ohir scissors
            userwin=comp_choice==="scissors"?false:true;
        }
        else{
            //comp choice rock ya paper
            userwin=comp_choice==="rock"?false:true;
        }  
        showwinner(userwin,user_choice,comp_choice);
    }
    

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id")
        // console.log("choice is clicked",user_choice);
        playGame(user_choice);
    })
});



//for toggling the bg color
let scorer=document.querySelector('#scoreboard');
let scorer_color=true;//means black tha
let toggle=document.querySelector(".btn");
let currmode="light";// to hume dark me krna hai 
toggle.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="white";
        scorer.style.color="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="#081b31";
        
        scorer.style.color="white";
        scorer_color=false; 
        
        
        
    }
    console.log(currmode);
})