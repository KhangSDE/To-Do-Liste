const inputBox = document.getElementById("inputText");
const inputContainer = document.getElementById("list");
const limitMessage = document.getElementById("limit1");

function addTask() {
 /*  var inputTask = document.getElementById("inputText").value;
   document.getElementById("task1").innerHTML = inputTask; */

   if (inputBox.value === "") {
    alert("Schreibe etwas rein");
   }
   else {
    if(document.querySelectorAll("li.task").length >= 10) {
      //  alert("Du hast bereits 10 Aufgaben hinzugefügt. Du kannst nicht mehr hinzufügen.");
        
        var limit = document.getElementById("limit1");
        limit.innerHTML = "Maximale Notizen erreicht.";
        
        return;

       } 
    
    
    let li = document.createElement("li");
    li.classList.add("task");
    
    li.innerHTML = inputBox.value;
    inputContainer.appendChild(li)

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    if(document.querySelectorAll("li.task").length < 10)  {
        limitMessage.innerHTML = "";
    }
   }
   inputBox.value = "";
   saveData();




   
}

inputContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();


        if (document.querySelectorAll("li.task").length < 10) {
            limitMessage.innerHTML = "";
        }


    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();

var enterKey = document.getElementById("inputText");

enterKey.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addTask();
        maxTask();
    }
})




