let a, date, time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(time);
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
  console.log(date, time);
  document.querySelector(".timer").innerHTML = time + " <br>ON " + date;
}, 1000);
