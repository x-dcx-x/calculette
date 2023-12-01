let reset = document.getElementById("reset");
let divise = document.getElementById("/");
let moin= document.getElementById("-");
let plus = document.getElementById("+");
let x = document.getElementById("*");
let virg = document.getElementById(".");
let egal = document.getElementById("=");
let screen = document.getElementById("screen");
let number=document.getElementsByClassName("number")
let operande=document.getElementsByClassName("operande")



virg.addEventListener("click",function (){
    screen.innerHTML=eval(screen.innerHTML);
})

egal.addEventListener('click', function () {
    screen.innerHTML = eval(screen.innerHTML);

})
reset.addEventListener("click", function (){
    delete reset.screen
    screen.innerHTML= eval(screen.innerHTML)
})

plus.addEventListener("click", function (){
    screen.innerHTML=eval (screen.innerHTML)
})

moin.addEventListener("click", function (){
    screen.innerHTML=eval (screen.innerHTML)
})

divise.addEventListener("click", function (){
    screen.innerHTML=eval (screen.innerHTML)
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
        screen.innerHTML += dataoperande
    })
}


