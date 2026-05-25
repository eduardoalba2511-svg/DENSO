
const botones = document.querySelectorAll(".card button");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Aquí puedes redirigir a otra página o mostrar productos");
    });
});