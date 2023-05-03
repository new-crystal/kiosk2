"use strict";

class Page {
  order = 1;

  //페이지
  homePage = document.querySelector(".homepage");
  secondPage = document.querySelector(".second-page");
  thirdPage = document.querySelector(".third-page");
  fourthPage = document.querySelector(".fourth-page");
  iframePage = document.querySelector(".iframe-page");

  //애니메이션 요소
  text1 = document.querySelector(".first-animation-down");
  btnBox = document.querySelector(".btn-box");
  text2 = document.querySelector(".text-1");
  text3 = document.querySelector(".text-2");
  img1 = document.querySelector(".third-1");
  img2 = document.querySelector(".third-2");
  img3 = document.querySelector(".fourth-1");
  img4 = document.querySelector(".fourth-2");
  img5 = document.querySelector(".fourth-3");
  fourthImg = document.querySelector(".fourth-img-box");
  bubbles = document.querySelectorAll(".bubble");

  //첫번째 페이지 작동 함수
  gofirst() {
    //다른 페이지 숨기기
    this.secondPage.style.display = "none"
    this.thirdPage.style.display = "none"
    this.fourthPage.style.display = "none"

    // 애니메이션 초기화
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";

    //페이지 보이기
    this.homePage.style.display = ""
    

    //페이지 애니메이션
    this.bubbles.forEach((bubble) => {
      bubble.style.display = "";
    });
    this.text1.style.animation = `fadeInDown 1s`;
  }

  //두번째 페이지 작동 함수
  goSecond() {
    //다른 페이지 숨기기
    this.homePage.style.display = "none"
    this.thirdPage.style.display = "none"
    this.fourthPage.style.display = "none"

    //전 페이지 애니메이션 초기화
    this.text1.style.animation = "";
    this.bubbles.forEach((bubble) => {
      bubble.style.display = "none";
    });

    //페이지 보이기
    this.secondPage.style.display = ""

    //페이지 애니메이션
    this.text2.style.animation = `fadeInleft 1s`;
    this.text3.style.animation = `fadeInleft 1.5s`;
  }

  //세번째 페이지 작동 함수
  goThird() {
    //다른 페이지 숨기기
    this.homePage.style.display = "none"
    this.secondPage.style.display = "none"
    this.fourthPage.style.display = "none"

    //전 페이지 애니메이션 초기화
    this.text2.style.animation = "";
    this.text3.style.animation = "";

    //페이지 보이기
    this.thirdPage.style.display = ""

    //페이지 애니메이션
    this.img1.style.animation = `fadeInRight 1s`;
    this.img2.style.animation = `fadeInRight 2s`;
  }

  //네번째 페이지 작동 함수
  gofourth() {
    //다른 페이지 숨기기
    this.homePage.style.display = "none"
    this.secondPage.style.display = "none"
    this.thirdPage.style.display = "none"

    //전 페이지 애니메이션 초기화
    this.img1.style.animation = "";
    this.img2.style.animation = "";

    //페이지 보이기
    this.fourthPage.style.display = ""

    //페이지 애니메이션
    this.img3.style.animation = `fadeInUp 1s`;
    this.img4.style.animation = `fadeInUp 2s`;
    this.img5.style.animation = `fadeInUp 3s`;
  }

  //Iframe 보여주는 함수
  showIframe() {
    //비눗방울
    this.bubbles.forEach((bubble) => {
      bubble.style.display = "";
    });
    //모든 애니메이션 초기화
    this.text1.style.animation = "";
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";

    //모든 페이지 숨기기
    this.homePage.style.display = "none"
    this.secondPage.style.display = "none"
    this.thirdPage.style.display = "none"
    this.fourthPage.style.display = "none"
  }
}

class Iframe {

   bubbles = document.querySelectorAll(".bubble");
  
  //회원가입 상태 = false
  //true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
  signUp = false;

  //페이지 전체
  container = document.querySelector(".container");

  //iframe
  iframeBox = document.querySelector(".iframe-page");
  btnBox = document.querySelector(".btn-box");
  iframeContent = null;

  signUpBtn = document.querySelector(".sign-up");
  closeBtn = document.querySelector(".close-btn");

  bubbleIntervalId = "";

  close() {
    this.signUp = false;
    this.iframeContent = null;
    this.iframeBox.classList.add("iframe-page-hidden");
    this.container.style.backgroundColor = "rgba(0,0,0,0)";
    this.btnBox.style.filter = "brightness(100%)";
    this.bubbleInterval()
  }

  create() {
    this.signUp = true;
    this.iframeBox.classList.remove("iframe-page-hidden");
    this.iframeContent = document.createElement("iframe");
    this.iframeContent.classList.add("iframe");
    this.iframeContent.src =
      "https://organonpro.com/kr-kr/member-option/?screenToRender=traditionalRegistration";
    this.iframeBox.appendChild(this.iframeContent);

    this.container.style.backgroundColor = "rgba(0,0,0,0.3)";
    this.btnBox.style.filter = "brightness(80%)";
    this.bubbleInterval()
  }

