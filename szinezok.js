var aktualSzin = "#ff0000";

/*function changeSzinezo(url){
    console.log("Lefut ChangeSzinezo")
    console.log("Url: "+ url)
    document.getElementById("szinezo").innerHTML =`<object type="image/svg+xml" data="${url}" width ="1000vw" height ="2000vw"></object>`;    
}*/

function displaySzinezo1(){console.log("1");document.getElementById("szinezo").style.display = "block";document.getElementById("szinezo2").style.display = "none";document.getElementById("szinezo3").style.display = "none";document.getElementById("szinezo4").style.display = "none"}
function displaySzinezo2(){console.log("2");document.getElementById("szinezo").style.display = "none";document.getElementById("szinezo2").style.display = "block";document.getElementById("szinezo3").style.display = "none";document.getElementById("szinezo4").style.display = "none"}
function displaySzinezo3(){console.log("3");document.getElementById("szinezo").style.display = "none";document.getElementById("szinezo2").style.display = "none";document.getElementById("szinezo3").style.display = "block";document.getElementById("szinezo4").style.display = "none"}
function displaySzinezo4(){console.log("4");document.getElementById("szinezo").style.display = "none";document.getElementById("szinezo2").style.display = "none";document.getElementById("szinezo3").style.display = "none";document.getElementById("szinezo4").style.display = "block"}


function changeSzin(szin){
    console.log("change szinről:"+aktualSzin+" Szinre: "+ szin)
    aktualSzin = szin;
    console.log("Change aktualszin:" +aktualSzin)
    
}

function szinez(elem){
    console.log("Szinez aktualszin:" +aktualSzin)
    document.getElementById(elem.id).style.fill = aktualSzin;
    console.log(document.getElementById(elem.id).style.fill)
    console.log(elem)
}   

function almaCheck(){

}