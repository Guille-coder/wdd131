document.addEventListener("DOMContentLoaded", function () {
	const menu= document.querySelector(".navbutton");
        const navLinks = document.querySelector(".links");
        menu.addEventListener("click",function(){
            navLinks.classList.toggle("active");
    });


    const searchBox = document.getElementById("search-box");
    const placesList = document.getElementById("places-list");
    const placeInfo = document.getElementById("place-info");
    const placeName = document.getElementById("place-name");
    const placeDescription = document.getElementById("place-description");
    const placePrice = document.getElementById("place-price");
    const placeDuration = document.getElementById("place-duration");

    

    const places = [
        {
			name: "Palawan",
			description: "Paradise beaches and crystal-clear lagoons.",
			price: "$150",
			duration: "5 hours",
			image: "images/palawan.webp"
		},
        {
			name: "Boracay",
			description: "Famous for its white sand and turquoise waters.",
			price: "$100",
			duration: "4 hours",
			image: "images/boracay.webp"
		},
        {
			name: "Chocolate Hills",
			description: "Cone-shaped hills in Bohol.",
			price: "$80",
			duration: "3 hours", 
			image: "images/chocolatehills.webp"
		},
        {
			name: "Mayon Volcano",
			description: "A perfect cone-shaped volcano.",
			price: "$120",
			duration: "6 hours",
			image: "images/mayonvolcano.webp"
		},
        { 
			name: "Banaue Rice Terraces", 
			description: "2,000-year-old rice terraces.", 
			price: "$90", 
			duration: "5 hours", 
			image: "images/banaue.webp" 
		},
        { 
			name: "Siargao", 
			description: "The surfing capital of the Philippines.", 
			price: "$130", 
			duration: "4 hours", 
			image: "images/siargo.webp" 
		},
        { 
			name: "Cebu", 
			description: "History, beaches, and whale shark diving.", 
			price: "$110", 
			duration: "5 hours", 
			image:"images/cebu.webp" 
		},
        { 
			name: "Vigan", 
			description: "Colonial town with cobblestone streets.", 
			price: "$70", 
			duration: "3 hours", 
			image: "images/vigan.webp" 
		}
    ];

    function loadPlaces() {
        placesList.innerHTML = ""; 
        places.forEach((place, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = place.name;
            listItem.setAttribute("data-index", index);
            
            listItem.addEventListener("click", function () {
                showPlaceInfo(index);
            });

            placesList.appendChild(listItem);
        });
    }

    function showPlaceInfo(index) {
        const place = places[index];

        if (!place) return; 
        placeName.textContent = place.name;
        placeDescription.textContent = place.description;
        placePrice.textContent = place.price;
        placeDuration.textContent = place.duration;

        document.querySelector("#place-image").innerHTML = "";
        let img =document.createElement("img");
        img.setAttribute("src", place.image);
        img.setAttribute("alt", `${place.name} Temple`);
		img.setAttribute("loading", "lazy");
        placeInfo.appendChild(img);

        placeInfo.style.display = "block";
    }

    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();
        let filteredPlaces = places.filter(place => place.name.toLowerCase().includes(filter));

        placesList.innerHTML = ""; 

        filteredPlaces.forEach(place => {
            let listItem = document.createElement("li");
            listItem.textContent = place.name;
            listItem.addEventListener("click", function () {
                showPlaceInfo(places.indexOf(place));
            });
            placesList.appendChild(listItem);
        });
    });

    loadPlaces(); 
});