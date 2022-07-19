// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// Assign class for when guests lists is full.
const assignButton = document.querySelector(".assign");
// Assigned items for guests and targets the lists which will populate
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearUp();
    updateGuestCount();
  }
});

const clearUp = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = guestList.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Veggie Nori Rolls",
    "Tomato and Caprese",
    "Stuffed Peppadews",
    "3-cheese Tomato Tart",
    "Zucchini Noodles",
    "3-Bean Isreali Couscous",
    "Lemon Cream Cake",
    "Pesto Pasta Salad",
    "Carrot Slaw",
    "Cucumber Salad",
    "Grilled Zucchini Salad",
    "Avocado Tomato Salad"
  ];
  const allGuests = document.querySelectorAll(".guest-list li"); //made a mistake at list item 
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex]; //didnt get this part.
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
