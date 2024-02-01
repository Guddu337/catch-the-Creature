var btn = document.querySelector("button");
var istatus = document.querySelector("h2");
var check = 0;
btn.addEventListener("click",function(){
    if(check==0){
        var num = Math.floor(Math.random()*7000);
        istatus.innerHTML="request Sending...";
        istatus.style.color = "rgb(255, 213, 0)";
        btn.innerHTML = "Sending";
        setTimeout(function(){
            istatus.innerHTML = "Friends";
            istatus.style.color = "green";
            btn.innerHTML = "Remove Friend";
        },3000)
        check = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
})