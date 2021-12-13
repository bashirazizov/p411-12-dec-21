// localStorage.setItem("a","necesen");
// localStorage.removeItem("b");
// localStorage.setItem("b","yaxsiyam");
// localStorage.clear();

// let a = 10;
// localStorage.setItem("a",a);

// console.log(a+5);
// console.log(localStorage.getItem("a")+5);

// let obj1 = {
//   name: "mamed",
//   age: 10,
// };

// localStorage.setItem("person", JSON.stringify(obj1));

// let newObj = JSON.parse(localStorage.getItem("person"))

// console.log(newObj);
// console.log(newObj.name);
// console.log(localStorage.getItem("person"));

let addToCartButtons = document.querySelectorAll(".card .btn");

if (localStorage.getItem("basket")==null) {
    localStorage.setItem("basket",JSON.stringify([]));
}
else{
    updateBasketCount();
}

for (const item of addToCartButtons) {
  item.addEventListener("click", function () {
    let id = this.parentElement.parentElement.getAttribute("data-id");
    let name = this.previousElementSibling.innerText;
    let img = this.parentElement.previousElementSibling.getAttribute("src");

    let basketFromStorage = JSON.parse(localStorage.getItem("basket"));

    let existingProd = basketFromStorage.find((p) => p.id == id);

    if (existingProd == undefined) {
      let prod = { id, name, img, count: 1,};

      basketFromStorage.push(prod);
    }else{
        existingProd.count++;
    }
    
    localStorage.setItem("basket", JSON.stringify(basketFromStorage));
    updateBasketCount();
  });
}