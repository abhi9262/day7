/*console.log( "----- Welcome in js------");

//Assume user enter number N=?
//

//Input From User :using prompt:

const number= prompt("Enter Number");

//prompt---> take input from user 
//input store in left side variable ---- N
//Print Numbers in reverse order from : N to1

function printReverse(N){
    console.log("hello ")
    for (let i = N; i >= 1; i--)
    {
         console.log(i);
    }

}
for (let i = number; i >= 1; i--)
    {
         console.log(i);
    }

printReverse(number)

//get Element by id :
const h1 = document.getElementById("h1");

console.log(h1);

//New content
const newwContent = " Hello World";

//Assign newContent to tag:

h1.innerText = newwContent;



//get Element by id :
const h1 = document.getElementsByClassName("h1");

console.log(h1);

//New content
const newwContent = " Hello World";

//Assign newContent to tag:

h1.innerText = newwContent;


const elements = document.getElementsByClassName("heading");

console.log(elements[1]);

const newContent2 = " Hello India";

elements[1].innerText = newContent2;

// Get by className:
const elements = document.getElementesByClassName("heading");

console.log(elements);

const newContent = "Hello  New World";

for (let i=0; i<elements.length; i=i++){
    if ( i%2 === 0)
    elements[i].innerText="Even";
}else{
    elements[i].innerText =" Odd"
}*/
const elements = document.getElementsByClassName("heading");

if (elements.length > 0) {
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 === 0) {
            // If the index is even
            elements[i].innerText = "Even";
        } else {
            // If the index is odd
            elements[i].innerText = "Odd";
        }
    }
} else {
    console.log("No elements found with the class 'heading'.");
}


document.querySelector("h1")
document.querySelectorA1("")