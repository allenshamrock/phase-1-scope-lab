// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}


var bestCustomer;
var setBestCustomer = function () {
  return (bestCustomer = "not bob");
};


function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "poor bob";
function changeLeastFavoriteCustomer() {
 leastFavoriteCustomer = "bob";
}
// changeLeastFavoriteCustomer();
