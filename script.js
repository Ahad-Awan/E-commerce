let productContainer = document.getElementById("productContainer");
productContainer.className = "flex flex-wrap justify-center gap-6 mt-10";

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$25",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$50",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$100",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$500",
  },
];

products.forEach((product) => {
  let card = document.createElement("div");
  card.className =
    "bg-white shadow-lg rounded-lg p-4 border border-gray-300 w-64 transition transform hover:scale-105";

  let img = document.createElement("img");
  img.src = product.image;
  img.className = "rounded-md mb-3 w-full h-40 object-cover";

  let title = document.createElement("h1");
  title.innerHTML = product.title;
  title.className = "text-lg font-bold text-gray-800";

  let description = document.createElement("p");
  description.innerHTML = product.description;
  description.className = "text-sm text-gray-600";

  let price = document.createElement("p");
  price.innerHTML = product.price;
  price.className = "text-base font-semibold text-gray-700";

  let btn = document.createElement("button");
  btn.innerHTML = "Add to Cart";
  btn.className =
    "bg-purple-500 text-white px-3 py-2 rounded-md mt-3 w-full hover:bg-purple-600 transition";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(btn);
  productContainer.appendChild(card);
});
