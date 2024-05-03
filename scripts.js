window.onload = function init() {
    const orderSubmitBtn = document.getElementById("orderSubmit");
    orderSubmitBtn.addEventListener("click", totalPrice);
  };
  
  function totalPrice() {
    const coneRadioOption = document.getElementById("coneOption");
    const cupRadioOption = document.getElementById("cupOption");
    const scoopInput = document.getElementById("scoopInput");
    const scoopAmount = parseInt(scoopInput.value);
    const sprinkleBox = document.getElementById("sprinkleBox");
    const whippedcreamBox = document.getElementById("whippedcreamBox");
    const hotfudgeBox = document.getElementById("hotfudgeBox");
    const cherryBox = document.getElementById("cherryBox");
    const basePriceTotal = document.getElementById("basePriceTotal");
    const taxTotal = document.getElementById("taxTotal");
    const entireTotalDue = document.getElementById("entireTotalDue");
  
    let aScoop = 2.25 + (scoopAmount - 1) * 1.25;
  
    let toppingsPrice = 0;
    if (cupRadioOption.checked) {
      if (sprinkleBox.checked) {
        toppingsPrice += 0.50;
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
    }
  
    let base = aScoop + toppingsPrice;
    basePriceTotal.innerText = base.toFixed(2);
  
    let tax = base * 0.08;
    taxTotal.innerText = tax.toFixed(2);
  
    let total = tax + base;
    entireTotalDue.innerText = total.toFixed(2);
  }