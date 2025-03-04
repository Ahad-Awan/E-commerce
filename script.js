let productContainer = document.getElementById("productContainer");
let viewBtn = document.getElementById("viewCart");
productContainer.className = "flex flex-wrap justify-center gap-6 mt-10";
let ViewArr = [];

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
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$25",
  },
  {
    image:
      "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$50",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    title: "Product 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$100",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
    title: "Product 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$500",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$20",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    title: "Product 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$25",
  },
  {
    image:
      "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
    title: "Product 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$50",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    title: "Product 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$100",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
    title: "Product 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$500",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$20",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    title: "Product 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$25",
  },
  {
    image:
      "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
    title: "Product 13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$50",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    title: "Product 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$100",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
    title: "Product 15",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$500",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "Product 16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$20",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    title: "Product 17",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$25",
  },
  {
    image:
      "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
    title: "Product 18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$50",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    title: "Product 19",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
    price: "$100",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
    title: "Product 20",
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

  btn.addEventListener("click", () => {
    ViewArr.push(product);

    console.log(ViewArr);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(btn);
  productContainer.appendChild(card);
});

viewBtn.addEventListener("click", () => {
  console.log("View btn click");
});
