function switchMode(id,title){
  document.querySelectorAll(".mode")
  .forEach(m=>m.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  document.getElementById("title").innerText = title;
}

// CALCULATOR
function press(v){ display.value+=v; }
function clearDisplay(){ display.value=""; }
function calculate(){
  try{ display.value=eval(display.value); }
  catch{ display.value="Error"; }
}

// VOLUME
function calcVolume(){
  volumeResult.innerText =
    "Volume = "+(length.value*width.value*height.value);
}

// CURRENCY
const rate=83;
function inrToUsd(){
  currencyResult.innerText=(amount.value/rate).toFixed(2)+" USD";
}
function usdToInr(){
  currencyResult.innerText=(amount.value*rate).toFixed(2)+" INR";
}

// MONEY
function countMoney(){
  let total=
  n500.value*500+
  n200.value*200+
  n100.value*100+
  n50.value*50;

  moneyResult.innerText="Total ₹"+total;
}

// LOAN
function calcLoan(){
  let P=loanAmount.value;
  let r=interest.value/100/12;
  let n=months.value;

  let emi=(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  loanResult.innerText="EMI ₹"+emi.toFixed(2);
}
function deleteOne(){
  display.value = display.value.slice(0, -1);
}