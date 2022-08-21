let time= prompt("Enter a 24 hour clock: ");

var hours= Number(time.substring(0,2));
var min= Number(time.substring(2));

if(hours>0 && hours<=24){

    if(hours>=1 && hours<12){
alert( hours + min + "AM");
    }

    else{
        hours= hours -12;
        alert( hours + min + "PM");
    }

}

else{
    alert("Invalid Time !!");
}