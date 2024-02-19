/*Login Button Event Handler*/
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const TranscctionArea = document.getElementById("Transaction-Area");
    TranscctionArea.style.display = "block";
});
/*Login Button Event Handler*/

/*Deposit Button Event Handler*/
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    //Function Call
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
});

// WithDraw Batton event Handlar
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const WithdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", WithdrawNumber);
    updateSpanText("currentBalance", -1 * WithdrawNumber);

    document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Function
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

/*Deposit Button Event Handler*/
