let studentName = document.getElementById("name");
let studentId = document.getElementById("id");
let studentDep = document.getElementById("dep");
let studentGpa = document.getElementById("gpa");
let addBtn = document.getElementById("btn");

addBtn.addEventListener("click", function (pera) {
  pera.preventDefault();



  if (studentName.value == "") {
    alert("Please enter student name");
  } else if (studentId.value == "") {
    alert("Please enter student id");
  } else if (studentDep.value == "") {
    alert("Please enter student dep");
  } else if (studentGpa.value == "") {
    alert("Please enter student gpa");
  } else {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = studentName.value;
    tr.appendChild(td);

    let td1 = document.createElement("td");
    td1.innerHTML = studentId.value;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = studentDep.value;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = studentGpa.value;
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
});
