function myFunction() {
    var firstName = prompt("Please enter your first name");
    var lastName = prompt("Please enter your last name");
    var age = Number(prompt("What's your birth year?"));
    var actualAge = 2022 - age ;
    
    let isYourName = confirm('Is this your name?' + " " + firstName + " " + lastName);
  
    document.write("Welcome" + " " +firstName + " " +lastName + " " +"you are" + " " +actualAge + " " +"years old :'))");
    }
  