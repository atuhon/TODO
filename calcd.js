

const btns=document.getElementById("btns");
const result=document.getElementById("result");
const reset=document.getElementById("reset");
for(let i=0;i<=9;i++){
    const btn=document.createElement("button");
    btn.textContent=i;
    btn.value=i

    btn.addEventListener("click",()=>{
        result.textContent+=btn.value
    })
    btns.appendChild(btn)
}

const item=["*","+","-","/"];
for (let x=0;x<=item.length;x++){
    const btn2=document.createElement("button");
    btn2.textContent=item[x];
    btn2.value=item[x];//取得される値の設定
    btn2.addEventListener("click",()=>{
        result.textContent+=btn2.value;
    })
    btns.appendChild(btn2);
}
const equalbtn=document.createElement("button");
equalbtn.textContent="=";

equalbtn.addEventListener("click",()=>{
    result.textContent=eval(result.textContent)
    
})
btns.appendChild(equalbtn);


const resetBtn=document.createElement("button");
resetBtn.textContent="C";
resetBtn.addEventListener("click",()=>{
    result.textContent=result.value="";
})
btns.appendChild(resetBtn);















