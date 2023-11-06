const savebutton = document.getElementById("saveButton");
const clearbutton = document.getElementById("clearButton");
const containerDiv = document.querySelector('.main');
const textarea = document.getElementById("textBox");

// Load previously saved notes when the extension is opened
window.addEventListener("DOMContentLoaded", () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => {
        createNoteElement(noteText);
    });
});

savebutton.addEventListener("click", () => {
    const noteText = textarea.value.trim();
    if (noteText !== "") {
        createNoteElement(noteText);

        // Save the notes to localStorage
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(savedNotes));

        textarea.value = ""; // Clear the textarea
    }
});

clearbutton.onclick = function() {
    textarea.value = ""; // Clear the textarea
};

function createNoteElement(noteText) {
    const html = `
        <div class="savednotesarea">
            <div class="thenotes"> 
                <div class="note">${noteText}</div>
            </div>
            <div class="div-remove-note">
                <button class="remove-note">X</button>
            </div>
        </div>`;
    const noteElement = document.createElement('div');
    noteElement.classList.add("addnewnote");
    noteElement.innerHTML = html;
    containerDiv.appendChild(noteElement);

    noteElement.querySelector(".remove-note").addEventListener("click", function() {
        containerDiv.removeChild(noteElement);

        // Update localStorage after removing the note
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = savedNotes.filter(savedNote => savedNote !== noteText);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    });
}