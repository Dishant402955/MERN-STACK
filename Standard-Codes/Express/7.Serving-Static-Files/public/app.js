const btn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
    document.querySelector("p").classList.toggle("dark");
    document.querySelector("h1").classList.toggle("dark");
    btn.classList.toggle("dark");
    document.body.classList.toggle("dark");
});