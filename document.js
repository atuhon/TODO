document.addEventListener("DOMContentLoaded", () => {
    const fadein = document.querySelectorAll(".fadein");
      console.log(fadein)
  
    if (fadein) { // fadeinが存在するかを確認する
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } 
        });
      });
  
      fadein.forEach((ele)=>{
                observer.observe(ele)
      })
  ; // fadein要素をIntersectionObserverに登録
    } else {
      console.error("Element with class 'fadein' not found.");
    }
  });