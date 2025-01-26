const btn = document.querySelector('button');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.style.background = "black";
    document.body.style.color = "white";
})