function submit(){
    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var mobilenumber = document.getElementById("mobile_number").value;
   
    
        if (firstname == ""){
        document.querySelector("#wrong_first_name").textContent = "Please enter a first name using letters only.";
        }

        if (lastname == ""){
            document.querySelector("#wrong_last_name").textContent = "Please enter a last name using letters only";
        }
        
        if (mobilenumber == "" || mobilenumber.length < 10){
            document.querySelector("#wrong_number").textContent = "Please enter a valid mobile number";
        }
    }


    function check(){
        var five3 = document.getElementById("five_3in").value;
        var five4 = document.getElementById("five_4in").value;
        var five5 = document.getElementById("five_5in").value;
        var five5_2 = document.getElementById("five_5_2in").value;
        var five6 = document.getElementById("five_6in").value;
        var five6_2 = document.getElementById("five_6_2in").value;

        if (five3 == ""){
            document.querySelector("#wrong_name").textContent = "Please enter the cardholder's name exactly as it appears on the card.";
        }

        if (five4 == ""){
            document.querySelector("#wrong_carddetails").textContent = "Please enter a valid card number.";
        }

        if (five5 == ""){
            document.querySelector("#wrong_expirymonth").textContent = "Please choose a valid month.";
        }

        if (five5_2 == ""){
            document.querySelector("#wrong_expiryyear").textContent = "Please choose a valid year.";
        }

        if (five6 == ""){
            document.querySelector("#wrong_securitycode").textContent = "Please enter a valid card security code";
        }
        if (five6_2== ""){
            document.querySelector("#wrong_zipcode").textContent = "Please enter a ZIP code";
        }

        if (five3 != "" && five4 != "" && five5 != "" && five5_2 != "" && five6 != "" && five6_2 != ""){
            if (five3 == arr[0].name && five4 == arr[0].card && five5 == arr[0].expM && five5_2 == arr[0].expY && five6 == arr[0].scode && five6_2 == arr[0].zcode){
                alert("Payment Successful");
                document.querySelector("#wrong_zipcode").textContent = "Thank you For Booking!";
                document.querySelector("#wrong_zipcode").style.color = "green"
            }
            else{
                alert("Payment Failed");
                document.querySelector("#wrong_zipcode").textContent = "Oops ! wrong details entered.";
                document.querySelector("#wrong_zipcode").style.color = "red";
            }

        }
    }
