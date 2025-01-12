
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `©${today.getFullYear()} ✨ Guillermo Aguirre ✨ Piura, Perú `;

const lastdate = document.querySelector("#lastdate")
lastdate.innerHTML =`Last modification: ${new Date(document.lastModified)}`;
// const date = new Date(document.lastModified);
// lastdate.innerHTML =`Last modification: ${new Intl.DateTimeFormat("en-UK",{dateStyleStyle: "full"}).
// format(date)}`;


