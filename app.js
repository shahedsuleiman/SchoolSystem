class Student { 
    constructor(fullName, db, gender, major, imageURL, phoneNumber) {
        this.fullName = fullName;
        this.db = db;
        this.gender = gender;
        this.major = major;
        this.imageUrl = imageURL;
        this.phoneNumber = phoneNumber;
    } 
}

let students = JSON.parse(localStorage.getItem('students')) || [];
let cards = document.getElementById('cardContainer');
    
function getInput(event){
    event.preventDefault();

    let name = document.getElementById("fullname").value;
    let bd = document.getElementById("bd").value;
    let gender = getGender();
    let tel = document.getElementById("phone").value;
    let imageUrl = document.getElementById("imageUrl").value;
    let major = document.getElementById("major").value;
    
    const phonepatt = /^(?:\+962|0)(7[789]|8[0123456789])[0-9]{7}$/;

    if (!phonepatt.test(tel)) {
        alert("Invalid phone number");
        return;
    }

    let std = new Student(name, bd, gender, major, imageUrl, tel);

    students.push(std);
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    
}

function displayStudents() {
    cards.innerHTML = ''; 

    students.forEach(function(std) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img  style="width:250px;height:200px; " src="${std.imageUrl}" alt="${std.fullName}">
            <h2>${std.fullName}</h2>
            <p>Major: ${std.major}</p>
            <p>Phone Number: ${std.phoneNumber}</p>
        `;
        cards.appendChild(card);
    });

}

function getGender() {
    let f = document.getElementById("female").checked;
    let m = document.getElementById("male").checked;

    if (f) {
        return "Female";
    } else if (m) {
        return "Male";
    }
    return "";
}


// document.getElementById("table").addEventListener("submit", getInput);
