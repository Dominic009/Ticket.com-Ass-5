/* ------------------------------ Clean Code Start ------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  init();
});

const MAX_SELECTABLE_SEATS = 4;
const SEAT_PRICE = 550;
let selectedSeatsCount = 0;

const coupons = {
  NEW15: 15, // 15% discount
  COUPLE20: 20, // 20% discount
};

function init() {
  setInnerText("total-price", 0);
  setInnerText("grand-total", 0);
  setInnerText("total-seats", 0);
  setInnerText("Available-seats", 40); // example value
  attachSeatClickListeners();
  handlePhoneValidation();
}

// Attach event listeners to all seat buttons
function attachSeatClickListeners() {
  const seats = document.querySelectorAll(".selected");

  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      if (selectedSeatsCount >= MAX_SELECTABLE_SEATS) {
        alert(`You can select maximum ${MAX_SELECTABLE_SEATS} seats.`);
        return;
      }

      const seatNumber = seat.innerText;
      seat.setAttribute("disabled", "disabled");
      seat.classList.add("bg-green-400"); // better than using `style.backgroundColor`
      updateSelectedSeats(seatNumber);
      updateSeatCount();
      updateTotalPrice();
      updateGrandTotal();
    });
  });
}

// Update selected seats list in billing section
function updateSelectedSeats(seatNumber) {
  const container = document.getElementById("selected-seat-container");

  const ul = document.createElement("ul");
  ul.className = "flex justify-between text-sm text-gray-600 mb-2";

  const liSeat = document.createElement("li");
  const liClass = document.createElement("li");
  const liPrice = document.createElement("li");

  liSeat.innerText = seatNumber;
  liClass.innerText = "Economy";
  liPrice.innerText = SEAT_PRICE;

  ul.appendChild(liSeat);
  ul.appendChild(liClass);
  ul.appendChild(liPrice);

  container.appendChild(ul);
}

// Update seat counts
function updateSeatCount() {
  selectedSeatsCount += 1;

  const totalElem = document.getElementById("total-seats");
  const availableElem = document.getElementById("Available-seats");

  totalElem.innerText = selectedSeatsCount;
  availableElem.innerText = parseInt(availableElem.innerText) - 1;
}

// Update total price
function updateTotalPrice() {
  const currentTotal = parseInt(
    document.getElementById("total-price").innerText
  );
  const newTotal = currentTotal + SEAT_PRICE;
  setInnerText("total-price", newTotal);
}

// Set grand total
function updateGrandTotal() {
  const grandTotalElem = document.getElementById("grand-total");
  const currentPrice = parseInt(
    document.getElementById("total-price").innerText
  );
  grandTotalElem.innerText = currentPrice;
}

// Utility: Set innerText by ID
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Phone number validation + seat selection check for enabling "Next" button
function handlePhoneValidation() {
  const input = document.getElementById("phone-number");
  const button = document.getElementById("next-button");

  // Ensure it's disabled by default
  button.setAttribute("disabled", "disabled");

  input.addEventListener("input", () => {
    validateForm();
  });
}

// Call this after every seat selection
function validateForm() {
  const phone = document.getElementById("phone-number").value;
  const button = document.getElementById("next-button");

  const isPhoneValid = /^\d{11}$/.test(phone);
  const hasSelectedSeats = selectedSeatsCount > 0;

  if (isPhoneValid && hasSelectedSeats) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
}

let couponApplied = false;

function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");
  const couponCode = couponInput.value.trim().toUpperCase();
  const grandTotalElem = document.getElementById("grand-total");
  const totalPriceElem = document.getElementById("total-price");

  if (couponApplied) {
    alert("You have already applied a coupon.");
    return;
  }

  if (coupons[couponCode]) {
    const discountPercent = coupons[couponCode];
    const totalPrice = parseInt(totalPriceElem.innerText);

    const discountAmount = Math.floor((discountPercent / 100) * totalPrice);
    const discountedTotal = totalPrice - discountAmount;

    grandTotalElem.innerText = discountedTotal;

    couponApplied = true;

    alert(`✅ Coupon applied! You got ${discountPercent}% off.`);
  } else {
    alert("❌ Invalid coupon code.");
  }
}
