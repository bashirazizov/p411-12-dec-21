let basketCount = document.querySelector("nav sup");
let basketTable = document.querySelector("#basket-table");
let basketTableBody = document.querySelector("#basket-table tbody");
let noItemsText = document.querySelector("#no-items-text");
let empty = document.querySelector("#empty");

if (localStorage.getItem("basket") == null) {

  localStorage.setItem("basket", JSON.stringify([]));
  basketTable.classList.add("d-none");
  empty.classList.add("d-none");
} else {

  let basketFromStorage = JSON.parse(localStorage.getItem("basket"));

  if (basketFromStorage.length == 0) {
    basketTable.classList.add("d-none");
    empty.classList.add("d-none");
  } else {
    noItemsText.classList.add("d-none");
    for (const product of basketFromStorage) {
      let idTd = document.createElement("td");
      idTd.innerText = product.id;

      let imgTd = document.createElement("td");
      let imgTag = document.createElement("img");
      imgTag.setAttribute("src", product.img);
      imgTd.append(imgTag);

      let nameTd = document.createElement("td");
      nameTd.innerText = product.name;

      let countTd = document.createElement("td");
      countTd.innerText = product.count;

      let newTr = document.createElement("tr");
      newTr.append(imgTd);
      newTr.append(idTd);
      newTr.append(nameTd);
      newTr.append(countTd);

      basketTableBody.append(newTr);
    }
  }
  updateBasketCount();
}

empty.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});