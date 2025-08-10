let tugmalar = document.querySelectorAll("button")
let screen = document.querySelector(" .screen")
let hisoblash = document.querySelector(".hisoblash")
let tozalash = document.querySelector(".tozalash")
tugmalar.forEach(tugma => {
    tugma.addEventListener("click", function(){
        let value = this.getAttribute("data-num")
        if(value){
            screen.value = screen.value + value
        }

    })
})
tozalash.addEventListener("click", function(){
    screen.value = ""
})
hisoblash.addEventListener("click", function(){
    screen.value = eval(screen.value)
})