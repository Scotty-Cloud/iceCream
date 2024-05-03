window.onload = function init() {
  const orderSubmitBtn = document.getElementById("orderSubmit");
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

  let basePrice = 2.25;
  let toppingsPrice = 0;

  if (coneRadioOption.checked) {
    basePrice = scoopAmount * 2.5;
  } else if (cupRadioOption.checked) {
    basePrice = scoopAmount * 3.0;
  }
  if (sprinkleBox.checked) {
    toppingsPrice += 0.5;
  }
  if (whippedcreamBox.checked) {
    toppingsPrice += 0.25;
  }
  if (hotfudgeBox.checked) {
    toppingsPrice += 1.25;
  }
  if (cherryBox.checked) {
    toppingsPrice += 0.25;
  }

  const taxRate = 0.08;
  const taxAmount = (basePrice + toppingsPrice) * taxRate;

}
