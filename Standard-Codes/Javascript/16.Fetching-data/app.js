//--------------------------------------------------------------------------------------

// const result = document.querySelector(".results");

// async function renderData() {
//     try {
//         const response = await fetch("sample.txt");
//         if (!(response.ok)) throw Error(response.statusText);
//         const data = await response.text();
//         result.textContent = data;
//     } catch (error) {
//         console.log(`Error : ${error}`);
//     }
// }

// renderData();

//--------------------------------------------------------------------------------------

// const result = document.querySelector(".results");

// async function renderData() {
//     try {
//         const response = await fetch("data.json");
//         if ((!response.ok)) throw Error(response.statusText);
//         const data = await response.json();
//         result.textContent = data.name;
//     } catch (error) {
//         console.log(`Error : ${error}`);
//     }
// }

// renderData();

//--------------------------------------------------------------------------------------

// const title = document.querySelector(".title");
// const id = document.querySelector(".id");

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//         if (!res.ok) new Error(res.statusText);
//         return res.json();
//     })
//     .then((data) => {
//         title.innerHTML = data.title;
//         id.innerHTML = data.id;
//     })
//     .catch((err) => console.log(err));   
// }

//--------------------------------------------------------------------------------------