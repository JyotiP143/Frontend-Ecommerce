const productContainer = document.getElementById("product-container");
const filterbtn = document.querySelectorAll(".filter-product");
let allProducts = [];
fetch("data/products.json")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch((error) => console.log("Error fetching or parsing data:", error));
function displayProducts(products) {
  productContainer.innerHTML = ""; // clear old data

  products.forEach((product) => {
    const html = `
                <div class="product-data-main">
                <div class="product-image">
                    <img src="${product.image_src}" alt="${product.name}" width="200" />
                    </div>
                     <div class="product-image-data">
                    <p class="product-imageVendor">${product.vendor}</p>
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                    <p>${product.compare_at_price} (50% OFF)</p>
                     </div
                </div>
            `;
    productContainer.innerHTML += html;
  });
}

filterbtn.forEach((button) => {
  button.addEventListener("click", () => {
    filterbtn.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filterType = button.dataset.type
      ? button.dataset.type.toLowerCase()
      : button.textContent.toLowerCase();
    if (filterType === "all products") {
        console.log(filterType)
      displayProducts(allProducts); // show everything
    } else {
      const filtered = allProducts.filter((product) =>{
        product.name.toLowerCase().includes(filterType)
         console.log(filterType)
      }
      );
      displayProducts(filtered);
    }
  });
});

document.querySelectorAll(".filter-product").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type.toLowerCase();
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(type)
    );
    displayProducts(filtered);
  });
});
