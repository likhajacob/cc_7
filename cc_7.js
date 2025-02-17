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
// Task 5 Business Loan Interest Calculation 

const calculateLoanInterest = (principal, rate, years) => {
    let interest = principal * rate * years;
    return interest;
};

// function to calculate loan interest 

// Test Cases 
let interest1 = calculateLoanInterest(1000, 0.05, 3); 
console.log(`Total Interest: $${interest1.toFixed(2)}`);

let interest2 = calculateLoanInterest(5000, 0.07, 5);
console.log(`Total Interest: $${interest2.toFixed(2)}`);
// Task 6 Filtering from High-Value Transactions 
const transactions = [500, 1200, 2500, 800, 1500, 300] // Transactions 
const highValueTransactions = transactions.filter(amount => amount > 1000); // Function to filter transactions over 1000
console.log(highValueTransactions);
// Task 7 Budget Tracker 
const createBudgetTracker = () => {
    let balance = 0;

    return (expense) => {
        balance += expense; 
        console.log(`Current Balance: $${balance.toFixed(2)}`);
    };
};

// Test Data 
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"
// Task 8 Business Groth Projection 
const calculateGrowth = (years, revenue) => {
    if (years >= 10) {
        console.log(`Projected Revenue after ${years} years: $${revenue.toFixed(2)}`);
        return revenue;
    }
    // Increase revenue by 5% and call function again 
    revenue *= 1.05;
    return calculateGrowth(years + 1, revenue);
}; 

let initialRevenue = 1000;

// Test Cases 
calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
