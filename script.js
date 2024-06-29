'use strict';
const todo=document.getElementById("todo");
const table=document.querySelector("table");
const deadline=document.querySelector('input[type="date"]');
const submit=document.getElementById("submit");
const priority=document.querySelector("select")

submit.addEventListener("click",()=>{
    const item={}
    if(todo.value!=""){
        item.todo=todo.value;
    }else{
        const date=new Date();
        item.todo="ダミーデータ";
        item.deadline=date.toLocaleDateString();

        item.priority=priority.value;
        item.deadline=deadline.value;
        item.done=false;
   
    }

    item.priority=priority.value;
    item.deadline=deadline.value;
    item.done=false;
console.log(item);
//登録後
// item.todo="";
// item.priority="普";
// item.deadline="";
// item.done=false;

const tr=document.createElement("tr");
for(const prop in item){
    const td=document.createElement("td");
    if(prop=="done"){
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=item[prop];
        td.appendChild(checkbox);

    }else{
        td.textContent=item[prop];

    }
    td.textContent=item[prop];
    tr.appendChild(td);
    table.append(tr);
}



})