function myFunction(){
    var firstNumber = Number(prompt("Enter your first number:"));
    var secondNumber = Number(prompt("Enter your second number:"));
    var operation = prompt("Enter the operation you want to do");

    switch(operation){
  case '+':
    document.write(firstNumber + secondNumber);
    break;

    case '-':
      document.write(firstNumber - secondNumber);
      break;

      case '*':
        document.write(firstNumber * secondNumber);
        break;

        case '/':
            document.write(firstNumber / secondNumber);
            break;
           }
}