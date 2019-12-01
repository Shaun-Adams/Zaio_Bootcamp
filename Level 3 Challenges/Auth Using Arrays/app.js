var password = document.getElementById("Password").value;
var confirmPassword = document.getElementById("ConfirmPassword").value;
var email = document.getElementById("Email").value;
var age = document.getElementById("Age").value;
var surname = document.getElementById("Surname").value;
var name = document.getElementById("Name").value;
var submit = document.getElementById("Submit").value;

function Validate(){
                var password = document.getElementById("Password").value;
                var confirmPassword = document.getElementById("ConfirmPassword").value;
                if (password!= confirmPassword) {
                    alert("Password do not match.");
                    return false;
                }

                alert("Success");
                var Dict =[
                    document.getElementById("Name").value,
                    document.getElementById("Surname").value,
                    document.getElementById("Age").value,
                    document.getElementById("Email").value,
                    document.getElementById("Password").value,
                    document.getElementById("ConfirmPassword").value
                                ];
                console.log(Dict.length);
                console.log(Dict[0]);
                console.log(Dict[3]);
                console.log(Dict[5]);
                return true;
            }
function main(){
    //addEventListener that waits until submit is clicked to execute Valudate function
    submit.addEventListener('click', function(){
    Validate();
    }
    )
}

//Calling the main function
main();

       