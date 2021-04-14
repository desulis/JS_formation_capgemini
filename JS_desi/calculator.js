function calcSalary(event) {
	event.preventDefault(); // prevent to reload the page
	var grossSalary = document.getElementById("grossSalary");
	var bonus = document.getElementById("additionBonus");
	var allowance = document.getElementById("additionAllowance");
	var dependent = document.getElementById("dependents")
	var gender = document.getElementById("gender");

	var salaryBrut = parseInt(grossSalary.value); // .value is the value of the input inside a form
	var supplement = 0;
	if (allowance.checked === true){
		supplement += 150; //.checked to apply a condition if the user checked the checkbox
	}     
	if (bonus.checked === true){
		supplement += 100;
	}
	salaryBrut += supplement; 
	
	var taxRate = 18; 
	
	if (gender.value === "F") {
		taxRate -= 2
	}
	var family = parseInt(dependent.value);
	if (family === 3) {
		taxRate -= 1
	}
	if (family >= 4) {
		taxRate -= 2
	}
	var tax = (salaryBrut * taxRate)/ 100;
	console.log(gender.value)
	var assurance = (salaryBrut * 7)/ 100;
	var pension = (salaryBrut * 5)/ 100;
	var salaryNet = salaryBrut - tax - assurance - pension ;
	
	console.log("Salary Brut :" + salaryBrut);
	console.log("Tax :" + tax);
	console.log("Salary Net :" + salaryNet);
	// console.log(textImpot);

	var textImpot = document.querySelector("#text-impot span");
	textImpot.textContent = tax;
	var textAssurance = document.querySelector("#text-assurance span");
	textAssurance.textContent = assurance;
	var textPension = document.querySelector("#text-pension span");
	textPension.textContent = pension;
	var textSupplement = document.querySelector("#text-supplement span");
	textSupplement.textContent = supplement;
	var textSalary = document.querySelector("#text-salary span");
	textSalary.textContent = salaryNet;

}

  