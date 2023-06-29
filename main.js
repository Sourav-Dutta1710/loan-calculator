let list = [];
let flag=0;
let increase;
function add() {
  document.getElementById("result").innerHTML = "";
  let task = document.getElementById("name").value.trim();
  if(task==="") alert("Name Field Blank");
  else{
  const listitem = {
    name: document.getElementById("name").value,
    amount: document.getElementById("amount").value,
  };
  list.push(listitem);
  for (i = 0; i < list.length; i++) {
    document.getElementById("result").innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-center bg-white rounded-5 p-3 mb-4 gap-3">
        <h3>Name: ${list[i].name}</h4>
                 <h3>Amount: ${list[i].amount}</h3>
                 <button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center" onclick="increment(${i})"><i class="fa-solid fa-plus"></i></button>
                 </div>`;
  }
  document.getElementById("name").value="";
  document.getElementById("amount").value="";
}
}

function increment(i){
  document.getElementById("result").innerHTML = `<div class="d-flex gap-2"><input type="number" id="addValue" placeholder = "Amount">
  <button class="inputButton btn btn-dark text-white fw-bolder align-self-center" onclick="update(${i})">submit</button></div>`;
  increase = document.getElementById("addValue");
}

function update(i){
    list[i].amount = Number(increase.value) + Number(list[i].amount);
    document.getElementById("result").innerHTML = "";
    for (i = 0; i < list.length; i++) {
        document.getElementById("result").innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-center bg-white rounded-5 p-3 mb-4 gap-3">
        <h3>Name: ${list[i].name}</h3>
                 <h3>Amount: ${list[i].amount}</h3>
                 <button class="inputButton btn btn-dark text-white rounded-circle fw-bolder align-self-center" onclick="increment(${i})"><i class="fa-solid fa-plus"></i></button>
                 </div>`;
      }
}

function addButton(event) {
  if (event.key === "Enter") add();
}
