let productContainer = document.getElementById("productContainer");
const products = [
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$20",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est.",
    price: "$25",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est.",
    price: "$50",
  },
];

products.forEach((product) => {
  let card = document.createElement("div");
  card.className =
    "bg-white shadow-lg rounded-lg p-5 w-80 border border-gray-300";

  let container = document.createElement("div");
  container.className = "flex justify-center mt-20 gap-8";
  productContainer.appendChild(container);

  let img = document.createElement("img");
  img.src = product.image;
  img.className = "rounded-md mb-3";
  let title = document.createElement("h1");
  title.innerHTML = product.title;
  title.className = "text-xl font-bold text-gray-800";
  let description = document.createElement("p");
  description.innerHTML = product.description;
  description.className = "text-base text-gray-600";
  let price = document.createElement("p");
  price.innerHTML = product.price;
  price.className = "text-base text-gray-600";
  let btn = document.createElement("button");
  btn.innerHTML = "Add to Cart";
  btn.className =
    "bg-purple-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-purple-600 transition";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(btn);
  container.appendChild(card);
});
