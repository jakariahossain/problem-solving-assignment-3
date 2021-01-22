//https://github.com/jakariahossain/problem-solving-assignment-3
// Kilometer to Meter
function kilometerToMeter(getMeter) {
  var meter = 1000;
  if (getMeter < 0) {
    var noResult = "You can't put Minus value Here";
    return noResult;
  } else {
    var result = getMeter * meter;
    return result;
  }
}
console.log(kilometerToMeter(6));

// Budget calculator
function budgetCalculator(watch, phone, laptop) {
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;

  if (watch < 0 || phone < 0 || laptop < 0) {
    var noResult = "You can't put Minus value Here";
    return noResult;
  } else {
    var watchResult = watch * watchPrice;
    var phoneResult = phone * phonePrice;
    var laptopResult = laptop * laptopPrice;

    var totalBudget = watchResult + phoneResult + laptopResult;
    return totalBudget;
  }
}
console.log(budgetCalculator(2, 3, 3));

// Hotel Cost Estimate
function hotelCost(days) {
  var totalRent = 0;
  if (days < 0) {
    var noResult = "You Can't Put minus days here";
    return noResult;
  } else if (days >= 1 && days <= 10) {
    rentFirstTenDays = days * 100;
    totalRent = totalRent + rentFirstTenDays;
    return totalRent;
  } else if (days >= 11 && days <= 20) {
    var firstTenDaysCost = 10 * 100;
    var getDaysAfterTenDays = days - 10;
    var rentAfterTenDays = getDaysAfterTenDays * 80;
    var totalRent = firstTenDaysCost + rentAfterTenDays;
    return totalRent;
  } else {
    var firstTenDaysCost = 10 * 100;
    var secondTenDaysCost = 10 * 80;
    var costForTwentyDays = firstTenDaysCost + secondTenDaysCost;
    var daysCountAfterTwentyDays = days - 20;
    var afterTwentyDaysCost = daysCountAfterTwentyDays * 50;
    var totalRent = costForTwentyDays + afterTwentyDaysCost;
    return totalRent;
  }
}

console.log(hotelCost(50));

// Mega Friend
function megaFriend(arr) {
  if (Array.isArray(arr)) {
    var longestFriendName = "";
    for (var i = 0; i < arr.length; i++) {
      var friendNameCheck = arr[i];
      if (friendNameCheck.length > longestFriendName.length) {
        longestFriendName = friendNameCheck;
      }
    }
    return longestFriendName;
  } else {
    var noResult = "You are not allow to put other values except array";
    return noResult;
  }
}
var megaFriendList = ["Zamal", "Salam", "Meganfox", "Kamalaharis", "Alamgir"];
console.log(megaFriend(megaFriendList));
