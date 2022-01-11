let btn = document.querySelector('.btn');
const divs= document.querySelectorAll('div');
const pourcentage = 10;



btn.addEventListener("click",GameFunction);


function GameFunction(){
    document.getElementById("myHeader").textContent="Results";
    document.getElementById('myParagraph').textContent='';
    index = 0;
    count = 0;
    while (index < pourcentage){
        let a = Math.floor(Math.random()*pourcentage)+1;
        let b = Math.floor(Math.random()*pourcentage)+1;
        divs[index].textContent = "You had " +a+"points, Computer has "+b+" points.";
        if (a==b){
            count++;
        }
        else if (a<b){
            count++;
        }
        index++;
        }
    let score = count + "/" + pourcentage;
    document.getElementById('myParagraph').textContent= "Your Score is : "+ score;
    if (count>5){
        document.getElementById("What").textContent = "You win. Congratulations!";
}
    else if (count<5){
        document.getElementById("What").textContent = "You fail!!HAHA";
}
    else{
        document.getElementById("What").textContent = "Tie Game";
}      
}  