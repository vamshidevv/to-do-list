let userInpt = document.getElementById("inptTxt");
let list = document.getElementById("displayList");
let arr = [];
let gbl;

let printList = () => {
  let ul = "<ul>";

  for (let i = 0; i < arr.length; i++) {
    ul +=
      "<li>" +
      arr[i] +
      "<button title='Close' id='dlBtn' onclick='deleteList(" +
      i +
      ")'><ion-icon name='close-outline' id='clsIcon'></ion-icon></button>" +
      "<button  title='Edit' id='editBtn' onclick='updt(" +
      i +
      ")'><ion-icon name='create' id ='editIcon'></ion-icon></button>" +
      "</li>";
  }
  ul += "</ul>";
  list.innerHTML = ul;
};

let addList = () => {
  if (document.querySelector(".addListBtn").innerHTML === "Update") {
    arr[gbl] = userInpt.value;
    userInpt.value = "";
    document.querySelector(".addListBtn").innerHTML = "Add";
  } else {
    arr.push(userInpt.value);
    userInpt.value = "";
  }
  printList();
  storeData();
};

let deleteList = (del) => {
  arr.splice(del, 1);
  printList();
  storeData();
};

let updt = (up) => {
  gbl = up;
  userInpt.value = arr[up];
  document.querySelector(".addListBtn").innerHTML = "Update";
  printList();
};

let storeData = () => {
  localStorage.setItem("data", arr);
};

let showData = () => {
  let storedData = localStorage.getItem("data");

  arr = storedData.split(","); // Split the stored string into an array
  printList();
};
showData();
