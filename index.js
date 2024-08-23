function expandingTheDiv(active,inactive1,inactive2){
  let totalContentDiv = document.querySelectorAll(".totalOptionCont");
  let elArr = Array.from(totalContentDiv)
  let activeEl = elArr[active].children
  let secondList = elArr[inactive1].children
  let thirdList = elArr[inactive2].children
  activeEl[0].style.display = "none"
  activeEl[1].style.display = "block"

  secondList[0].style.display = "flex"
  secondList[1].style.display = "none"

  thirdList[0].style.display = "flex"
  thirdList[1].style.display = "none"
}
let firstInput =  document.getElementById("firstInput");
let secondInput =  document.getElementById("secondInput");
let thirdInput = document.getElementById("thirdInput");

firstInput.addEventListener("change",(e) => {
   expandingTheDiv(0,1,2)
})

secondInput.addEventListener("change",(e) => {
   expandingTheDiv(1,0,2)
})

thirdInput.addEventListener("change",(e) => {
    expandingTheDiv(2,0,1)
})
