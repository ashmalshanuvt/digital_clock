// console.log(time.getMinutes());
// console.log(time.getSeconds());
let hourspan = document.querySelector("#hour");
let minutspan = document.querySelector("#minut");
let secondsspan = document.querySelector("#seconds");
let ampm=document.querySelector('#ampm')

function timeSection() {
  let time = new Date();
  let hour = time.getHours();
  let minut = time.getMinutes();
  let seconds = time.getSeconds();

  if (hour > 12) {
    hourspan.innerHTML = zero(hour - 12);
  } else if (hour == 0) {
    hourspan.innerHTML = 12;
  } else {
    hourspan.innerHTML = zero(hour);
  }

  minutspan.innerHTML = zero(minut);
  secondsspan.innerHTML = zero(seconds);

  if(hour>=12){
    ampm.innerHTML='PM'
  }
  else{
    ampm.innerHTML='AM'
  }
}

setInterval(timeSection, 500);
// timeSection()

// setInterval(()=>{
//     console.log(
//         'hello world'
//     );
// },1000)

function zero(value) {
  console.log(typeof value);
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}
