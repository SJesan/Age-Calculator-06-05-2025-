const today = document.querySelector('#today');
const sAge = document.querySelector('#sAge');
const sBdate = document.querySelector('#sBdate');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const date = new Date();
const year = date.getFullYear();

//show date
const month = String(date.getMonth() + 1).padStart(2 , "0");
const day = String(date.getDate()).padStart(2 , "0");  
const formattedDate = `${day} - ${month} - ${year}`;
today.innerHTML = formattedDate;

btn.addEventListener("click", () => {
    const bDate = new Date(input.value);
    const now = new Date();
    
    // Check valid
    if (isNaN(bDate) || bDate > now) {
      alert("The birth date cannot be in the future or Empty!  Please enter a valid date!");
      sAge.innerHTML = "Invalid date!";  
      sBdate.innerHTML = "Invalid"; 
      return;
    }

    let birthYear = bDate.getFullYear();
    let birthMonth = String(bDate.getMonth() + 1).padStart(2, "0");  
    let birthDay = String(bDate.getDate()).padStart(2, "0");  
    
    let currentYear = now.getFullYear();
    let currentMonth = String(now.getMonth() + 1).padStart(2, "0"); 
    let currentDay = String(now.getDate()).padStart(2, "0"); 

    let year = currentYear - birthYear;
    let month = currentMonth - birthMonth;
    let day = currentDay - birthDay;

    // Adjust month/day
    if (day < 0) {
      month -= 1;
      const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      day += daysInLastMonth;
    }

    if (month < 0) {
      year -= 1;
      month += 12;
    }

    // Calculate the difference in hours
    let birthDateTime = new Date(birthYear, bDate.getMonth(), bDate.getDate(), bDate.getHours(), bDate.getMinutes());
    let diffTime = now - birthDateTime;  
    let diffHours = (Math.floor(diffTime / (1000 * 60 * 60))) % 24;  // Convert to hours

    // Update the content and show the birth date
    sAge.innerHTML = `${year} Years, ${month} Months, ${day} Days, ${diffHours} Hours`;
    sBdate.innerHTML = `${birthDay} - ${birthMonth} - ${birthYear}`;  

    
    document.querySelector('#sAge').parentElement.classList.remove('invisible');
    document.querySelector('#sBdate').parentElement.classList.remove('invisible');

    input.value = ""; 
});
