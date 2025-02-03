const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `©${today.getFullYear()} ✨ Guillermo Aguirre ✨ Piura, Perú `;

const lastdate = document.querySelector("#lastdate")
lastdate.innerHTML =`Last modification: ${new Date(document.lastModified)}`;

// code array named "temples" 

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	{
		templeName:"Manila Philippines",
		location:"Quezon City, Manila, Philippines",
		dedicated:"1984, September, 25",
		area: 26683,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48890.jpg",
	},
	{
		templeName:"Sydney Australia",
		location:"Carlingford, Australia",
		dedicated:"1984, September,20",
		area: 30067,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16029.jpg",
	},
	{
		templeName:"Brigham City Utah",
		location:"Brigham City, Utah, United States",
		dedicated:"2012, September,23",
		area: 36000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg",
	},
];

// const names = document.querySelector(".container");
// temples.forEach(temple => {names.innerHTML +=
// `<h3>${temple.templeName}</h3>
// <ul>
// <li>${temple.location}</li>
// <li>${temple.dedicated}</li>
// <li>${temple.area}</li>
// </ul>
// <img src="${temple.imageUrl}" alt="${temple.templeName} loading="lazy">`});
createTempleCard(temples);

const homeLink = document.querySelector(".home");
homeLink.addEventListener("click", () => {
	createTempleCard(temples);
})

const oldLink = document.querySelector(".old");
oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0,4) < 2000));
});

const newLink = document.querySelector(".new");
newLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0,4) > 2000));
});

const largeLink = document.querySelector(".large");
largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector(".small");
smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples){
	document.querySelector(".container").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".container").appendChild(card);
	});
}
  
