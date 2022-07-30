const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtns = document.getElementsByClassName("delete-note");
// musimy użyć getElelemntsByClassName ponieważ querySelector pobierze nam tylko te istniejące już elementy i nie pobierzemy nowych utworzonch
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");
let selectedValue;

let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textArea.value !== "" &&
    category.options[category.selectedIndex].value !== 0
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);

  newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})">
        <i class="fas fa-times icon"></i>
    </button>
</div>

<div class="note-body">
    ${textArea.value}
</div>`;

  noteArea.appendChild(newNote);
  cardID++;
  textArea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Zakupy":
      note.style.backgroundColor = "rgb(230, 133, 220)";
      break;

    case "Praca":
      note.style.backgroundColor = "rgb(147, 216, 109)";
      break;

    case "Dom":
      note.style.backgroundColor = "rgb(232, 227, 133)";
      break;

    case "Inne":
      note.style.backgroundColor = "rgb(117, 170, 222)";
      break;
  }
};

const deleteNote = id => {
const noteToDelete = document.getElementById(id);
noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = "";
}

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
