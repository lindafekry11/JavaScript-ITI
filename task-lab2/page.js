
    function myFun(){
    

            var age = Number(prompt("Please enter your age: "));
        
            while (age==null){
               break;
            }

            var age = Number(prompt("Please enter your age: "));
    
                if (age<=0){
        alert("Invalid age :(( !");
            }
        
           else if (age>=1 && age<= 10){
                alert("Humm You're a child");
            }
        
            else if (age>=11 && age<=18){
                alert("Teenager");
            }
            else if(age >=19 && age <=50){
                alert("Grown");
            }
            else{
                alert("Oldd :'))");
            }

       
      
       
    }



