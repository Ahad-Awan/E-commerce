fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => products(data))
  .catch((err) => console.log(err));

function products(data) {
  let container = document.getElementById("container");
  data.map((items) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${items.title}</h3>
    <p>${items.price}</p>
    <img src="${items.image}" alt="" height='300' width='300'/>
    `;
    container.appendChild(div);
  });
}
