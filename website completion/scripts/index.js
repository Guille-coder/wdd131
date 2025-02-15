
document.addEventListener("DOMContentLoaded", 
    function() {
        const menu= document.querySelector(".navbutton");
        const navLinks = document.querySelector(".links");
        menu.addEventListener("click",function(){
            navLinks.classList.toggle("active");
        });


        const formulario = document.getElementById("format");
        const inputEmail = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");
        const botonBorrar = document.getElementById("borrar");

        const emailGuardado = localStorage.getItem("email");

        if (emailGuardado) {
            mensaje.textContent = `Thanks for subscribing, ${emailGuardado}!`;
            mensaje.style.display = "block";
            formulario.classList.add("hidden");
            botonBorrar.classList.remove("hidden");
        }
        
        formulario.addEventListener("submit", function(event) {       
            event.preventDefault(); // Evita que la página se recargue
            const email = inputEmail.value;
            localStorage.setItem("email", email); // Guarda en Local Storage
            mensaje.textContent = `Thanks for subscribing, ${email}!`;
            mensaje.style.display = "block";
            formulario.classList.add("hidden");
            botonBorrar.classList.remove("hidden");
        });

        botonBorrar.addEventListener("click", function() {
            localStorage.removeItem("email"); // Elimina el correo guardado
            mensaje.style.display = "none";
            formulario.classList.remove("hidden");
            botonBorrar.classList.add("hidden");
        });

    

    

    }
);
// ducument.addEventListener("DOMContentLoaded",
//     function(){

        

//     }
// );
