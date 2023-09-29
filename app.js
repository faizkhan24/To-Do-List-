const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if(event.key=="Enter") {
            addToDO(this.value)
            this.value = ""
        }
    }
)


function saveData(){
    localStorage.setItem("data", toDoBox.innerHTML);
}

function displayData(){
    toDoBox.innerHTML = localStorage.getItem("data");
}

// displayData();

const addToDO = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i

    ` ;
  

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
            // saveData();
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
            // saveData();
        }        
    )

    toDoBox.appendChild(listItem)
    //  saveData();
}
