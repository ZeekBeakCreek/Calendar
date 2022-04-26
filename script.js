const date = new Date();
let h = date.getHours();
let years = date.getFullYear();
let mm = date.getMinutes();
let m = date.getMonth();
let days = date.getDate();
let day = date.getDay();
let s = date.getSeconds();
let endOfDay;
let session = "AM";
console.log(date);

const monthNames = [
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

const months = document.querySelector('#month-name')
months.innerHTML = monthNames[m]

// prev month
const prev_btn = document.querySelector('.prevMonth');

prev_btn.addEventListener('click', function() {
    months.innerHTML = monthNames[m - 1]
    // calendar()
})

// next month
const next_btn = document.querySelector('.nextMonth')

next_btn.addEventListener('click', function() {
    months.innerHTML = monthNames[m + 1]
    // calendar()
})

