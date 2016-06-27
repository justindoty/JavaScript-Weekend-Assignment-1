//Ininitial Claims
var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialClaims = [claim1, claim2, claim3, claim4, claim5]

//New Claims

var claim6 = new Claim("Dominic Toretto", "Specialist", 3000);

var claim7 = new Claim("Brian Connor", "Optical", 500);

var claim8 = new Claim("Luke Hobbs", "Primary Care", 1000);

var claim9 = new Claim("Roman Pearce", "Specialist", 1500);

var claim10 = new Claim("Tej Parker", "Emergency", 20000);

//New array

var newClaims = [claim6, claim7, claim8, claim9, claim10];

//Combined Arrays innitalList and newList
var allClaims = initialClaims.concat(newClaims);

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
var totalPayedOut = 0;
var perPersonArray = [];
var perPerson = [];

//This view.displayTotals function gets called in my jQuery function to build my output. I wasn't sure what I was doing, but I took a shot at it. It works, but im sure there is a much better way to do this. 
var view = {
	displayTotals: function(array) {
		var totalsUl = document.querySelector('ul');
			totalsUl.innerHTML = '';
		for(var i = 0; i < array.length; i++){
			var displayLi = document.createElement('li');
			displayLi.textContent = array[i];
			totalsUl.appendChild(displayLi);
}}}
//Calling the main function
	amountPaidOut(allClaims);

//This Function calls all other functions and displays results to console and builds an array gets passed into view.displayTotals function so I could get it to display on the screen.
function amountPaidOut(array) {
	for(it = 0; it < array.length; it++) {
		perPerson = ['Paid out $' + totalAmountCoveredPerClaim(array[it]) + ' for ' + array[it].patientName];
		totalPayedOut += totalAmountCoveredPerClaim(array[it]);
		console.log(perPerson);
		perPersonArray.push(perPerson);
	}
}
	var allTotal = ("Total amount paid out on all claims $" + totalPayedOut)
		if(perPersonArray.length = perPersonArray.length) {
			perPersonArray.push(allTotal);
		 	console.log(allTotal);
		 	totalPayedOut = 0;
	 }

//jquery to append output to html
$(document).ready(function(){
 	$('button').on('click', function () {
		view.displayTotals(perPersonArray);
});
});

//function to determine percent covered
function percentCovered(claim) {
	var claimNumber = claim.visitType;
	var whatsCovered = 0;

	switch(claimNumber){
    case "Optical":
      whatsCovered = 0;
      break;
    case "Specialist":
      whatsCovered = .10;
      break;
    case "Emergency":
      whatsCovered = 1;
      break;
    case "Primary Care":
      whatsCovered = .5;
      break;
  }
	return whatsCovered;
}

//function to determine amount covered
function totalAmountCoveredPerClaim(claim) {
	var totalPayedOut = claim.visitCost * percentCovered(claim);
	return totalPayedOut;
}
