//Javascript Calculator: 
let entries = [0];
let total = 0; // For mathematical logic
let total2 = 0;
let temp = 0; // For any value that needs to be stored temporarily
let displayVal = '';
let activeArithmetic = "";
document.getElementById("outputScreen").value = entries[0]; // Sets the default state to 0;15.85714285

function main() {
  addEventListeners();
}

function addEventListeners(){
	// Get input from the button(s) pressed.
	// Add event listener to each button which fires computeCalculation() if pressed
	let listOfBtns;
	listOfBtns = document.getElementsByClassName("btn");
	for (let i = 0; i < listOfBtns.length; i++) {
		currentBtn = listOfBtns[i];
		currentBtn.addEventListener("click", function() {
			computeCalculation(listOfBtns[i].innerHTML);
		});
	}
}

function returnReversed(aList){
	let temp = entries.slice(); // Doesn't modify original list.
	return temp.reverse();
}

function fullStopCheck(aList){
	let listLen = aList.length;
	for (let i = 0; i < listLen; i++) {
		
		if (aList[i] == ".") {
			return false;
		}
	}
	return true;
}

function pushEntries(aList) {
  if (aList.length < 1) // If there's no values being displayed, display a 0.
    aList = [0]

	document.getElementById("outputScreen").value = "";// Clears the current value
	temp = "";
	temp += entries[0];
	
	if (aList[0] < -0.00000000001) {
		temp = Math.abs(aList[0]);
		aList[0] = temp;
		for (let i = 0; i < aList.length; i++){
			document.getElementById("outputScreen").value += aList[i];
		}
		document.getElementById("outputScreen").value += "-";
		return
	}
	
	while (temp.length > 9){
		temp = temp.substring(0, temp.length -1);
	}
	
	for (let i = 0; i < aList.length; i++){
		document.getElementById("outputScreen").value += aList[i]
	}
}

function negativeNum(){
	
}

function calcTotal() {
	//Calculates total
	
	let numberStr = "";
	for (let i = 0; i < entries.length; i++){
		numberStr += entries[i]
	}
	total = parseFloat(numberStr);
	return
}

function rtnTotal() {
	//Returns totals of entries without modifying any values
	
	let numberStr = "";
	for (let i = 0; i < entries.length; i++){
		numberStr += entries[i]
	}
	let currTotal = parseFloat(numberStr);
	return currTotal
}

function computeCalculation(buttonPressed) {
	
	let displayObjectVal = document.getElementById("outputScreen"); //Output Screen
	//console.log("I'm computing Calculations. " + "Did you press " + buttonPressed);
  console.log('Entries are :', entries)
	
	//Get value of the btn pressed.
	
	inputVal = buttonPressed; // Tested working
	//document.getElementById("outputScreen").value = buttonPressed;

	// console.log(inputVal);
	// Access the value from the dom button press.
	//document.getElementById("myBtn").addEventListener("click", function());


	if (inputVal === ".") {
		// Really wish I knew JQueery for easier access of the DOM.
		
		try {
			testVal = fullStopCheck(entries);
			if (testVal == false){
				return
			} 
		}
		
		catch {} // Don't do anything with the error -_-, Yeah tell me my code is bad. What's yours like?
		
		displayObjectVal.value = ""; // Resets state of output display.
		entries.push(".");
		temp = returnReversed(entries);
		pushEntries(temp);
		
		return
		
	} else if (inputVal === "AC") {
	// Reset Everything
		entries = [0]
		total = 0;
		displayVal = "";
		pushEntries(entries);

	} else if(inputVal === "CE") {
      entries.pop()
		  pushEntries(entries);
		
	} else if(inputVal == "&#9003") {
		return
		
	} else if(inputVal === "x") {
		calcTotal(); //Sends current number to total

		//reset entries for a new button
		entries = [0]
		pushEntries(["x"]);// displays x on press
		activeArithmetic = "x"; // sets up * as the current arithmetic
		
	} else if(inputVal === "%") {
	
		calcTotal(); //Sends current number to total
	
		//reset entries for a new button
		entries = [0]
		pushEntries(["%"]);// displays x on press
		activeArithmetic = "%"; // sets up * as the current arithmetic
		
	} else if(inputVal === "-") {
		calcTotal(); //Sends current number to total
		
		//reset entries for a new button
		entries = [0]
		pushEntries(["-"]);// displays x on press
		activeArithmetic = "-"; // sets up * as the current arithmetic
		
	} else if(inputVal === "+") {
		calcTotal(); //Sends current number to total
		
		//reset entries for a new button
		entries = [0]
		pushEntries(["+"]);// displays x on press
		activeArithmetic = "+"; // sets up * as the current arithmetic
		
	} else if(inputVal === "=") {
		//activeArithmetic
		switch(activeArithmetic) {
			case "x":
				total2 = rtnTotal();
				temp = total * total2;
				// Pushes the entries onto the screen.
				entries = [];
				entries.push(temp);
				pushEntries(entries);
				break;
			case "-":
				total2 = rtnTotal();
				temp = total - total2;
				// Pushes the entries onto the screen.
				entries = [];
				entries.push(temp);
				pushEntries(entries);
			
				break;
			case "+":
				total2 = rtnTotal();
				temp = total + total2;
				// Pushes the entries onto the screen.
				entries = [];
				entries.push(temp);
				pushEntries(entries);
			
				break;
			case "%":
				total2 = rtnTotal();
				temp = total / total2;
				// Pushes the entries onto the screen.
				entries = [];
				entries.push(temp);
				pushEntries(entries);
			
				break;
		}
		
		
	} else {
		if (entries[0] == 0){
			entries.shift()
		}
		entries.push(buttonPressed);
		pushEntries(entries);
	}
}

  // Output button press into a variable.

// Output the variable onto the screen of the calculator.

// Listen to different button presses.
