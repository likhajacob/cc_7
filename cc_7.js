// Task 1 Customer Invoice Calculation 

function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`)
}

// Test Cases 

calculateInvoice(400, 0.05, 7); // Expected output $413
calculateInvoice(750, 0.2, 4); // Expected output $896
//Task 2 Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    return (salary / (hoursPerWeek * 52)).toFixed(2)
}// Function that calculates hourly wages

console.log(`Hourly Wages: $${calculateHourlyWage(52000, 40)}`)//Output: Hourly Wages: $25.00
console.log(`Hourly Wages: $${calculateHourlyWage(75000, 35)}`)//Output: Hourly Wage: $41.21
// Task 3 Customer Loylty Discount 
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) {
        discount = 0.15; // 15% discount will be applied
    } else if (years >= 3) {
        discount = 0.10; // 10% discount will be applied 
    } else {
        discount = 0.05; // 5% discount will be applied 
    }
    let discountedAmount = amount - (amount * discount);
    console.log(`Discounted Amount: $${amount.toFixed(2)}`);
};

// Test Data 
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"
//Task 4 Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let rates = 0;
    if (location === "USA") {
        rates = 5 + (weight * 0.5);
    } else if (location === "Canada") {
        rates = 10 + (weight * 0.7);
    }
    if (expedited) rates += 10;
    return rates
};//Function to calculate the shipping cost

console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true)}`)//Output: Shipping Cost $20
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`)// Output: Shipping Cost $13.5
