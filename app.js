//měnění fotek background image





function showMenu() {


    let menuMobil = document.querySelector("#menuMobil")

    let burger = document.querySelector("#burger");
    if (burger.src.match("krizek")) {
        
        burger.src = "burger.png";
        burger.classList.remove("transform");

        burger.classList.add("transform2")
    } 
    else {
        burger.src = "krizek.png";
        burger.classList.add("transform")
        burger.classList.remove("transform2");
    }

    menuMobil.classList.toggle("transform3");

    menuMobil.classList.toggle("transform4");


    

}

function skrytMenu() {
    let logoZobrazit = document.querySelector("#vrabecVeStredu");

    let menuSkryt = document.querySelector("#menuMobil")

    let burger = document.querySelector("#burger");

menuSkryt.classList.add("transform3");
menuSkryt.classList.remove("transform4");
burger.src = "burger.png";

}
//body on scroll vymyslet, aby se zmenšilo menu. nikoliv - místo toho fixní menu burger, hlavička zmizí. k menu přidat záložku Domů(ptáka)
//a rozbalit nabídku hezky - jak? onclick transform (0%,0%) z (0,-100)..bez displayů, přidávat třídy.
//v safari upravit borderbottom...podmínka pouze pro safari
