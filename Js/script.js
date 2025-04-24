// const productContainer = document.getElementById("product-container");

// fetch("https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(product => {
//             const html = `
//                 <div>
//                     <div>
//                         <div>
//                             <img src="${product.image}" alt="${product.title}" width="200" />
//                         </div>
//                         <div>
//                             <p>${product.vendor}</p>
//                             <p>${product.title}</p>
//                             <p>${product.price}</p>
//                             <p>${product.compare_at_price} (${product.discount}% OFF)</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             productContainer.innerHTML += html;
//         });
//     })
//     .catch(error => console.log("Error fetching data:", error));
const productContainer = document.getElementById("product-container");

fetch("data/products.json")
    .then(res => res.json())
    .then(data => {
      
        data.forEach(product => {
            const html = `
                <div>
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
    })
    .catch(error => console.log("Error fetching or parsing data:", error));
