const products = [
  { name: "Tomato", type: "veggies", price: 30, image: "tomato.jpeg" },
  { name: "Brinjal", type: "veggies", price: 44, image: "brinjal.jpeg" },
  { name: "Cabbage", type: "veggies", price: 25, image: "cabbage.jpeg" },
  { name: "Potato", type: "veggies", price: 28, image: "potato.jpeg" },
  { name: "VIM Dishwash", type: "Grocerys", price: 50, image: "VIM dishwash.jpeg" },
  { name: "TATA Salt", type: "Grocerys", price: 50, image: "tata salt.jpeg" },
  { name: "Saffola Oats", type: "Grocerys", price: 50, image: "saffola oats.jpeg" },
  { name: "BUCKHWEAT", type: "Grocerys", price: 50, image: "buckweat.jpeg" },
  { name: "BULGUR WHEAT", type: "Grocerys", price: 50, image: "bulgur wheat.jpeg" },
  { name: "Chiken Masala", type: "Grocerys", price: 50, image: "chiken masala.jpeg" },
  { name: "Closeup toothpaste", type: "Grocerys", price: 50, image: "closeup toothpaste.jpeg" },
  { name: "Colgate toothbresh", type: "Grocerys", price: 50, image: "colgate toothbresh.jpeg" },
  { name: "Colgate toothpaste", type: "Grocerys", price: 50, image: "Colgate toothpaste.jpeg" },
  { name: "Dove Soap", type: "Grocerys", price: 50, image: "Dove soap.jpeg" },
  { name: "DAAWAT Treditional Basmati rice", type: "Grocerys", price: 50, image: "daawat treditional basmati rice.jpeg" },
  { name: "INDIA GATE Basmati rice", type: "Grocerys", price: 50, image: "india gate basmati rice.jpeg" },
  { name: "Freedom Sunflower oil", type: "Grocerys", price: 50, image: "freedom sunflower oil.jpeg" },
  { name: "Garam masala", type: "Grocerys", price: 50, image: "garam masala-.jpeg" },
  { name: "Garam masala", type: "Grocerys", price: 50, image: "garam masala.jpeg" },
  { name: "Lifebuoy soap", type: "Grocerys", price: 50, image: "Lifebuoy soap.jpeg" },
  { name: "Milk", type: "dairy", price: 50, image: "milk.jpeg" },
  { name: "Cheese", type: "dairy", price: 120, image: "cheese.jpEg" },
  { name: "lay's Chile lemon", type: "snacks", price: 20, image: "lay's chile lemon.jpeg" },
  { name: "lay's India's Magic", type: "snacks", price: 20, image: "lay's india's magic masala.jpeg" },
  { name: "lay's SIZZLIN", type: "snacks", price: 20, image: "lay's sizzlin hot.jpeg" },
  { name: "Carrot", type: "veggies", price: 45, image: "carrot.jpeg" },
  { name: "BRITANNIA Good day", type: "snacks", price: 30, image: "britannia good day.jpeg" },
  { name: "Cadbeery OREO", type: "snacks", price: 30, image: "cadbeery OREO.jpeg" },
  { name: "BRITANNIA BOURBON", type: "snacks", price: 30, image: "BRITANNIA BOURBON.jpeg" },
  { name: "BRITANNIA 50-50 sweet and salty", type: "snacks", price: 30, image: "britannia-5050.jpeg" }
];

let cart = [];

function displayProducts(items) {
  const list = document.getElementById('productList');
  list.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}"/>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <input type="number" min="1" value="1" id="qty-${p.name}" />
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function filterCategory(type) {
  if (type === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.type === type);
    displayProducts(filtered);
  }
}

function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  const qty = parseInt(document.getElementById(`qty-${productName}`).value);
  cart.push({ ...product, qty });
  alert(`${qty} ${productName}(s) added to cart`);
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let summary = "You ordered:\n";
  cart.forEach(item => {
    summary += `${item.qty} x ${item.name} = ₹${item.qty * item.price}\n`;
  });
  alert(summary + "\nThanks for your order!");
  cart = [];
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});

window.onload = () => {
  displayProducts(products);
};