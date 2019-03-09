var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var kycContract = web3.eth.contract(abi);
var deployedContract = kycContract.new({
  data: binaryData,
  from: web3.eth.accounts[0];
  gas: 4700000
});
var ContractInstance = keyContract.at(ContractAddress);

if (typeof (Storage == "undefined") {
  alert("Sorry, your browser does not support web storage. Upgrade to IE9 or contemporary platforms. Thanks for showing your interest in us!");

function onSignUp(){
  var bank_name1 = document.getElementById("username").value;

   if (bank_name1 == ""){
     alert("Enter a valid username!");
   return;
}
 var pass = document.getElementId("password").value;

  if (pass == ""){
    alert("Enter a valid password!");
     return;
}
  var reg = document.getElementById("reg_no").value;
   if (reg == ""){
    alert("Enter a valid registration number!");
     return;
}
  if (confirm("I accept that the detail provided are correct.") == false) {
     window location ='./index.html';
}

contractInstance.addBank.sendTransaction(bank_name1, pass, reg, {
    from: web3.eth.accounts[0],
    gas: 4700000
});

  alert(bank_name1 + "has been successfully added to the netwrok!");
  alert("Login from the |Login| Tab on the top right side of the webpage. \n Thank You for choosing MY KYC!");
}


function onLogin(){
  var bank_name_l = document.getElementById("username_l").value;
  var pass_l = document.getElementById("password_l").value;

        if (bank_name_l == ""){
           alert("Enter a valid bank name!");
         return;
}
        if (pass_l == ""){
           alert("Enter a valid password!");
         return;

}
        if (contractInstance.checkBank.call(bank_name_l, pass_l, {
          from: pass_l,
           gas: 4700000
}) == "null"){
       alert("Bank not in network. Sign up before proceeding further. Thank You!");
      return;
}


alert("Welcome" + bank_name_l + "!");
localStorage.bank_eth_account = pass_l;
window.location = './resources/bankHomePage.html';
}
