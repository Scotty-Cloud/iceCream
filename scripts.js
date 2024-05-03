window.onload = function init() {
  const orderSubmitBtn = document.getElementById("orderSubmit");
  orderSubmitBtn.addEventListener("click", totalPrice);
  const coneRadioOption = document.getElementById("coneOption");
  const cupRadioOption = document.getElementById("cupOption");
};

function totalPrice() {
  const scoopInput = document.getElementById("scoopInput");
  const scoopAmount = parseInt(scoopInput.value);
  const coneRadioOption = document.getElementById("coneOption");
  const cupRadioOption = document.getElementById("cupOption");
  const sprinkleBox = document.getElementById("sprinkleBox");
  const whippedcreamBox = document.getElementById("whippedcreamBox");
  const hotfudgeBox = document.getElementById("hotfudgeBox");
  const cherryBox = document.getElementById("cherryBox");

  let basePrice = 0;
  if (document.getElementById("coneOption").checked) {
    basePrice = scoopAmount * 2.25;
  } else if (document.getElementById("cupOption").checked) {
    basePrice = scoopAmount * 3.0;
  }

  let toppingsPrice = 0;
  if (document.getElementById("sprinkleBox").checked) {
    toppingsPrice += 0.50;
  }
  if (document.getElementById("whippedcreamBox").checked) {
    toppingsPrice += 0.25;
  }
  if (document.getElementById("hotfudgeBox").checked) {
    toppingsPrice += 1.25;
  }
  if (document.getElementById("cherryBox").checked) {
    toppingsPrice += 0.25;
  } else {
    toppingsPrice = 0;
  }

  const taxRate = 0.08;
  const taxAmount = (basePrice + toppingsPrice) * taxRate;
  const totalDue = basePrice + toppingsPrice + taxAmount;

  document.getElementById("basePriceTotal").innerText = `$${basePrice.toFixed(2)}`;
  document.getElementById("taxTotal").innerText = `$${taxAmount.toFixed(2)}`;
  document.getElementById("entireTotalDue").innerText = `$${totalDue.toFixed(2)}`;
}