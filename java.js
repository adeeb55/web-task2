let allTasksArray = [];
let filterStatus = "all";
let currentlyEditingTaskId = null;
let currentlyDeletingTaskId = null;
const regex = /^[0-9]/;
const toDoForm = document.getElementById("toDoInputForm");
const toDoInput = document.getElementById("toDoInput");
const tasksList = document.getElementById("tasksList");
const filterBtnAll = document.getElementById("filterBtnAll");
const filterBtnDone = document.getElementById("filterBtnDone");
const filterBtnTodo = document.getElementById("filterBtnTodo");
const popupCancelBtn = document.getElementById("popupCancelBtn");
const beEmpty = document.getElementById("beEmpty");
const startWithNumber = document.getElementById("startWithNumber");
const fiveCharLong = document.getElementById("fiveCharLong");
const popupBeEmpty = document.getElementById("popupBeEmpty");
const popupStartWithNumber = document.getElementById("popupStartWithNumber");
const popupFiveCharLong = document.getElementById("popupFiveCharLong");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const deleteDoneBtn = document.getElementById("deleteDoneBtn");
const popupDeleteAllCancelBtn = document.getElementById(
  "popupDeleteAllCancelBtn"
);
const popupDeleteAllConfirmBtn = document.getElementById(
  "popupDeleteAllConfirmBtn"
);
const popupDeleteDoneCancelBtn = document.getElementById(
  "popupDeleteDoneCancelBtn"
);
const popupDeleteDoneConfirmBtn = document.getElementById(
  "popupDeleteDoneConfirmBtn"
);
const deleteBtnsWrapper = document.getElementById("deleteBtnsWrapper");
const noTasksText = document.getElementById("noTasksText");
toDoInput.addEventListener("blur", (e) => {
  e.preventDefault();
  const taskText = toDoInput.value.trim();
  if (taskText.length == 0) {
    beEmpty.style.display = "flex";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "none";
  } else if (taskText.length < 5) {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "flex";
    startWithNumber.style.display = "none";
  } else if (regex.test(taskText)) {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "flex";
  } else {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "none";
  }
});


const updateDeleteButtonsState = () => {
  const hasTasks = allTasksArray.length > 0;
  const hasCompletedTasks = allTasksArray.some((task) => task.completed);

  deleteBtnsWrapper.style.display = hasTasks ? "flex" : "none";

  if (!hasTasks) {
    noTasksText.style.display = "flex";
  } else if (filterStatus === "done" && !hasCompletedTasks) {
    noTasksText.style.display = "flex";
  } else if (
    filterStatus === "todo" &&
    !allTasksArray.some((task) => !task.completed)
  ) {
    noTasksText.style.display = "flex";
  } else if (filterStatus === "all" && allTasksArray.length === 0) {
    noTasksText.style.display = "flex";
  } else {
    noTasksText.style.display = "none";
  }


  deleteDoneBtn.disabled = !hasCompletedTasks;
};

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();
});

const createTask = () => {
  const taskText = toDoInput.value.trim();
  if (taskText.length == 0) {
    beEmpty.style.display = "flex";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "none";
  } else if (taskText.length < 5) {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "flex";
    startWithNumber.style.display = "none";
  } else if (regex.test(taskText)) {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "flex";
  } else {
    beEmpty.style.display = "none";
    fiveCharLong.style.display = "none";
    startWithNumber.style.display = "none";
    const taskObject = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    saveInputAndReset(taskObject);
  }
};
const saveInputAndReset = (taskObject) => {
  allTasksArray.push(taskObject);
  createTasksList();
  saveTasks();
  toDoInput.value = "";
};

filterBtnAll.addEventListener("click", (e) => {
  e.preventDefault();
  filterStatus = "all";
  createTasksList();
});

filterBtnDone.addEventListener("click", (e) => {
  e.preventDefault();
  filterStatus = "done";
  createTasksList();
});

filterBtnTodo.addEventListener("click", (e) => {
  e.preventDefault();
  filterStatus = "todo";
  createTasksList();
});

const createTasksList = () => {
  tasksList.innerHTML = "";
  let tasksArrayToShow = changeFilterStatus();

  tasksArrayToShow.forEach((taskObject) => {
    taskElement = createOneTask(taskObject);
    tasksList.append(taskElement);
  });

  updateDeleteButtonsState();
};