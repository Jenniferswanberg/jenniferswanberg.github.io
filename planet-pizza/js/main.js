

function checkme() {
    var error = "";

    if(document.getElementById('firstName').value ==""){
        error = "Please enter your name.\n";
    }

    if(document.getElementById('address').selectedIndex == ""){
        error += "Please enter your address.\n";

    }

    if(document.getElementById('city').value ==""){
        error += "Please enter your city.\n";
    }

    if(document.getElementById('state').value ==""){
        error += "Please choose a state.\n";
    }

    if(document.getElementById('zip').value ==""){
        error += "Please enter your zip.\n";
    }


    if(document.getElementById('phone').value ==""){
        error = "Please enter your phone.\n";
    }

    if(document.getElementById('email').value ==""){
        error = "Please enter your email address.\n";
    }



    if(document.getElementById('comments').value =="0"){
        error += "Please type in your comments below.\n";
    }



    if(document.getElementById('terms').checked== ""){
        error += "Please check terms.\n";
    }


    if(document.getElementById('credit').checked == "" && document.getElementById('debit').checked == "" && document.getElementById('googlepay').checked == ""){
        error += "Please Select a payment type.\n";
    }





    // do not alter code below this comment

    if(error){
        alert(error);
        return false;
    }
    else {
        return true;
    }}



