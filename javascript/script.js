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

const bridesTitle = document.getElementById("bride-name-invitation");
document.getElementById("bride-name").addEventListener("input", (e) => {
  bridesTitle.innerHTML = e.target.value;
});

const groomsName = document.getElementById("grooms-name-invitation");
document.getElementById("groomsName").addEventListener("input", (e) => {
  groomsName.innerHTML = e.target.value;
});

const surname = document.getElementById("surname-invitation");
document.getElementById("surname").addEventListener("input", (e) => {
  surname.innerHTML = e.target.value;
});

const date = document.getElementById("wedding-date");
document.getElementById("date").addEventListener("input", (e) => {
  date.innerHTML = e.target.value;
});

const eventTime = document.getElementById("event-start-time");
document.getElementById("eventTime").addEventListener("input", (e) => {
  eventTime.innerHTML = e.target.value;
});

const venueName = document.getElementById("venue-name");
document.getElementById("venueName").addEventListener("input", (e) => {
  venueName.innerHTML = e.target.value;
});

const venueAddress = document.getElementById("venue-address");
document.getElementById("venueAddress").addEventListener("input", (e) => {
  venueAddress.innerHTML = e.target.value;
});