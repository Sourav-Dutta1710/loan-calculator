let list = [];

function showListItem() {
  document.getElementById( "result" ).innerHTML = "";
  for (i = 0; i < list.length; i++) {
  document.getElementById(
    "result"
  ).innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-center bg-white rounded-5 p-3 mb-4 gap-3">
    <h3>Name: ${list[i].name}</h4>
             <h3>Amount: <span class = "current-amount">${list[i].amount}</span></h3>
             <div class="d-flex gap-2 ">
             <input type="number"  placeholder = "Amount" class="hidden-item addValue" id = "submit">
               <button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center" 
             onclick="increment(${i})"><i class="fa-solid fa-plus"></i></button>
             </div>`;
}
}


function add() {
  let task = document.getElementById("name").value.trim();
  if (task === "") alert("Name Field Blank");
  else {
    const listItem = {
      name: document.getElementById("name").value,
      amount: document.getElementById("amount").value,
    };
    list.push(listItem);
      showListItem();
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
  }
}

function increment(i) {
  document.getElementsByClassName("addValue")[i].classList.toggle("hidden-item");
  
  document.getElementsByClassName("addValue")[i].addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      list[i].amount =  (Number(document.getElementsByClassName("addValue")[i].value)) + (Number(document.getElementsByClassName("current-amount")[i].innerHTML));
      document.getElementsByClassName("addValue")[i].classList.add("hidden-item");
      showListItem();
    }
  })
}

function addButton(event) {
  if (event.key === "Enter")
           add();
}