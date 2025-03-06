let productContainer = document.getElementById("productContainer");
let viewBtn = document.getElementById("viewCart");
productContainer.className = "flex flex-wrap justify-center gap-6 mt-10";
let cartCount = document.getElementById("cartCount");
let ViewArr = JSON.parse(localStorage.getItem("cart")) || [];
let count = ViewArr.length;
cartCount.innerHTML = count;

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
    let alreadyInCart = ViewArr.find((item) => item.title === product.title);
    if (!alreadyInCart) {
      ViewArr.push(product);
      localStorage.setItem("cart", JSON.stringify(ViewArr));
      count = ViewArr.length;
      localStorage.setItem("cartCount", count);
      cartCount.innerHTML = count;
    } else {
      alert("Already in Cart");
    }
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(btn);
  productContainer.appendChild(card);
});

viewBtn.addEventListener("click", () => {
  let existingPopup = document.getElementById("cartPopup");
  if (existingPopup) {
    existingPopup.remove();
  }

  let popup = document.createElement("div");
  popup.id = "cartPopup";
  popup.className =
    "fixed inset-0 bg-black/50 flex justify-center items-center p-4";

  let popupBox = document.createElement("div");
  popupBox.className =
    "bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-2/3 max-h-[80vh] overflow-y-auto border border-gray-300";

  // Cart Header
  let cartHeader = document.createElement("div");
  cartHeader.className = "flex justify-between items-center mb-4 border-b pb-3";

  let heading = document.createElement("h2");
  heading.innerText = "Your Cart";
  heading.className = "text-2xl font-bold text-gray-800";

  let closeBtn = document.createElement("button");
  closeBtn.innerText = "✕";
  closeBtn.className =
    "text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition";
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });

  cartHeader.appendChild(heading);
  cartHeader.appendChild(closeBtn);
  popupBox.appendChild(cartHeader);

  let cartItems = document.createElement("table");
  cartItems.className =
    "w-full border-collapse bg-white text-gray-700 border border-gray-300";

  let thead = document.createElement("thead");
  thead.className = "bg-gray-200";
  thead.innerHTML = `
    <tr class="text-left border-b border-gray-300">
      <th class="p-3 border-r">Image</th>
      <th class="p-3 border-r">Title</th>
      <th class="p-3 border-r">Description</th>
      <th class="p-3 border-r">Price</th>
      <th class="p-3 border-r text-center">Quantity</th>
      <th class="p-3">Action</th>
    </tr>
  `;
  cartItems.appendChild(thead);

  let tbody = document.createElement("tbody");

  ViewArr.forEach((item) => {
    let row = document.createElement("tr");
    row.className = "border-t border-gray-300";

    let imgCell = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.image;
    img.className = "w-16 h-16 object-cover rounded";
    imgCell.className = "p-3 border-r";
    imgCell.appendChild(img);

    let titleCell = document.createElement("td");
    titleCell.innerText = item.title;
    titleCell.className = "p-3 font-medium border-r";

    let descCell = document.createElement("td");
    descCell.innerText = item.description;
    descCell.className = "p-3 text-sm border-r";

    let priceCell = document.createElement("td");
    priceCell.innerText = `${item.price}`;
    priceCell.className = "p-3 font-semibold border-r";

    let quantityCell = document.createElement("td");
    quantityCell.className = "p-3 border-r text-center";

    let quantityWrapper = document.createElement("div");
    quantityWrapper.className = "flex items-center justify-center space-x-2";

    let minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    minusBtn.className =
      "bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400";

    let quantity = document.createElement("span");
    quantity.innerText = item.quantity || 1;
    quantity.className = "text-lg px-2 font-semibold";

    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.className =
      "bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400";

    plusBtn.addEventListener("click", () => {
      item.quantity = (item.quantity || 1) + 1;
      quantity.innerText = item.quantity;
    });

    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantity.innerText = item.quantity;
      } else {
        ViewArr = ViewArr.filter((cartItem) => cartItem.title !== item.title);
        localStorage.setItem("cart", JSON.stringify(ViewArr));
        count = ViewArr.length;
        localStorage.setItem("cartCount", count);
        cartCount.innerHTML = count;
        row.remove();
      }
    });

    quantityWrapper.appendChild(minusBtn);
    quantityWrapper.appendChild(quantity);
    quantityWrapper.appendChild(plusBtn);
    quantityCell.appendChild(quantityWrapper);

    let removeCell = document.createElement("td");
    removeCell.className = "p-3 text-center";
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.className =
      "bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600";
    removeBtn.addEventListener("click", () => {
      ViewArr = ViewArr.filter((cartItem) => cartItem.title !== item.title);
      localStorage.setItem("cart", JSON.stringify(ViewArr));
      count = ViewArr.length;
      localStorage.setItem("cartCount", count);
      cartCount.innerHTML = count;
      row.remove();
    });
    removeCell.appendChild(removeBtn);

    row.appendChild(imgCell);
    row.appendChild(titleCell);
    row.appendChild(descCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(removeCell);

    tbody.appendChild(row);
  });

  cartItems.appendChild(tbody);
  popupBox.appendChild(cartItems);
  popup.appendChild(popupBox);
  document.body.appendChild(popup);
});
