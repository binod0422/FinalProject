const products = [
    {
        name: 'Macbook Pro Charger',
        image: 'https://m.media-amazon.com/images/I/51ldiGHC0JL._AC_SX679_.jpg',
        description: 'MacBook Pro Charger for MacBook Air Charger 96W USB C Laptop Charger for MacBook Pro USB C Charger, Ipad Charger Included Type C Cable',
        price: 39.99
    },
    {
        name: 'Dell Laptop Charger',
        image: 'https://m.media-amazon.com/images/I/61Aiy6YOkOL._AC_SX679_.jpg',
        description: 'Dell USB-C 65 W AC Adapter with 1 meter Power Cord',
        price: 47.99
    },
    {
        name: 'Tech MousePad',
        image: 'https://m.media-amazon.com/images/I/71diPhCgzcL._AC_SX679_.jpg',
        description: 'Nicokee Gaming Mouse Pad Circuit Board Electronic Computer Hardware Technology Motherboard Digital Chip Tech Science Integrated Non-Slip Rubber Mouse Pad ',
        price: 8.99

    },
    {
        name: 'Wireless Mouse',
        image: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/604723/604723_o01_021323/604723',
        description: 'Logitech® M325 Wireless Mouse, Blue',
        price: 14.99   
    },
    {
        name: 'Lenova Laptop Charger',
        image: 'https://m.media-amazon.com/images/I/51GUA9KKIPL._AC_SX679_.jpg',
        description: 'Lenovo 65W Computer Charger - Round Tip AC Wall Adapter (GX20L29355),black',
        price: 22.00     
    },
    {
        name: 'USB Computer Speakers',
        image: 'https://m.media-amazon.com/images/I/71GPSjiqUDL._AC_SX679_.jpg',
        description: 'USB Computer Speakers, Wired Computer Soundbar Powered by USB',
        price: 14.99
    },
    {
        name: 'Webcam',
        image: 'https://m.media-amazon.com/images/I/61ju3NY5ksS._AC_SX679_.jpg',
        description: 'Webcam with Microphone, 110-Degree View Angle',
        price: 15.99
    },
]

function generateProductCards() {
    const productsContainer = document.getElementById('products');

    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3 pb-3';

        const cardContent = `
            <div class='card'>
                <img src='${product.image}' class='card-img-top' alt='card-img-top'>
                <div class='card-body d-flex flex-column justify-content-between'>
                    <div>
                        <h5 class='card-title'>${product.name}</h5>
                        <p class='card-text'>${product.description}</p>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                        <p class='card-text fs-5 fw-bold'>$ ${product.price}</p>
                        <input type="number" class="ps-3" value="1" min="1" max="10">
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type='button' class='btn btn-green mt-1'>Buy Now</button>
                        <button type='button' class='btn btn-yellow mt-1'>Add to cart</button>
                    </div>
                </div>
            </div>
        `;

        card.innerHTML = cardContent;
        productsContainer.appendChild(card);

        const addToCartButton = card.querySelector('.btn-yellow');
        addToCartButton.addEventListener('click', () => {
            addToCartButton.innerHTML = `<p>Added to cart</p>`;
            // Add your logic here to add the product to the cart
        });

        const buyNowButton = card.querySelector('.btn-green');
        buyNowButton.addEventListener('click', () => {
            buyNowButton.innerHTML = 'Thank you';
        });
    });
}

generateProductCards();
