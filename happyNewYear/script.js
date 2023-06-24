let date = new Date();
let year = date.getFullYear();

let greeting = document.getElementById("greeting");
greeting.innerHTML += `<p>May the year ${year} be filled with prosperity and success for you and your loved ones.</p>`;
