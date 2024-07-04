
const regi = document.getElementById("regi");

// const table = document.querySelector("table");
// const tr = document.createElement("tr");
// const select=document.createElement("select");

regi.addEventListener("click", () => {
    const tr = document.createElement("tr");
    const select=document.createElement("select");
    const table = document.querySelector("table");
    const formElements = [
        document.getElementById("name"),
        document.getElementById("productName"),
        document.getElementById("date"),
        document.getElementById("manager"),
        document.getElementById("rep"),
        document.getElementById("regi2")
    ];

    const formData = {};

    const names=document.getElementById("name")
    const data={}
    data.names=names.value;
    console.log(data);






    // 各フォームの値をformDataオブジェクトに保存
    formElements.forEach(element => {
        formData[element.id] = element.value;
    });



const optionNameList=["未設定","入荷待ち","連絡待ち","引取待ち","引取完了"];
optionNameList.forEach((data,index)=>{
    const options=document.createElement("option");
    options.text=optionNameList[index];
    console.log(options);
    select.appendChild(options)
})


    

    // テーブルに行を追加
    for (const key in formData) {
        if(formData.name!=""&&formData.productName!=""&&formData.date!=""&&formData.manager!=""){
        const td = document.createElement("td");
        td.textContent = formData[key];
        tr.appendChild(td);    
        td.appendChild(select);
        }else{
            window.alert("備考欄以外のすべての項目を入力してください");
            return ;
        }

    }
    console.log(select.value);
    // if(select.value=="引取完了"){
    //     table.style.backgroundColor="gray"
    // }
    

    table.appendChild(tr);

    // 各フォームの値を空にする
    formElements.forEach(element => {
        element.value = "";
    });

    select.addEventListener("change",()=>{
    if(select.value=="引取完了"){
    tr.style.backgroundColor="gray"
    }else{
                tr.style.backgroundColor=""
        
    }

    })
    const nowDate=new Date
    const localDate=nowDate.toLocaleDateString();
    const localDate2=nowDate.toLocaleDateString(formData);
    console.log(localDate)
    console.log(localDate2)
    if(localDate>formData.date){
            tr.style.backgroundColor="red"
    }
    
    



});
// const isSelect=()=>{
//     console.log(select.value)

// }
// isSelect()

//課題
//引取完了にした場合はグレーアウトにしたい
//デザイン


