const item = document.querySelectorAll(".item");
const subtitle = document.querySelector("h2");
let currentDate = new Date();
const pstTime = currentDate.toLocaleString("en-US", {
  timeZone: "America/Los_Angeles",
});
currentDate = new Date(pstTime);
// const currentTime = new Date().getTime();
console.log(currentDate);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const newyear = new Date(2024, 0, 1, 0, 0, 0);
const newyearTime = newyear.getTime();

// remainig time info
let oneSecond = 1000;
let oneMinute = oneSecond * 60;
let oneHour = oneMinute * 60;
let oneDay = oneHour * 24;
console.log(oneDay);

// current date info
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

const showCurrentDate = () => {
  //   console.log(subtitle);
  subtitle.innerHTML = `Today is ${months[month]} ${day}, ${year}`;
};

const countdown = () => {
  const pstTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const currentTime = new Date(pstTime).getTime();
  const remainingmSecond = newyearTime - currentTime;
  const days = parseInt(remainingmSecond / oneDay);
  const hours = parseInt((remainingmSecond % oneDay) / oneHour);
  const minutes = parseInt(((remainingmSecond % oneDay) % oneHour) / oneMinute);
  const seconds = parseInt(
    (((remainingmSecond % oneDay) % oneHour) % oneMinute) / oneSecond
  );
  const countdownTime = [days, hours, minutes, seconds];
  countdownTime.map((time, idx) => {
    item[idx].innerHTML = time;
  });
};

showCurrentDate();
setInterval(countdown, 1000);
