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