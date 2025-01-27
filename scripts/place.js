const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `©${today.getFullYear()} ✨ Guillermo Aguirre ✨ Piura, Perú `;

const lastdate = document.querySelector("#lastdate")
lastdate.innerHTML =`Last modification: ${new Date(document.lastModified)}`;


const temperature = 30;
const wind_speed = 10;
let windChill;

function calculateWindChill(Temperature, WindSpeed) {

    wind_chill= 13.12 + (0.6215*Temperature) - (11.37*(WindSpeed**0.16)) + (0.3965*Temperature*WindSpeed**0.16)
    return wind_chill
    
}

if(temperature <= 10 && wind_speed >4.8){
    windChill = calculateWindChill(temperature,wind_speed)
}
else{
    windChill="N/A"
}
  
const data = [
    ["Temperature:", `${temperature}ºC `],
    ["Coditions", "Mostly Cloudy"],
    ["Wind",`${wind_speed} km/h`],
    ["Wind_Chill", `${windChill}ºC `],
]
    
const listContainer = document.getElementById("list-container");
data.forEach(([clave, valor]) => {const listItem = document.createElement("li"); // Crear el elemento <li>
listItem.textContent = `${clave}: ${valor}`; // Clave y valor concatenados
listContainer.appendChild(listItem); // Agregar el <li> al contenedor
});