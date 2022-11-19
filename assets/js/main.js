let data = [
    {
        url: "https://images.unsplash.com/photo-1630494598918-6fd8c7ca0187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        question: "1. Was ist mit Anakin Skywalker während des Kampfes mit Graf Dooku passiert?",
        choice: ["Er verlor sein linkes Bein", "Er verlor seinen rechten Arm", "Er verlor sein rechtes Bein", "Er verlor seinen linken Arm"],
        answer: "Er verlor seinen rechten Arm"
    },
    {
        url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        question: "2. Wer hat die Rolle von Commander Cody gespielt?",
        choice: ["Jay Laga'aia", "Temuera Morrison", "Ahmed Best", "Joel Edgerton"],
        answer: "Temuera Morrison"
    },
    {
        url: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        question: "3. Was hat Luke Skywalker in seinem Kampf mit Darth Vader verloren?",
        choice: ["Seine linke Hand", "Sein linker Fuß", "Seine rechte Hand", "Sein linkes Bein"],
        answer: "Seine rechte Hand"
    },
    {
        url: "https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: "4. Was war laut Kaiser die Schwäche von Luke Skywalker?",
        choice: ["Sein Glaube an die Lichtseite der Macht", "Sein Vertrauen in seine Freunde", "Sein Mangel an Sicht", "Sein Widerstand gegen die dunkle Seite der Macht"],
        answer: "Sein Vertrauen in seine Freunde"
    },
    {
        url: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: "5. Wo haben die Klonkriege begonnen?",
        choice: ["Tatooine", "Geonose", "Naboo", "Coruscan"],
        answer: "Geonose"
    },
    {
        url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: `6. Welcher Star Wars-Film hat dieses Zitat: "Ich bin in diesem Kampf, seit ich sechs Jahre alt war!`,
        choice: ["Star Wars: Eine neue Hoffnung", "Star Wars: Der Aufstieg von Skywalker", "Rogue One: A Star Wars Story", "Solo: A Star Wars Story"],
        answer: "Rogue One: A Star Wars Story"
    },
    {
        url: "https://images.unsplash.com/photo-1592513735373-ae19bac7fde8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: "7. Was schuldete Jar Jar Binks Qui-Gon Jinn, nachdem er während der Invasion von Naboo von demselben gerettet worden war?",
        choice: ["Eine Reise nach Otoh Gunga", "Ein Bongo", "Eine Ehrenschuld", "9,000 Kredite"],
        answer: "Eine Ehrenschuld"
    },
    {
        url: "https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: "8. Was hat Owen Lars Luke Skywalker über seinen Vater erzählt?",
        choice: ["Er war ein Jedi-Ritter gewesen", "Er war ein Sith-Lord gewesen", "Er war Navigator auf einem Gewürzfrachter", "Er war ein Kampfpilot"],
        answer: "Er war Navigator auf einem Gewürzfrachter"
    },
    {
        url: "https://images.unsplash.com/photo-1627919849634-8eb050bc8eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        question: `9. Wer sagte dieses Zitat: "Ich entscheide mich, für mein Volk zu leben."`,
        choice: ["Padmé Amidala", "Riyo Chuchi", "Königin Jamillia", "Hera Syndulla"],
        answer: "Riyo Chuchi"
    },
    {
        url: "https://images.unsplash.com/photo-1598501479146-ef2b41258663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        question: "10 Was ist Chewbaccas bevorzugte Waffe?",
        choice: ["Blastergewehr", "Lichtschwert", "Metal Club", "Bowcaster"],
        answer: "Bowcaster"
    }
]

// ==========================================================
//         Neue Elemente erstellen und ins HTML schreiben
// ==========================================================

let divEl = document.querySelector("#content");
let winCounter = 0;
let looseCounter = 0;


function createNewQuestions(object) {

    console.log(divEl);
    //Neues <img> Element erstellen und in das <div> packen
    let newImgEl = document.createElement("img");
    newImgEl.src = data[object].url;
    divEl.appendChild(newImgEl);

    //Neues <p> Element erstellen und in das <div> packen für die Fragen
    let newP = document.createElement("p");
    newP.textContent = data[object].question;

    divEl.appendChild(newP);

    let divButton = document.createElement("div");
    divEl.appendChild(divButton);

    //Alle Antwortmöglichkeiten (Es ist jeweils ein Array)
    let allChoices = data[object].choice;
    console.log(allChoices);

    // Hole die richtige Antwort
    let theAnswer = data[object].answer;

    //Vom Array jeden einzelnen Antwortmöglichkeiten Wert in einen neuen <button> packen
    allChoices.forEach(choise => {
        let newButton = document.createElement("button");
        newButton.textContent = choise;
        divButton.appendChild(newButton);

        newButton.addEventListener("mouseover", () => {
            newButton.style.cursor = `url(../img/sword.png)`
        })

        newButton.addEventListener("click", () => {
            let pAnswer = document.createElement("p");

            //Bedingungen für richtige & falsche Antworten

            console.log(object);
            if (newButton.textContent == theAnswer) {
                newButton.style.backgroundColor = "green";
                console.log("Richtig");
                pAnswer.textContent = "Richtig!"
                winCounter++;

            } else {
                newButton.style.backgroundColor = "red";
                console.log("falsch");
                pAnswer.textContent = "Falsch!"
                looseCounter++;
            }


            divEl.appendChild(pAnswer);
            //Sobald alle Objekte im Quiz abgefragt wurden, soll er das nicht mehr ausführen (Es sind 10 Objekte)
            if (object < 9) {
                setTimeout(() => {
                    //setze alles zurück
                    divEl.innerHTML = "";

                    objectPosition++;
                    createNewQuestions(objectPosition);
                }, 1000);

                // Am Ende: Wie viele richtige und falsche Antworten
            } else {
                if (winCounter <= 5) {
                    pAnswer.textContent = ` Ergebnis:   ${winCounter} richtig und ${looseCounter} falsch.... Bist du wirklich ein Star Wars Fan?`
                }
                if (winCounter == 9 || winCounter == 10) {
                    pAnswer.textContent = `${winCounter} richtig und ${looseCounter} falsch. Gut gemacht!`
                }

                setTimeout(() => {
                    divButton.style.display = "none"
                }, 1000);
                pAnswer.classList.add("animationWinner");

            }

        })

    })
}

let objectPosition = 0;
createNewQuestions(objectPosition);
console.log(objectPosition);
