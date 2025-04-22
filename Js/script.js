const productContainer = document.querySelectorById(".product-container");
const fetchdata = fetch('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json');
fetchdata.then(res => res.json()).then(data =>{
    data.forEach(product => {
        const html =
        <div>
           <div>
                <div>
                    <img scr="${product.image}" alt="${product.title}" width="200"></img>
                </div>
                <div>
                <p>${product.vendor}</p>
                <p>${product.title}</p>
                <p>${product.price}</p>
                <p>${product.compare_at_price} (${product.discount}% OFF)</p>
            </div>
            </div>
        </div>
        ;
         productContainer.innerHTML +=html ;
    });
})
.catch(error => console.log("Error fetching data:", error));

