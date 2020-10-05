"use strict";

const names = []; //Arrayオブジェクトnamesの初期化
const input = document.getElementById("input");

// フォーム
// const li = document.createElement("li");
// const text = document.querySelector("input");
input.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.querySelector("input");
  if (text.value != "") {
    li.textContent = text.value;
    document.querySelector("ul").appendChild(li);
    // console.log(li);
    names.push(text.value);
    console.log(names);
    text.value = "";
    text.focus();
    start.classList.remove("inactive");
    }
   
    // namesが空ならスタート押せない
    // if(1 <= names.length) {
    // start.classList.remove("inactive");
    // namesに値が入ったらスタート押せるようにする
    // } else if (0 >= names.length) {
    // start.classList.add("inactive");
    // }
    // li.classList.add('delete');
    // li.addEventListener('click', e => {
    //   if(e.target.classList.contains('delete')) {
    //     e.target.parentElement.remove();
    //   }
    // })
    // li.addEventListener("click", e => {
    //   const delKey = names.findIndex(list => list === e.target);
    //   console.log(delKey);
    // })
});

// const rourette = document.getElementById('rourette');
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const lottery = document.getElementById("lottery");
let timeoutId = undefined;

//抽選
function spin() {
  lottery.textContent = names[Math.floor(Math.random() * names.length)];
  timeoutId = setTimeout(() => {
    spin();
  }, 50);
}

start.classList.add("inactive");

start.addEventListener("click", () => {
  if (start.classList.contains("inactive")) {
    return;
  }
  spin();
  start.classList.add("inactive");
  stop.classList.remove("inactive");
});

stop.classList.add("inactive");

stop.addEventListener("click", () => {
  if (stop.classList.contains("inactive")) {
    return;
  }
  clearTimeout(timeoutId);
  start.classList.remove("inactive");
  stop.classList.add("inactive");
});

reset.addEventListener("click", () => {
  let text = document.querySelector("input");
  let lilist = document.querySelector(".panel ul");
  lottery.textContent = "";
  while (names.length > 0) {
    lilist.removeChild(lilist.lastChild);
    names.pop();
  }
  console.log(names);
  text.focus();
  start.classList.add("inactive");
});

//入力した名前の削除ヘルプミー！(直近しか消せないから選択して消せるようにしたい)
const rm = document.getElementById("rm");
rm.addEventListener("click", () => {
  let text = document.querySelector("input");
  let lilist = document.querySelector(".panel ul");
  if (names.length > 0) {
    lilist.removeChild(lilist.lastChild);
    names.pop();
  } 
  console.log(names);
  text.focus();
  if (names.length < 1) {
    start.classList.add("inactive");
  }
});


