function passwordStrength(password) {
    // getting the element by there id names 
    let password_strength = document.getElementById("password_strength");
    let display = document.getElementById("show");
    let clearInpute = document.getElementById("pass");
    let body = document.getElementById("body");
    let reload = document.getElementById("load");

    // checking the password length if is less than 4 characters
    if (password.length <= 5) {
        password_strength.innerHTML = "password too short";
        display.disabled = true;
        return;
    } 
    else{
        password_strength.innerHTML = "";
        display.disabled = false;
    }

    // Passing  4 Regular Expressions conditions 
    let regex = new Array();
    regex.push("[A-Z]"); //checking for Uppercase Alphabet.
    regex.push("[a-z]"); //checking for Lowercase Alphabet.
    regex.push("[0-9]"); //checking for Digit.
    regex.push("[$@$~!%*#?&]"); //checking for Special Character.


    let passed = 0;
    //Validate for each Regular Expression.
    for (let i = 0; i < regex.length; i++) {
        // RegExp initialize new expression 
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }
    //Display status of result to the user
    let color = "";
    let strength = "";
    let percentage = 0;
    switch (passed) {
        case 1:
            strength = "Weak";
            color = "red";
            percentage +=25;
            break;
        case 2:
            strength = "Medium";
            color = "orange";
            percentage +=50;
            break;
        case 3:
            strength = "Strong";
            color = "lightgreen";
            percentage +=75;
            break;
        case 4:
        strength = "Strong";
        color = "green";
        percentage +=100;
        break;
            
    }
    // refresh the page
    reload.addEventListener('click', function(){
        window.reload();
    })
    // function to display the output value
    display.addEventListener('click', function(e) {
        e.preventDefault();
        password_strength.innerHTML = `Your password is ${percentage}% while the strength is ${strength}.`;
        password_strength.style.color = color;
        // password_strength.style.background = "blue";
        body.style.background = "white";
        clearInpute.value = "";
    })

    // if (passed <= 2){
    //     document.getElementById("show").disabled = true;
    // }else{
    //     document.getElementById("show").disabled = false;
    // }
            
}
