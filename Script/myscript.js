function submitForm() {

   event.preventDefault();
   var mobileno = document.getElementById("phnumber").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var cpassword = document.getElementById("cPassword").value;
   const emailPattern = /[a-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
   const phnoPattern = /^\d{10}$/;
   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

   var flag = 0;
	
	
   if (password !== cpassword) {
      document.getElementById("cPassword").style.border = "1px solid red";
	flag=1;
     
   } else {
      document.getElementById("cPassword").style.border = "";
     
   }

   if (!emailPattern.test(email)) {
	flag=1;
      document.getElementById("email").style.border = "1px solid red";
      
   } else {
      document.getElementById("email").style.border = "";
    
   }


   if (!mobileno.match(phnoPattern)) {
	flag=1;
      document.getElementById("phnumber").style.border = "1px solid red";
      
   } else {
      document.getElementById("phnumber").style.border = "";
      
   }

   if (flag == 0) {
      alert("Form submitted successfully");
	var inputElements = document.getElementsByTagName("input");

for (var i = 0; i < inputElements.length; i++) {
  inputElements[i].value = "";
}
	
document.getElementById("address").value=" ";
document.getElementById("email").value=" ";

   }

}