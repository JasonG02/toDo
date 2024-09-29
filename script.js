const inputEl = document.querySelector(".input-el");
const addBtn = document.querySelector(".addBtn");
let ulEl = document.querySelector(".ulEl");
const data = JSON.parse(localStorage.getItem("myTodo"));
let myTodo = [];

addBtn.addEventListener("click", function () {
  if (inputEl.value !== "") {
    myTodo.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myTodo", JSON.stringify(myTodo));
    render();
  }
});

function render() {
  let items = "";
  for (let i = 0; i < myTodo.length; i++) {
    items += ` <div class="list-items" data-value='${i}'>
    <li class='listItem${i}'>${myTodo[i]}</li>
      <button class="deleteBtn"></button>
  </div>`;
  }
  ulEl.innerHTML = items;

  document.querySelectorAll(".deleteBtn").forEach((elem) =>
    elem.addEventListener("click", function (e) {
      let parent = e.target.parentElement;
      parent.remove();
      let index = Number(parent.getAttribute("data-value")); // Get the index from data-value
      console.log(index);
      myTodo.splice(index, 1);
      localStorage.setItem("myTodo", JSON.stringify(myTodo));
      render();
    })
  );
}

if (data) {
  myTodo = data;
  render();
}
