const list = [];
const result = document.getElementById("result");

function showListItem() {
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
             onclick="increment(${i},1)"><i class="fa-solid fa-plus"></i></button></span>
             <span class = "minusButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
             onclick="increment(${i},0)"><i class="fa-solid fa-minus"></i></i></button></span>
             </div>`;
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
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
      }
    }
    if (flag === 0) {
      list.push(listItem);
      showListItem();
    }
  }
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

function increment(i, j) {
  const addValue = document.getElementsByClassName("addValue")[i];
  let currentAmount = document.getElementsByClassName("current-amount")[i];
  addValue.classList.remove("hidden-item");
  document.getElementsByClassName("addButton")[i].classList.add("hidden-item");
  document.getElementsByClassName("minusButton")[i].classList.add("hidden-item");
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
        document.getElementsByClassName("minusButton")[i].classList.add("hidden-item");
        showListItem();
      }
    });
}

function addButton(event) {
  if (event.key === "Enter") addTask();
}
