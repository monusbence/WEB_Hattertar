function csuszka() {
    let ertek = document.getElementById("Atviteliseb").value;
    document.getElementById("ertek").innerHTML = ertek;



}
function Eredmeny() {
    let mennyiseg = document.getElementById("adatmeny").value;
    let sebesseg = document.getElementById("Atviteliseb").value;
    
    if(document.getElementById("adat-tipus").value == "MB") {
        mennyiseg= mennyiseg*1000;

    }
    if(document.getElementById("adat-tipus").value == "GB") {
        mennyiseg= mennyiseg*1000*1000;

    }
    if(document.getElementById("adat-tipus").value == "TB") {
        mennyiseg= mennyiseg*1000*1000*1000;

    }
    if(document.getElementById("atviteli-seb").value == "MB/s") {
        sebesseg= sebesseg*1000;

    }
    if(document.getElementById("atviteli-seb").value == "GB/s") {
        sebesseg= sebesseg*1000*1000;

    }
    let osztas = mennyiseg/sebesseg;
    let oraba = Math.floor(osztas / 3600);
    let percbe = Math.floor(osztas % 3600 / 60);
    let masodpercbe = Math.floor(osztas % 3600 % 60);
    document.getElementById("eredmeny").innerHTML = oraba + " óra " + percbe + " perc " + masodpercbe + " másodperc ";
}