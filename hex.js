const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
//Method 2

let randomNumber='#';
for(let i=0;i<6;i++){
randomNumber += hex[getRandomHex()];
}
console.log(Math.floor(Math.random() * hex.length));
document.body.style.backgroundColor=randomNumber;
color.textContent=randomNumber;

// Method 1
//document.body.style.backgroundColor = getRandomHex() ;
// color.textContent=getRandomHex();
})




function getRandomHex(){
    // Method 1
    // return '#'+ Math.floor(Math.random()*16777215).toString(16);;

    // Method 2
    
    return (Math.floor(Math.random() * hex.length));
}
