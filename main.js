const prompt = require('prompt-sync')();

let tickets = 0;

const printTotalTickets = () => console.log(`Total tickets: ${tickets}`);

const addTickets = () => {
  const ticketsToAdd = Number(prompt("Enter the ticket amount: "));
  if (isNaN(ticketsToAdd) || ticketsToAdd < 0 || ticketsToAdd > 1000) {
    console.log("Please enter a valid number between 0 and 1000.")
  } else {
    tickets += ticketsToAdd;
    printTotalTickets();
  }
}

function Gift(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;

  this.print = () => {
    console.log(`${this.id}- ${this.name}, Cost: ${this.price} tickets`);
  }
}

let gifts = [
  new Gift(1, "Teddy Bear", 10),
  new Gift(2, "Big Red Ball", 5),
  new Gift(3, "Huge Bear", 50),
  new Gift(4, "Candy", 8),
  new Gift(5, "Stuffed Tiger", 15),
  new Gift(6, "Stuffed Dragon", 30),
  new Gift(7, "Skateboard", 100),
  new Gift(8, "Toy Car", 25),
  new Gift(9, "Basketball", 20),
  new Gift(10, "Scary Mask", 75)
]

const noGiftsLeft = () => gifts.length === 0;

const printGifts = () => {
  console.log("Here's the list of gifts:\n");
  if (noGiftsLeft()) {
    console.log("Wow! There are no gifts to buy.");
    return;
  }
  // gifts.forEach(gift => gift.print());
  for (let i in gifts) {
    gifts[i].print();
  }
}

const buyGift = () => {
  if (noGiftsLeft()) {
    console.log("Wow! There are no gifts to buy.");
    return;
  }
  const giftId = Number(prompt("Enter the number of the gift you want to get: "));
  if (isNaN(giftId)) {
    console.log("Please enter a valid number!");
    return;
  }
  let gift = gifts.find(g => g.id === giftId);
  if (gift === undefined) { // if no gifts with that number
    console.log("There is no gift with that number!");
    return;
  }
  if (tickets < gift.price) {
    console.log("You don't have enough tickets to buy this gift.");
  } else {
    console.log(`Here you go, one ${gift.name}!`);
    tickets -= gift.price;
    // gifts = gifts.filter(gift => gift.id !== giftId);
    gifts.splice(gifts.findIndex(g => g.id === giftId), 1);
    printTotalTickets();
  }
}

const handleUserInput = () => {
  let quit = false;
  do {
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let choice = Number(prompt());
    switch (choice) {
      case 1:
        buyGift();
        break;
      case 2:
        addTickets();
        break;
      case 3:
        printTotalTickets();
        break;
      case 4:
        printGifts();
        break;
      case 5:
        quit = true;
        break;
      default:
        console.log("Please enter a valid number!");
        break;
    }
  } while (!quit);
}


const printWelcomeMessages = () => {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
};

const init = () => {
  printWelcomeMessages();
  printGifts();
}

const finish = () => console.log("Have a nice day!");

init();
handleUserInput();
finish();