let totalCount = 0;
let mainList = [][];
let subList = [];
let index=0;

function validation() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;

    let fnameError = true;
    let lnameError = true;
    let idError = true;
    let emailError = true;
    let creditError = true;
    let deptError = true;

  if (!fname) {
    document.getElementById("fnameError").innerHTML = "First Name can not be empty";
    document.getElementById("fnameError").style.color = "red";
    fnameError = true;
  } 
  else {
    document.getElementById("fnameError").innerHTML = "";
    fnameError = false;
    student[0] = document.getElementById("fname").value;
  }
  

  if (!lname) {
    document.getElementById("lnameError").innerHTML = "Last Name can not be empty";
    document.getElementById("lnameError").style.color = "red";
    lameError = true;
  } 
  else {
    document.getElementById("lnameError").innerHTML = "";
    lameError = false;
    student[1] = document.getElementById("lname").value;
  }
  

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required fireld";
    document.getElementById("nameError").style.color = "red";
    hasEmailError = true;
  } 
  else if (!email.includes("@student.aiub.edu")) {
    document.getElementById("emailError").innerHTML =
      "Please provide a valid email address";
    document.getElementById("emailError").style.color = "red";
    emailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    emailError = false;
    student[3] = document.getElementById("email").value;
  }


  if (!sid) {
    document.getElementById("sid").innerHTML =
      "Student ID is a required field";
    document.getElementById("sidError").style.color = "red";
    sidlError = true;
  } 
  else if (!sid.includes("-")) {
    document.getElementById("sidError").innerHTML =
      "Please provide a valid ID";
    document.getElementById("sidError").style.color = "red";
    sidError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    sidError = false;
    student[2] = document.getElementById("sid").value;
  }


  if (credit.length < 148 && credit.length>=0) {
    document.getElementById("creditError").innerHTML =
      "Name must be at least 3 char";
    document.getElementById("creditError").style.color = "red";
    creditError = true;
  } else {
    document.getElementById("creditError").innerHTML = "";
    creditError = false;
    student[4] = document.getElementById("credit").value;
  }


  if (!dept) {
    document.getElementById("deptError").innerHTML = "Department can not be empty";
    document.getElementById("deptError").style.color = "red";
    lameError = true;
  } 
  else {
    document.getElementById("deptError").innerHTML = "";
    deptError = false;
    student[5] = document.getElementById("dept").value;

  }


    
  if (!fnameError && !lnameError && !idError && !emailError && !creditError && !deptError) {
    document.getElementById("totalRegistrations").innerHTML = ++totalCount;

    index= ++index;
    mainList[index][0]= fname;
    mainList[index][1]= lname;
    mainList[index][2]= sid;
    mainList[index][3]= email;
    mainList[index][4]= credit;
    mainList[index][5]= dept;
  }
  
  
displayTable();

return false;
}

function displayTable(){
  for(var i; i<index; i++){
    for(var j; j<6; j++){
      document.getElementById("tdfname").innerHTML = mainList[i][j];
    }
    
  }
}

