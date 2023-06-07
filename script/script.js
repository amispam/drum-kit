document.querySelectorAll(".drum").forEach(el => {
    el.addEventListener("click", function(){
        makeSound(el.textContent);
        flashIt(el.textContent);
    });
});

document.addEventListener("keydown", function(event){
    if(["w","a","s","d","j","k","l"].includes(event.key)){
        makeSound(event.key);
        flashIt(event.key);
    }
});

function makeSound(el){
    var music = new Audio("sounds/"+el+".mp3");
        music.play();
}

function flashIt(word){
    document.querySelector("."+word).classList.toggle("flashed");
    setTimeout(() => {
        document.querySelector("."+word).classList.toggle("flashed");
    }, 100);
}