var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var kycContract = web3.eth.contract(abi);
var deployedContract = kycContract.new({
       data:binaryData,
       from: web3.eth.accounts[0],
       gas: 4700000
}); 
var ContractInstance = kycContract.at(ContractAddress);

function onClickLogin(){
	var username_c = document.getElementById("username").value;

    var password_c = document.getElementById("password").value;
    if(contractInstance.checkCustomer.call(user_name_c, password_c) == false) {
    	alert("Invalid username or password. Signup first to join the network.");
    	return false;
}
// alert("Welcome" "+username_c+" !");
 localStorage.username_c = username_c;
 localStorage.password_c = password_C;
 alert("Welcome" + localStorage.username_c + "!");
 window.location = './homepagecustomer.html';
 return false;
}


function onClickSignUp(){
	var username_c = document.getElementById("usernamesignup").value;
    var password_c = document.getElementById("passwordsignup").value;
    var c_password_c = document.getElementById("passwordsignup_confirm").value;
    if (password_c != c_password_c){
    	alert("Confirm Your Password");
    	return false;
    }
    if (contractInstance,setPassword.call(username_c, password_c) == false){
    	alert("This account is already in use. You have to undergo a KYC check atleast once.");
    	return false;
    }
  alert("hi");
contractInstance.setPassword.sendTransaction(username_c, password_c, {from: web3.eth.accounts[0], gas: 4700000});
  alert("Successfully registered! Go to the login area to proceed.");
  return false;
}