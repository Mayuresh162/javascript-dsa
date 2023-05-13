const TAX_RATE = 0.08;
const PHONE_PRICE = 50;
const BANK_BALANCE = 500;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 200;

var amount = +prompt('Where to start?');

function calculateTax(amount) {
    return amount + TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while(amount < BANK_BALANCE) {
    amount = amount + PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calculateTax(amount);

console.log('Your purchase amount:' +  formatAmount(amount));

if (amount > BANK_BALANCE) {
    console.log("You can't afford this purchase");
} else {
    console.log("You can afford this purchase");
}