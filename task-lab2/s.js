let str = prompt("Enter a string: ");
let count =0;

for( let i=0 ; i<str.length ; i++){

    if( str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='o' || str.charAt(i)=='u' || str.charAt(i)=='i'){
count++;
    }
}

alert(`The vowels number is: ${count}`);

