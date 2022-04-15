// const button = document.querySelector("button");
// const input = document.querySelector(".age");

// button.onclick = () => {
// let num = +input.value;
// if (num > 16 && num < 60) console.log("Welcome");
// else if (num > 60) console.log("Ты точно сюда?!");
// else console.log("Ты не пройдёшь");

// switch (num) {
// case 15:
// console.log("Годик ещё потерпи");
// break;
// case 16:
// console.log("Урааааа,можно");
// break;
// default:
// console.log("ooooookkkkk");
// }
// };//
// document.querySelector("button").onclick = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector("button").style.backgroundColor =
//     document.querySelector("#one").value;
// };
// document.querySelector("#one").oninput = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector("span").innerHTML =
//     document.querySelector("#one").value;
// };
// document.querySelector("#btn-1").onclick = () => {
//   console.log(document.querySelector("#i2").value);
//   let myCheckBox = document.querySelector("#i2");
//   if (myCheckBox.checked) {
//     console.log("Нажат");
//   } else {
//     console.log("Не нажат");
//   }
// };
// let text = document.querySelector("#two");
// console.log(text.value);
// text.value = "one";
document.querySelector("#btn-2").onclick = (event) => {
  event.preventDefault();
  let text = document.querySelector("#ti2");
  // console.log(text.value);
  // text.value = "one";
  let form = document.querySelector("form");
  console.log(form);
  console.log(form.two.value);
  console.log(form.i2.value);
};
