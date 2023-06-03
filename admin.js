// DOM VARIABLES
const productForm = document.getElementById("productForm");
const productRows = document.getElementById("productRows");

const productController = new ProductController();

const displayProducts = function() {
  let productArr = productController.getLocalStorage();
  productRows.innerHTML = "";
  productArr.forEach(product => {
    let row = document.createElement("tr");
    row.setAttribute("data-id", product.id);
    row.innerHTML = `
      <td><img src="${product.image}" alt="Product Image"></td>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
    `;
    productRows.append(row);
  });
};

// EVENT LISTENERS
productForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const productImage = document.getElementById("productImage").value;
  const productName = document.getElementById("productName").value;
  const productDescription = document.getElementById("productDescription").value; 
  const productPrice = document.getElementById("productPrice").value;
  const productCategory = document.getElementById("productCategory").value;

  productController.addProduct(productImage, productName, productDescription, productPrice, productCategory);

  productController.setLocalStorage();

  displayProducts();

  productForm.reset();
});

displayProducts();
