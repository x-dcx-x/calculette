let reset = document.getElementById("reset");
let virg = document.getElementById("dot");
let egal = document.getElementById("=");
let screen = document.getElementById("screen");
let number=document.getElementsByClassName("number")
let operande=document.getElementsByClassName("operande")

virg.addEventListener("click",function (){
    screen.innerHTML += virg.innerHTML;
})

egal.addEventListener('click', function () {
    screen.innerHTML = eval(screen.innerHTML);
})
reset.addEventListener("click", function (){
    screen.innerHTML="";
})

for ( let button of number) {
    button.addEventListener('click', function () {
        let dataNumber = button.innerHTML;
        screen.innerHTML += dataNumber;
    })
}

for (let button of operande){
    button.addEventListener("click",function (){
        let dataoperande=button.innerHTML;
        screen.innerHTML += dataoperande;
    })
}


