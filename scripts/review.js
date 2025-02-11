const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `©${today.getFullYear()} ✨ Guillermo Aguirre ✨ Piura, Perú `;

const lastdate = document.querySelector("#lastdate")
lastdate.innerHTML =`Last modification: ${new Date(document.lastModified)}`;




document.addEventListener("DOMContentLoaded", () => {
    const reviewsDisplay = document.querySelector("#counter");
  
    if (!reviewsDisplay) return;
  
    let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
  
    if (numReviews === 0){
      reviewsDisplay.textContent = `This is your first review!`;
    }
    else{
      reviewsDisplay.textContent = `${numReviews}`;
    }
  
    numReviews++;
  
    localStorage.setItem("numReviews", numReviews);
  });