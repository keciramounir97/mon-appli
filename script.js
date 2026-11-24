let notesInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let notesList = document.getElementById("notesList");

const svg_edit = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>bxs-pencil</title><path d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9L21 7.414z" fill="currentColor"/></svg>`;

const svg_delete = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>bin</title><path fill="currentColor" d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5zm3 9H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.75.75 0 0 0-.75.75V4h13V2.75a.75.75 0 0 0-.75-.75M9 2H6v-.987h3z"/></svg>`;

function createNote(text) {
  let li = document.createElement("li");
  li.setAttribute("class", "note");

  let span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.setAttribute("class", "actions");

  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "editBtn iconBtn");
  editBtn.setAttribute("title", "Modifier ....");
  editBtn.innerHTML = svg_edit;

  editBtn.addEventListener("click", function () {
    const nouveau = prompt("Modifier La Note :", span.textContent);
    if (nouveau !== null && nouveau.trim() !== "") {
      span.textContent = nouveau.trim();
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn iconBtn");
  deleteBtn.setAttribute("title", "Supprimer");
  deleteBtn.innerHTML = svg_delete;

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  notesList.appendChild(li);
}

function addNote() {
  let text = notesInput.value.trim();
  if (text === "") {
    alert("Veuillez écrire une Note valide !");
    return;
  }
  createNote(text);
  notesInput.value = "";
  notesInput.focus();
}

addBtn.addEventListener("click", addNote);

notesInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addNote();
  }
});

function SwitchTab(boutonClique, idContenu) {
  const LesContenus = document.querySelectorAll(".tab-content ");
  for (let i = 0; i < LesContenus.length; i++) {
    LesContenus[i].classList.remove("active");
    LesContenus[i].style.display = "none";
  }

  const LesBoutons = document.querySelectorAll(".tab-btn ");
  for (let i = 0; i < LesBoutons.length; i++) {
    LesBoutons[i].classList.remove("active");
  }

  boutonClique.classList.add("active");
  const boite = document.getElementById(idContenu);
  if (boite) {
    boite.style.display = "block";
    boite.classList.add("active");
  }
}

function updateClock() {
  document.getElementById("clockDisplay").textContent =
    new Date().toLocaleTimeString("fr-FR");
}
updateClock();
setInterval(updateClock, 1000);

let minTimer;
let sec = 0;

function startTimer() {
  clearInterval(minTimer);
  sec = parseInt(document.getElementById("timerInput").value, 10);
  if (isNaN(sec) || sec <= 0) return;

  document.getElementById("timerDisplay").textContent = sec + "s";
  minTimer = setInterval(() => {
    sec--;
    if (sec <= 0) {
      clearInterval(minTimer);
      document.getElementById("timerDisplay").textContent = "Fini !";
    } else {
      document.getElementById("timerDisplay").textContent = sec + "s";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(minTimer);
  sec = 0;
  document.getElementById("timerDisplay").textContent = "0s";
}

let chrono;
let count = 0;

function startChrono() {
  clearInterval(chrono);
  chrono = setInterval(() => {
    count++;
    document.getElementById("chronoDisplay").textContent = count + "s";
  }, 1000);
}

function stopChrono() {
  clearInterval(chrono);
}

function resetChrono() {
  clearInterval(chrono);
  count = 0;
  document.getElementById("chronoDisplay").textContent = "0s";
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksList = document.getElementById("tasksList");
const svg_edit2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>bxs-pencil</title><path d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9L21 7.414z" fill="currentColor"/></svg>`;

const svg_delete2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>bin</title><path fill="currentColor" d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5zm3 9H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.75.75 0 0 0-.75.75V4h13V2.75a.75.75 0 0 0-.75-.75M9 2H6v-.987h3z"/></svg>`;

function createTask(text) {
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
  });

  const span = document.createElement("span");
  span.setAttribute("class", "task-text");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.setAttribute("class", "actions");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "iconBtn editBtn");
  editBtn.innerHTML = svg_edit2;
  editBtn.addEventListener("click", function () {
    const nouveau = prompt("modifier la tache ......");
    if (nouveau !== null && nouveau.trim() !== "") {
      span.textContent = nouveau.trim();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "iconBtn deleteBtn");
  deleteBtn.innerHTML = svg_delete2;
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(actions);

  tasksList.appendChild(li);
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;
  createTask(text);
  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
