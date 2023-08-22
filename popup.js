// buttons

const savebutton = document.getElementById("saveButton");
const clearbutton = document.getElementById("clearButton");
const savednoteslist = JSON.parse(localStorage.getItem("notes")) || [];
//elements



//creating dynamic div for saved notes
let divElement = document.createElement('div');
divElement.classList.add("addnewnote");
let containerDiv = document.querySelector('.main');
containerDiv.appendChild(divElement);

savebutton.addEventListener("click", displaySavedNotes)
//load saved notes 

function loadSavedNotes(val) {
    let html = 
    `<div class = "savednotesarea">
        <div class="thenotes"> 
            <div class="note">${val}</div>
        </div>
        <div class = "div-remove-note">
            <button class="remove-note">X</button>
        </div>
    </div>`;

    divElement.insertAdjacentHTML('afterend', html);
    
    document.querySelector(".remove-note")
    .addEventListener("click", function(){
        console.log(this.parentNode);
        let removeelement = this.parentNode.parentNode;
        containerDiv.removeChild(removeelement)
        
    })
}

for (let i = 0; i < savednoteslist.length; i++) {
    loadSavedNotes(savednoteslist[i]);
}

function displaySavedNotes() {
    const textarea = document.getElementById("textBox");

    let html = 
    `<div class = "savednotesarea">
        <div class="thenotes"> 
            <div class="note">${textarea.value}</div>
        </div>
        <div class = "div-remove-note">
            <button class="remove-note">X</button>
        </div>
    </div>`;
    if ((textarea.value).trim() !="")
    divElement.insertAdjacentHTML('afterend', html);

    savednoteslist.push(textarea.value);

    localStorage.setItem("notes",JSON.stringify(savednoteslist));
    
document.querySelector(".remove-note").addEventListener("click", function(){
    let removeelement = this.parentNode.parentNode;
    containerDiv.removeChild(removeelement)
})
}




//clear button function

clearbutton.onclick = function() {
    const textarea = document.getElementById("textBox");
    console.log("you cleared :", textarea.value);
    document.getElementById("textBox").value = " ";
}

