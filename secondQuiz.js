const question=document.getElementById("question");
const choice=document.getElementById("choice");
const disc=document.getElementById("disc");

const quiz=[
    {
        question:"野間灯台のある県は？",
        ans:[
            "愛知県",
            "静岡県",
            "岐阜県",
            "三重県"
        ],
        correct:"愛知県",
        discription:"愛知の中でも有名な観光地、行きたい"
    },
    {
        question:"大久野島は何市にある？",
        ans:[
            "竹原市",
            "呉市",
            "三原市",
            "尾道市"
        ],
        correct:"竹原市",
        discription:"忠海港から船で行けます"
    },
    {
        question:"蒲郡市内にある温泉地は？",
        ans:[
            "西浦温泉",
            "内海温泉",
            "吉良温泉",
            "湯里温泉"
        ],
        correct:"西浦温泉",
        discription:"廃墟が多いが景色は絶景"
    },    
    {
        question:"伊豆高原の地を作ったとされる山は？",
        ans:[
            "天城山",
            "高根山",
            "大室山",
            "寝姿山"
        ],
        correct:"大室山",
        discription:"スコリア丘、火口周辺は歩くことができる"
    }
]

let quizIndex=0;
function setquiz(){
const sets=question.textContent=quiz[quizIndex].question
choice.innerHTML = "";//選択肢をクリア
// question.appendChild(sets);

quiz.forEach((btn,index)=> {
    const createChoie=document.createElement("button");
createChoie.textContent=quiz[quizIndex].ans[index];
choice.appendChild(createChoie);
createChoie.addEventListener("click",answer)

});

}
function answer(e){
  const ans=e.target.textContent
    if(ans==quiz[quizIndex].correct){
        window.alert(`正解\n${quiz[quizIndex].discription}`)
       

        
    }else{
        window.alert("不正解");
        console.log(ans);
        console.log(quiz[quizIndex].correct)
    }
    quizIndex++

if(quizIndex<quiz.length){
setquiz()

}else{
    window.alert("終了");
    window.location.href="./secondEnd.html"
}
}
setquiz()