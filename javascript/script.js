const invitation = document.getElementById("invitation")

const btn1 = document.getElementById('btn-nature');
btn1.addEventListener('click', () => {
invitation.style.backgroundImage = "url('images/nature.png')";
}); 

const btn2 = document.getElementById('btn-night-sky');
btn2.addEventListener('click', () => {
invitation.style.backgroundImage = "url('images/night-sky.png')";
}); 

const btn3 = document.getElementById('btn-art-deco');
btn3.addEventListener('click', () => {
invitation.style.backgroundImage = "url('images/art-deco.png')";
}); 

function getValue() {
    const bridesname = document.getElementById("bride-name").value;
console.log(bridesname); 
const bridesTitle = document.createElement("h1").innerText= bridesname;
invitation.appendChild(bridesTitle)
console.log(invitation)
bridesTitle.innerHTML = bridesname
}
let newHeader = 
newHeader.id = "victory";
newHeader.innerHTML = "Dane is the champion";
document.body.append(newHeader)