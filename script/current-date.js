const currentDate = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dayName = days[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = `${dayName}, ${monthName} - ${day} - ${year}`;

document.getElementById("current-date").textContent = formattedDate;