let submitBtn = document.getElementById("contactSubmit");
submitBtn.addEventListener("click", showInfo);

function showInfo()
{
    let input1 = document.getElementById("firstName").value;
    let input2 = document.getElementById("lastName").value;
    let input3 = document.getElementById("emaill").value;
    if (input1 == "")
    {
        alert("Please enter your beautiful name to continue");
    }
    else if (input3 == "")
    {
        alert("Please enter your email for further information");
    }
    document.getElementById("customerInfo1").innerHTML = "Here is your name: " + input1 + " " + input2 ;
    document.getElementById("customerInfo2").innerHTML = "Here is your email: " + input3;

}