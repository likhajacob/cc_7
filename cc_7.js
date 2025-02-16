// Task 1 Customer Invoice Calculation 

function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`)
}

// Test Cases 

calculateInvoice(400, 0.05, 7); // Expected output $413
calculateInvoice(750, 0.2, 4); // Expected output $896
