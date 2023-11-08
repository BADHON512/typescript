import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todosContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("Title")[0] as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 100),
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
  console.log(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  //create checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((x) => {
      if (x.id === id) x.isCompleted = checkBox.checked;
    });
    paragraph.className = checkBox.checked ? "textcut" : "";
  };

  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;

  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "D";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deleteTodo(id);
  };

  todo.append(checkBox, paragraph, btn);

  todosContainer.append(todo);
};
const deleteTodo = (id: string) => {
  const idx = todos.findIndex((i) => i.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

const renderTodo = (todos: Todo[]) => {
  todosContainer.innerText = "";
  todos?.forEach((i) => {
    generateTodoItem(i.title, i.isCompleted, i.id);
  });
};
