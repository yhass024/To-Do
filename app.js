const addToDoGrabber = document.querySelector(".add");
const listOfToDosGrabber = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  listOfToDosGrabber.innerHTML += html;
};

addToDoGrabber.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addToDoGrabber.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
  }
  addToDoGrabber.reset();
});

listOfToDosGrabber.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterToDos = (term) => {
  Array.from(listOfToDosGrabber.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const term = e.target.value.trim();
  filterToDos(term);
});
