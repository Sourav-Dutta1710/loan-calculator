const list = JSON.parse(localStorage.getItem("list")) || [];
const result = document.getElementById("result");
const taskName = document.getElementById("name");
const taskAmount = document.getElementById("amount");

function showListItem(flag) {
  result.innerHTML = "";
  for (i = 0; i < list.length; i++) {
    document.getElementById(
      "result"
    ).innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-center bg-white rounded-5 p-3 mb-4 gap-3">
      <h3>Name: ${list[i].name}</h3>
      <h3>Amount:${list[i].amount}</h3>
      <div class="d-flex gap-2 ">
      <span class = "addButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
      onclick="editTask(${list[i].id})"><img src="./images/pen-solid.svg"/></button></span>
      <span class = "deleteButton"><button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center"
      onclick="deletePerson(${list[i].id})"><img src="./images/dumpster-solid.svg"/></button></span>
      </div>`;
      if(flag === 1)
        localStorage.setItem("list",JSON.stringify(list))           
  }
}

function addTask() {
  const task = taskName.value.trim();
  if (!task || !taskAmount.value) 
    alert("name or amount blank");
  else if (taskAmount.value < 1)
    alert("enter valid amount");
   else {
    const listItem = {
      id:new Date().getTime(),
      name: taskName.value,
      amount: taskAmount.value,
    };
    for (i = 0; i < list.length; i++) 
      if (list[i].name === listItem.name) deletePerson(list[i].id);
    list.push(listItem);
    showListItem(1);
  }
  if(taskAmount.value > 0)
     document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

function editTask(id) {
   for(k=0;k<list.length;k++)
    if(list[k].id === id)i=k;
  document.getElementById("name").value = list[i].name;
  document.getElementById("amount").value = list[i].amount;
  list.map((person) => {
    if(person.id === id)
      person.amount = Number(taskAmount.value);
  });
  showListItem(0);
}

function addButton(event) {
  if (event.key === "Enter") addTask();
}

function deletePerson(id){
  for(k=0;k<list.length;k++)
    if(list[k].id === id)i=k;
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