var web3 = new Web3(new Web3.providers.HttpProvider("http://localhostname: 8545"));
var kycContract = kycContract.new({
	data: binarydata,
	from: web3.eth.accounts[0],
	gas: 4700000
});
var contractInstance = kycContract.at(contractAddress);

//account to make all trasactions
var current_account =  localStorage.bank_eth_account;
var user_name = localStorage.user_name_m;

//function to fill details of the customer in the form
function fillForm(){
	var oldData = contractInstance.viewCustomer.call(user_name, {
		from: current_account,
		guas: 4700000
	});
	var toFill = "";
	for (var i =0, j = 0; i<(oldData.length - 2); ++i) {
		if (oldData[i] == '!' && oldData[i + 1] == '0' && oldData[i + 2] == '#'){
			if (j == 7) {
				if (toFill = "Male")
					document.getElementById("gender_m").checked = true;
				else
					document.getElementById("gender_f").checked = true;

				j += 2;
				i += 2;
				toFill ="";
				continue;
			}
			toFill = toFill + oldData[i];
		}
	}
// fill the form
fillForm();
// function to modify customer data based on changes made in the form
}
function onClickModify() {
	var Data = getInfo();
	if (Dara == undefined) {
		alert("Valid details required!");
		window.location = '../bankHomePage.html';
		return false;
	}
	var check = contractInstance.modifyCustomer.call(user_name, Data, {
		from: current_account,
		gas: 4700000
	});
	if (check == 7) {
		alert("Access Denied!");
		window.location = '../bankHomePage.html';
		return false;
	} else if (check == 1) {
		alert("Username not found.");
		window.location = '../bankHomePage.html';
		return false;
	} else {
		contractInstance.modifyCustomer.sendTrasaction(user_name, Data, {
			from: current_account,
			gas: 4700000
		});
		alert("Customer profile successfully modified! Check customer details froml the view form tab. Thank You!");
		window.location = '../bankHomePage.html';
		return false;
	}
}

// function to extract data from the filled form

function getInfo() {
	var data = document.getElementById("username").value + "!@#" + document.getElementById("first_name").value + "!@#" + document.getElementById("middle_name").value + "!@#" + document.getElementById("last_name").value + "!@#" + document.getElementById("occupation").value + "!@#" + document.getElementById("income_range").value + "!@#" + document.getElementById("DOB").value + "!@#";
	if (document.getElementById("gender_m").checked)
		data = data + "Male";
	else
		data = data + "Female";
	data = data + "!@#" + document.getElementById("address").value + "!@#" + document.getElementById("phone_1").value + "!@#" + document.getElementById("phone_2").value + "!@#" + document.getElementById("e-mail").value + "!@#" + document.getElementById("country").value + "!@#";
	return data;
}

// function to delete the KYC profile

function onClickDelete () {
	if (window.confirm("Are you sure you want to delete the KYC profile" + user_name + "?") == false) {
		window.location = '../bankHomePage.html';
		return false;
	}
	if contractInstance.removeCustomer.call(user_name, {
		from: current_account,
		gas: 4700000
	}) == 1 {
	alert("Customer not found.");
	window.location = '../bankHomePage.html';
}
contractInstance.removeCustomer.sendTransaction(user_name, {
	from: current_account,
	gas: 4700000
});
alert("Customer successfully removed.");
window.location = '../bankHomePage.html';
return false;
}