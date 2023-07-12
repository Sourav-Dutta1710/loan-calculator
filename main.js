const list = JSON.parse(localStorage.getItem("list")) || [];
const result = document.getElementById("result");

function showListItem(flag) {
  result.innerHTML = "";
  for (i = 0; i < list.length; i++) {
    document.getElementById(
      "result"
    ).innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-center bg-white rounded-5 p-3 mb-4 gap-3">
    <h3>Name: ${list[i].name}</h4>
             <h3>Amount: <span class = "current-amount">${list[i].amount}</span></h3>
             <div class="d-flex gap-2 ">
             <input type="number"  placeholder = "Amount" class="hidden-item addValue" id = "submit">
               <span class = "addButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
             onclick="increment(${i},1)"><img src="./images/plus-solid.svg"/></button></span>
             <span class = "minusButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
             onclick="increment(${i},0)"><img src="./images/minus-solid.svg"/></button></span>
             <span class = "deleteButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
             onclick="deletePerson(${i},0)"><img src="./images/dumpster-solid.svg"/></button></span>
             </div>`;
             if(flag === 1)
                localStorage.setItem("list",JSON.stringify(list))           
  }
}

function addTask() {
  const taskName = document.getElementById("name").value;
  const taskAmount = document.getElementById("amount").value;
  let flag = 0;
  const task = taskName.trim();
  if (!task || !taskAmount) 
    alert("name or amount blank");
  else if (taskAmount < 1)
    alert("enter valid amount");
   else {
    const listItem = {
      name: taskName,
      amount: taskAmount,
    };
    for (i = 0; i < list.length; i++) {
      if (list[i].name === listItem.name) {
        increment(i,0);
        flag = 1;
      }
    }
    if (flag === 0) {
      list.push(listItem);
      showListItem(1);
    }
  }
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

function increment(i, j) {
  const addValue = document.getElementsByClassName("addValue")[i];
  let currentAmount = document.getElementsByClassName("current-amount")[i];
  addValue.classList.remove("hidden-item");
  document.getElementsByClassName("minusButton")[i].classList.add("hidden-item");
  document.getElementsByClassName("addButton")[i].classList.add("hidden-item");
  document.getElementsByClassName("deleteButton")[i].classList.add("hidden-item");
  addValue.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if(addValue.value <= 0)
          alert("enter valid amount");
        else if (j === 1)
          list[i].amount =
            Number(addValue.value) +
            Number(currentAmount.innerHTML);
        else
          list[i].amount =
            -Number(addValue.value) +
            Number(currentAmount.innerHTML);
        addValue.classList.add("hidden-item");
        showListItem(1);
      }
    });
}

function addButton(event) {
  if (event.key === "Enter") addTask();
}

function deletePerson(i){
    list.splice(i,1);
    localStorage.setItem("list",JSON.stringify(list));
    showListItem(0);   
}

function deleteAll(){
  list.splice(0,list.length);
  localStorage.clear();
  showListItem(0);
}

 showListItem(0);