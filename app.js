function getInput(event){
    event.preventDefault();

    let name = document.getElementById("fullname").value;
    let bd = document.getElementById("bd").value;
    let gender = getGender();
    let tel = document.getElementById("phone").value;
    let grade = document.getElementById("grade");
    let check = grade.options[grade.selectedIndex].text;
    const phonepatt= /^(?:\+962|0)(7[789]|8[0123456789])[0-9]{7}$/;
    let table = document.getElementById("table");
    let tableBody = document.getElementById("table-body");
    let newRow = tableBody.insertRow(tableBody.rows.length)
    
  
    let cel1 = newRow.insertCell(0);
	let cel2 = newRow.insertCell(1);
	let cel3 = newRow.insertCell(2);
	let cel4 = newRow.insertCell(3);
	let cel5 = newRow.insertCell(4);
    
    if(phonepatt.test(tel) == false)
    {
        document.getElementById("phone_alert").innerHTML = "Numbers only Allowed";
        document.getElementById("phone_alert").style.color = "red";
    }
	cel1.innerHTML = name;
	cel2.innerHTML = bd;
	cel3.innerHTML = gender;
	cel4.innerHTML = tel;
	cel5.innerHTML = check;
			
}
function getGender()
{
    let f = document.getElementById("female").checked;
    let m = document.getElementById("male").checked;


    if( f )
    {
        return "Female";
    }else if(m)
    {
       return "Male";
    }
    return "";			
}
// document.getElementById("table").addEventListener("submit", getInput);