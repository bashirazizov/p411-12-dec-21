function updateBasketCount() {
  let basketCount = document.querySelector("nav sup");
  let basketFromStorage = JSON.parse(localStorage.getItem("basket"));
  basketCount.innerText = basketFromStorage.length;
}