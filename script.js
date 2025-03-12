let productContainer = document.getElementById("productContainer");
productContainer.className = "flex flex-wrap justify-center gap-6 mt-10";
let viewBtn = document.getElementById("viewCart");
let wishListBtn = document.getElementById("wishList");
let wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
let cartCount = document.getElementById("cartCount");
let ViewArr = JSON.parse(localStorage.getItem("cart")) || [];
let count = ViewArr.length;
cartCount.innerHTML = count;

// const products = [
//   {
//     image:
//       "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
//     title: "Product 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "20",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
//     title: "Product 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "25",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
//     title: "Product 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "50",
//     quantity: 1,
//   },
//   {
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
//     title: "Product 4",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "100",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
//     title: "Product 5",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "500",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
//     title: "Product 6",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "70",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
//     title: "Product 7",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "120",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
//     title: "Product 8",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "50",
//     quantity: 1,
//   },
//   {
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
//     title: "Product 9",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "400",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
//     title: "Product 10",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "500",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
//     title: "Product 11",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "220",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
//     title: "Product 12",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "325",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
//     title: "Product 13",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "450",
//     quantity: 1,
//   },
//   {
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
//     title: "Product 14",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "100",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
//     title: "Product 15",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "600",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
//     title: "Product 16",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "200",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
//     title: "Product 17",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "25",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
//     title: "Product 18",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "50",
//     quantity: 1,
//   },
//   {
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
//     title: "Product 19",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "100",
//     quantity: 1,
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
//     title: "Product 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
//     price: "700",
//     quantity: 1,
//   },
// ];

// ✅ Fetch Data from API

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => renderProducts(data))
  .catch((err) => console.log("Error fetching data:", err));

function renderProducts(products) {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    let card = document.createElement("div");
    card.className =
      "bg-white shadow-lg rounded-lg p-4 border border-gray-300 w-full max-w-xs min-h-[200px] flex flex-col justify-between transition transform hover:scale-105 hover:shadow-xl";

    let img = document.createElement("img");
    img.src = product.image;
    img.className = "rounded-t-lg w-full h-auto aspect-[4/3] object-cover";

    let title = document.createElement("h1");
    title.innerHTML = product.title;
    title.className = "text-lg font-bold text-gray-800";

    let description = document.createElement("p");
    description.innerHTML = product.description;
    description.className = "text-sm text-gray-600";

    let price = document.createElement("p");
    price.innerHTML = `$${product.price}`;
    price.className = "text-base font-semibold text-gray-700";

    let addToWishlist = document.createElement("button");
    addToWishlist.innerHTML = "Add to WishList";
    addToWishlist.className =
      "bg-red-500 text-white px-3 py-2 rounded-md mt-3 w-full hover:bg-red-600 transition";

    addToWishlist.addEventListener("click", () => {
      let alreadyInWishlist = wishlistArr.find(
        (item) => item.id === product.id
      );

      if (!alreadyInWishlist) {
        wishlistArr.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        alert("Product added to wishlist!");
      } else {
        alert("This product is already in your wishlist!");
      }
    });

    let btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";
    btn.className =
      "bg-green-500 text-white px-3 py-2 rounded-md mt-3 w-full hover:bg-green-600 transition";

    btn.addEventListener("click", () => {
      let alreadyInCart = ViewArr.find((item) => item.id === product.id);
      if (!alreadyInCart) {
        product.quantity = 1;
        ViewArr.push(product);
      } else {
        alreadyInCart.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(ViewArr));
      count = ViewArr.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem("cartCount", count);
      cartCount.innerHTML = count;
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(addToWishlist);
    card.appendChild(btn);
    productContainer.appendChild(card);
  });
}

wishListBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let backToHomeContainer = document.createElement("div");
  backToHomeContainer.className = "flex justify-center w-full mb-5";

  let backToHomeBtn = document.createElement("button");
  backToHomeBtn.innerHTML = "Back to Home";
  backToHomeBtn.className =
    "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition";

  backToHomeBtn.addEventListener("click", () => {
    location.reload();
  });

  backToHomeContainer.appendChild(backToHomeBtn);
  productContainer.appendChild(backToHomeContainer);

  if (wishlistArr.length === 0) {
    let emptyMessage = document.createElement("p");
    emptyMessage.innerHTML = "Your wishlist is empty!";
    emptyMessage.className =
      "text-xl text-gray-600 font-semibold mt-5 text-center";
    productContainer.appendChild(emptyMessage);
  } else {
    wishlistArr.map((product, index) => {
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
      price.innerHTML = `$${product.price}`;
      price.className = "text-base font-semibold text-gray-700";

      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = "Remove from Wishlist";
      removeBtn.className =
        "bg-red-500 text-white px-3 py-2 rounded-md mt-3 w-full hover:bg-red-600 transition";

      removeBtn.addEventListener("click", () => {
        wishlistArr.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        wishListBtn.click();
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(price);
      card.appendChild(removeBtn);
      productContainer.appendChild(card);
    });
  }
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
    "bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full max-h-[100vh] overflow-y-auto border border-gray-300 flex flex-col items-center";

  let cartHeader = document.createElement("div");
  cartHeader.className =
    "flex justify-between items-center mb-4 border-b pb-3 w-full px-4";

  let heading = document.createElement("h2");
  heading.innerText = "Your Cart";
  heading.className = "text-2xl font-bold text-gray-800";

  let closeBtn = document.createElement("button");
  closeBtn.innerText = "✕";
  closeBtn.className =
    "text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition text-lg sm:text-base";

  closeBtn.addEventListener("click", () => {
    popup.remove();
  });

  cartHeader.appendChild(heading);
  cartHeader.appendChild(closeBtn);
  popupBox.appendChild(cartHeader);

  let cartItems = document.createElement("table");
  cartItems.className =
    "w-full border-collapse bg-white text-gray-700 border border-gray-300 text-sm sm:text-base";

  let tbody = document.createElement("tbody");

  const updateTotalPrice = () => {
    let totalPrice = 0;
    ViewArr.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    totalPriceContainer.innerHTML = `Total Price: <span class="text-green-600">$${totalPrice}</span>`;
  };

  ViewArr.forEach((item) => {
    let row = document.createElement("tr");
    row.className = "border border-gray-300 flex flex-col sm:table-row";

    let imgCell = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.image;
    img.className = "w-20 h-20 object-cover rounded mx-auto sm:w-16 sm:h-16";
    imgCell.className = "p-3 border flex justify-center sm:table-cell";
    imgCell.appendChild(img);

    let titleCell = document.createElement("td");
    titleCell.innerText = item.title;
    titleCell.className = "p-3 font-medium border text-center sm:text-left";

    let descCell = document.createElement("td");
    descCell.innerText = item.description;
    descCell.className =
      "p-3 text-xs sm:text-sm border text-center sm:text-left";

    let priceCell = document.createElement("td");
    priceCell.innerText = `$${item.price}`;
    priceCell.className = "p-3 font-semibold border text-center";

    let quantityCell = document.createElement("td");
    quantityCell.className = "p-3 border text-center";

    let quantityWrapper = document.createElement("div");
    quantityWrapper.className =
      "flex items-center justify-center space-x-2 sm:space-x-4";

    let minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    minusBtn.className =
      "bg-gray-300 text-black px-2 sm:px-3 py-1 rounded hover:bg-gray-400";

    let quantity = document.createElement("span");
    quantity.innerText = item.quantity;
    quantity.className = "text-lg px-2 font-semibold";

    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.className =
      "bg-gray-300 text-black px-2 sm:px-3 py-1 rounded hover:bg-gray-400";

    let subTotalCell = document.createElement("td");
    subTotalCell.className = "p-3 border font-semibold text-center";

    let updateSubtotal = () => {
      let subTotal = item.price * item.quantity;
      subTotalCell.innerHTML = `Sub Total: $${subTotal}`;
    };
    updateSubtotal();

    plusBtn.addEventListener("click", () => {
      item.quantity++;
      quantity.innerText = item.quantity;
      updateSubtotal();
      updateTotalPrice();
    });

    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantity.innerText = item.quantity;
        updateSubtotal();
        updateTotalPrice();
      } else {
        ViewArr = ViewArr.filter((cartItem) => cartItem.title !== item.title);
        localStorage.setItem("cart", JSON.stringify(ViewArr));
        count = ViewArr.length;
        localStorage.setItem("cartCount", count);
        cartCount.innerHTML = count;
        row.remove();
        updateTotalPrice();
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
      ViewArr = ViewArr.filter((cartItem) => {
        if (cartItem.title === item.title) {
          cartItem.quantity = 1;
        }
        return cartItem.title !== item.title;
      });

      localStorage.setItem("cart", JSON.stringify(ViewArr));
      count = ViewArr.length;
      localStorage.setItem("cartCount", count);
      cartCount.innerHTML = count;
      updateTotalPrice();
      row.remove();
    });

    removeCell.appendChild(removeBtn);

    row.appendChild(imgCell);
    row.appendChild(titleCell);
    row.appendChild(descCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(subTotalCell);
    row.appendChild(removeCell);

    tbody.appendChild(row);
  });

  cartItems.appendChild(tbody);
  popupBox.appendChild(cartItems);

  let totalPriceContainer = document.createElement("div");
  totalPriceContainer.className = "mt-4 text-lg font-bold text-gray-800";
  popupBox.appendChild(totalPriceContainer);
  updateTotalPrice();

  let payBtn = document.createElement("button");
  payBtn.innerHTML = "Pay to Proceed";
  payBtn.className =
    "bg-yellow-400 px-4 py-2 rounded-lg text-black font-bold hover:bg-yellow-500 transition mt-5";

  payBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (ViewArr.length == 0) {
      alert("No product in cart ");
    } else {
      window.location.href = "form.html";
    }
  });

  popupBox.appendChild(payBtn);
  popup.appendChild(popupBox);
  document.body.appendChild(popup);
});
