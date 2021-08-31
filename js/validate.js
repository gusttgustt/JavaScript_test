var firstName = document.getElementById('first_name');
var lastName = document.getElementById('last_name');
var female = document.getElementById('female');
var male = document.getElementById('male');
var address = document.getElementById('address');
var currentMedicationAddress = document.getElementById('currentMedicationAddress');
var checkYes = document.getElementById('check_yes');
var checkNo = document.getElementById('check_no');
var canadian = document.getElementById('canadian');

var Smallpox = document.getElementById('Smallpox');
var Mumps = document.getElementById('Mumps');
var Dizziness = document.getElementById('Dizziness');
var Sneezing = document.getElementById('Sneezing');
var medical = "";
function submitFrom (){
    if(firstName.value != '' && lastName.value != '' && address.value != ''){
        if(!female.checked && !male.checked){
            alert("Please select gender.");
        }else{
            if(female.checked){
                var gender = "Female";
            }else{
                var gender = "Male";
            }

            if(Smallpox.checked){
                var SmallpoxText = Smallpox.value;
                medical += SmallpoxText+" ";
            }
            if(Mumps.checked){
                var MumpsText = Mumps.value;
                medical += MumpsText+" ";
            }
            if(Dizziness.checked){
                var DizzinessText = Dizziness.value;
                medical += DizzinessText+" ";
            }
            if(Sneezing.checked){
                var SneezingText = Sneezing.value;
                medical += SneezingText+" ";
            }

            if(checkYes.checked || !checkNo.checked){
                alert("please enter address");
            }else{
                alert("First Name : "+firstName.value+"\nLast Name : "+lastName.value+"\nGender : "+gender+"\nNationality : "+canadian.value+"\nAddress : "+address.value
                +"\nMedical History\n"+medical+"\nCurrent Medication\n"+currentMedicationAddress.value);
            }
        }
    }else{
        alert("please enter First Name,Last Name and Address.");
    }
    if(firstName.value.length > 50 || lastName.value.length > 50){
        alert("maximum input characters is 50");
        return false;
    }
    if(address.value.length > 300 || currentMedicationAddress.value.length > 300){
        alert("maximum input characters of Address is 300");
        return false;
    }

    
}