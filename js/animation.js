let randonSound1 = Math.round(Math.random() * 1);
let sound = new Audio(`mp3/step${randonSound1}.mp3`);
let randonSound2 = Math.round(Math.random() * 3);
let sound2 = new Audio(`mp3/win${randonSound2}.mp3`);



const cards = document.getElementsByClassName("card");
const showWinScreen = document.getElementById("win");
const showCards = 2500;
let card1Index = null,
    card2Index = null,
    cardsSelected = 0,
    aciertos = 0,
    intentos = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        flipCards(i);
        getCardsIndex(i);
    })
}


function flipCards(index) {

    if (!cards[index].querySelector(".frontFace").classList.contains("DISCOVERED") && cardsSelected < 2) { ///////////////////
        if (!cards[index].querySelector(".frontFace").classList.contains("flipped")) {
            cards[index].querySelector(".frontFace").classList.remove("frontFaceGetBack");
            cards[index].querySelector(".backFace").classList.remove("backFaceGetBack");
            cards[index].querySelector(".frontFace").classList.add("frontFaceSpin", "flipped");
            cards[index].querySelector(".backFace").classList.add("backFaceSpin");
        } else {
            cards[index].querySelector(".frontFace").classList.remove("frontFaceSpin", "flipped");
            cards[index].querySelector(".backFace").classList.remove("backFaceSpin");
            cards[index].querySelector(".frontFace").classList.add("frontFaceGetBack");
            cards[index].querySelector(".backFace").classList.add("backFaceGetBack");
        }
    }
}


function getCardsIndex(index) {
    if (!cards[index].querySelector(".frontFace").classList.contains("DISCOVERED")) {
        cardsSelected++; //para cotrolar el numero de cartas seleccionada
         randonSound1 = Math.round(Math.random() * 1);
         sound = new Audio(`mp3/step${randonSound1}.mp3`);
        setVolumen();
         sound.play();
        if (cardsSelected == 1) {
            card1Index = index;
            cards[card1Index].style.pointerEvents = "none";

        } else if (cardsSelected == 2) {
            intentos++;
            document.getElementById("marcador").innerText = `Attempts: ${intentos}` //marcador
            document.getElementById("Attempts").innerText = `Attempts: ${intentos}`
            card2Index = index;
            let imagen1 = cards[card1Index].querySelector(".backFace").id;
            let imagen2 = cards[card2Index].querySelector(".backFace").id;
            cardsSelected = 0;
            document.querySelector("*").style.pointerEvents = "none";
            Vbar.style.pointerEvents = "auto";
            VIcon.style.pointerEvents = "auto";

            if (imagen1 == imagen2) {
                cards[card1Index].querySelector(".frontFace").classList.add("DISCOVERED");
                cards[card2Index].querySelector(".frontFace").classList.add("DISCOVERED");
                aciertos++;

                randonSound2 = Math.round(Math.random() * 3);
                setVolumen();
                sound2.play();


                if (aciertos == 10) {
                    showWinScreen.style.display = "flex";
                }




                ////esto corrige un bug que permitia mostrar 3 cartas si se presionaba rapidamente click sobre las cartas
                cardsSelected = 1000;
                setTimeout(() => {
                    cardsSelected = 0;
                    cards[card1Index].style.pointerEvents = "auto";
                    document.querySelector("*").style.pointerEvents = "auto";
                }, 300);
                ////////////////////////////////////////////////////////////////////////////////////
            } else {
                cardsSelected = 1000;
                setTimeout(() => {
                    cardsSelected = 0;
                    flipCards(card1Index);
                    flipCards(card2Index);
                    cards[card1Index].style.pointerEvents = "auto";
                    document.querySelector("*").style.pointerEvents = "auto";
                }, showCards);
            }
        }
    }
}