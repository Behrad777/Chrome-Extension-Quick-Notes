// buttons

const savebutton = document.getElementById("saveButton")
const clearbutton = document.getElementById("clearButton")

//elements

const textarea = document.getElementById("textBox")

savebutton.onclick = function() {
    console.log("you saved: ", textarea.value);
    

    chrome.storage.local.set();


     
}


clearbutton.onclick = function() {
    console.log("you cleared :", textarea.value);
    document.getElementById("textBox").value = "";
}


  
  

