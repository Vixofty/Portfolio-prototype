const radioBtn1 = document.getElementById('btn1');
const radioBtn2 = document.getElementById('btn2');
const radioBtn3 = document.getElementById('btn3');
const radioBtn4 = document.getElementById('btn4');
const radioBtn5 = document.getElementById('btn5');
const btnVerify = document.querySelector('.content-2-btns-div')

const radioBtns = [radioBtn1,radioBtn2,radioBtn3,radioBtn4,radioBtn5]

btnVerify.addEventListener('click', () =>{
    for (radioBtn of radioBtns){
        if (radioBtn.checked){
            if (radioBtn == radioBtn1){
                document.getElementById('marvel').classList.add('showingimg')
                document.getElementById('marvel-description').classList.add('showingmarvel')
            } else if (radioBtn == radioBtn2){
                document.getElementById('gaming').classList.add('showingimg')
                document.getElementById('gaming-description').classList.add('showinggaming')
            } else if (radioBtn == radioBtn3){
                document.getElementById('anime').classList.add('showingimg')
                document.getElementById('anime-description').classList.add('showinganime')
            } else if (radioBtn == radioBtn4){
                document.getElementById('music').classList.add('showingimg')
                document.getElementById('music-description').classList.add('showingmusic')
            } else if (radioBtn == radioBtn5){
                document.getElementById('voley').classList.add('showingimg')
                document.getElementById('voley-description').classList.add('showingvoley')
            }
        } else {
            if (radioBtn == radioBtn1){
                document.getElementById('marvel').classList.remove('showingimg')
                document.getElementById('marvel-description').classList.remove('showingmarvel')
            } else if (radioBtn == radioBtn2){
                document.getElementById('gaming').classList.remove('showingimg')
                document.getElementById('gaming-description').classList.remove('showinggaming')
            } else if (radioBtn == radioBtn3){
                document.getElementById('anime').classList.remove('showingimg')
                document.getElementById('anime-description').classList.remove('showinganime')
            } else if (radioBtn == radioBtn4){
                document.getElementById('music').classList.remove('showingimg')
                document.getElementById('music-description').classList.remove('showingmusic')
            } else if (radioBtn == radioBtn5){
                document.getElementById('voley').classList.remove('showingimg')
                document.getElementById('voley-description').classList.remove('showingvoley')
            }
        }
    }
})
let counter = 1;
setInterval( () =>{
    document.getElementById('btn' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
    for (radioBtn of radioBtns){
        if (radioBtn.checked){
            if (radioBtn == radioBtn1){
                document.getElementById('marvel').classList.add('showingimg')
                document.getElementById('marvel-description').classList.add('showingmarvel')
            } else if (radioBtn == radioBtn2){
                document.getElementById('gaming').classList.add('showingimg')
                document.getElementById('gaming-description').classList.add('showinggaming')
            } else if (radioBtn == radioBtn3){
                document.getElementById('anime').classList.add('showingimg')
                document.getElementById('anime-description').classList.add('showinganime')
            } else if (radioBtn == radioBtn4){
                document.getElementById('music').classList.add('showingimg')
                document.getElementById('music-description').classList.add('showingmusic')
            } else if (radioBtn == radioBtn5){
                document.getElementById('voley').classList.add('showingimg')
                document.getElementById('voley-description').classList.add('showingvoley')
            }
        } else {
            if (radioBtn == radioBtn1){
                document.getElementById('marvel').classList.remove('showingimg')
                document.getElementById('marvel-description').classList.remove('showingmarvel')
            } else if (radioBtn == radioBtn2){
                document.getElementById('gaming').classList.remove('showingimg')
                document.getElementById('gaming-description').classList.remove('showinggaming')
            } else if (radioBtn == radioBtn3){
                document.getElementById('anime').classList.remove('showingimg')
                document.getElementById('anime-description').classList.remove('showinganime')
            } else if (radioBtn == radioBtn4){
                document.getElementById('music').classList.remove('showingimg')
                document.getElementById('music-description').classList.remove('showingmusic')
            } else if (radioBtn == radioBtn5){
                document.getElementById('voley').classList.remove('showingimg')
                document.getElementById('voley-description').classList.remove('showingvoley')
            }
        }
    }
}, 5000)

window.addEventListener("load", ()=>{
    document.getElementById("load-page").classList.add("load-page-out")
})


