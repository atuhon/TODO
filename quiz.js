const li = document.querySelector("li");
const question = document.getElementById("ques");
const btn = document.querySelectorAll(".btn");
const kekka=document.getElementById("kekka");
const quiz = [
  {
    question: "日本一大きい無人島はどこ",
    ans: ["渡島大島", "横島", "釜島", "能島"],
    correct: "渡島大島",
  },
  {
    question: "沼津市は何県にある",
    ans: ["神奈川県", "静岡県", "愛知県", "三重県"],
    correct: "静岡県",
  },
  {
    question: "日本一大きい山は？",
    ans: ["富士山", "大山", "白山", "雲取山"],
correct: "富士山"
  }
];

let buttonlength = btn.length;
let currentIndex = 0;
function setUpquiz() {
  question.textContent = quiz[currentIndex].question;
  btn.forEach((btns, index) => {
    btns.textContent = quiz[currentIndex].ans[index];
    btns.addEventListener('click',answer);

  
})}
let count=0
function answer(e){
      const ans = e.target.textContent
      console.log(e.target.textContent);
      if (ans == quiz[currentIndex].correct) {
        window.alert("あたり");
        count++;
        
      } else {window.alert("かす");}

      currentIndex++;
      if(currentIndex<quiz.length){
        setUpquiz()
      }else{
        window.alert("クイズ終了");
  
        localStorage.setItem("quiz",count);
        window.location.href="end.html"//自動遷移
      }
};

setUpquiz();//初回表示











//currentIndex→クイズを回すために使用

//配列の中にオブジェクト形式
//回答をボタン形式にしたい
