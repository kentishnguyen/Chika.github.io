let button = document.getElementById("addItem");
button.addEventListener("click", addItem);

function addItem()
{
    let input = document.getElementById("itemm").value;

    if(input == "")
    {
        alert("Please kindly type any items you want");
        return;
    }
    let newOption = document.createElement("option");
    newOption.innerText = input;

    document.getElementById("itemm").value = "";

    let selectBox = document.getElementById("itemss");
    selectBox.appendChild(newOption);
}

// let submitBtn = document.getElementById("submitButton");
// submitBtn.addEventListener("click", showInfo);

// function showInfo()
// {
//     let input1 = document.getElementById("fname").value;
//     let input2 = document.getElementById("lname").value;
//     let input3 = document.getElementById("E-mail").value;
    
//     document.getElementById("customerInfo1").innerHTML = input1;
//     document.getElementById("customerInfo2").innerHTML = input2;
//     document.getElementById("customerInfo3").innerHTML = input3;

// }