    //버블 반복시키는 함수
    bubbleInterval(){
      if(this.signUp === true){
         this.bubbleIntervalId = setInterval(this.resetBubble, 10000)
      }else if(this.signUp === false){
          clearInterval(this.bubbleIntervalId)
          this.bubbles.forEach((bubble) => {
            bubble.style.display = "none";
          });
      }
    }
    
    //bubble 지우고 생성하기
    resetBubble(){
      this.bubbles = document.querySelectorAll(".bubble");
       //비눗방울
       this.bubbles.forEach((bubble) => {
        bubble.style.display = "none";
      });
      this.bubbles.forEach((bubble) => {
        bubble.style.display = "";
      });
    }
}

const page = new Page();
const iframe = new Iframe();

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//button
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

// import background from "../sound/bg.mp3";
// const backgroundSong = new Audio("../sound/bg.mp3")
//배경음악 디버깅 함수
window.onload = function () {
  const bgSound = new Audio("../src/sound/bg.mp3");
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => {
      let AudioContext = window.AudioContext;
      let audioContext = new AudioContext();
      playSound(bgSound);
    })
    
};


function playSound(sound) {
 sound.play();
  sound.loop = true;
}

// //마우스 우클릭 방지 이벤트
document.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
  },
  false
);

//닫기 버튼 터치 이벤트 
closeBtn.addEventListener("touchstart", (e) => {
  e.preventDefault()
  const bubbles = document.querySelectorAll(".bubble");
  //중복터치 방지
  let closeTouch = true;
  if (closeTouch) {
    closeTouch = false;
    const closeTime = setTimeout(() => {
      closeTouch = true;
    }, 100);
    clearTimeout(closeTime);
    //signUp을 false로 바꾸고 버블을 없애고 iframe을 닫음
    iframe.signUp = false;
    bubbles.forEach((bubble) => {
      bubble.style.display = "none";
    });
    iframe.close();
    interval();
    startInterval();
  }
});
//닫기 버튼 클릭 이벤트
closeBtn.addEventListener("mouseup", () => {
  const bubbles = document.querySelectorAll(".bubble");
    //signUp을 false로 바꾸고 버블을 없애고 iframe을 닫음
    iframe.signUp = false;
    bubbles.forEach((bubble) => {
      bubble.style.display = "none";
    });
    iframe.close();
    interval();
    startInterval();
  
});
//처음으로 버튼 터치 이벤트
home.addEventListener("touchstart", (e) => {
  e.preventDefault()
  //중복터치 방지
  let homeTouch = true;
  if (homeTouch && !iframe.signUp) {
    homeTouch = false;
    const homeTime = setTimeout(() => {
      homeTouch = true;
    }, 100);
    clearTimeout(homeTime);
    btnActive(home);
    //interval을 지우고 순서를 1로 변경함
    clearInterval(intervalId);
    page.order = 1;
    startInterval();
    interval();
  }
});

//처음으로 버튼 클릭 이벤트
home.addEventListener("mouseup", ()=>{
  if (!iframe.signUp) {
    btnActive(home);
    //interval을 지우고 순서를 1로 변경함
    clearInterval(intervalId);
    page.order = 1;
    startInterval();
    interval();
  }
})

//회원가입 이벤트
class SignUpEvent {
  bubbles = document.querySelectorAll(".bubble");
  signUpBtn = document.querySelector(".sign-up");

  register(){
    const that = this;
    this.signUpBtn.addEventListener("click", function(e){
      that.handleEvent(e)
    })
    this.signUpBtn.addEventListener("touchstart", function(e){
      that.handleEvent(e)
    })
  }

  handleEvent(e) {
    e.preventDefault()
  switch (e.type){
    case "click":
    case "touchstart": 
    let signupTouch = true;
    if (signupTouch) {
      signupTouch = false;
      const signUpTime = setTimeout(() => {
        signupTouch = true;
      }, 100);
      clearTimeout(signUpTime);
      btnActive(signUpBtn);
      //signUp이 true이면 iframe을 닫음
      if (iframe.signUp) {
        iframe.close();
        this.bubbles.forEach((bubble) => {
          bubble.style.display = "none";
        });
        interval();
        startInterval();
        //signUp이 false이면 ifrmae을 생성함
      } else {
        clearInterval(intervalId);
        page.showIframe();
        iframe.create();
      }
    }
    break;

    default: 
        break;
}
  }
}

const sign = new SignUpEvent()
sign.register();

//버튼 눌렀을 때 css 추가하고 제거하는 함수
function btnActive(button) {
  button.classList.add("button-active");
  setTimeout(() => {
    button.classList.remove("button-active");
  }, 500);
}

//interval 반복 될 함수
//order을 받아 순서대로 진행
function startInterval() {
  switch (page.order) {
    case 1:
      page.order++;
      page.gofirst();
      break;
    case 2:
      page.order++;
      page.goSecond();
      break;
    case 3:
      page.order++;
      page.goThird();
      break;
    case 4:
      page.order = 1;
      page.gofourth();
      break;
  }
}

//반복시키는 함수
function interval() {
  intervalId = setInterval(startInterval, 7000);
}

startInterval();
interval();
