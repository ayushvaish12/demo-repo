//Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {

    //Create a Date object from input value
  let startDate = new Date(document.getElementById("startDate").value);
  let days = document.getElementById("days").value;
  if(isNaN(days)) {
    console.log("Value provided for \"days\" was not a number");
    return
}
if(!(startDate instanceof Date)) {
    console.log("Value provided for \"startDate\" was not a Date object");
    return
}
// Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
var dow = startDate.getDay();
console.log(dow);
var daysToAdd = parseInt(days);
console.log(daysToAdd);
// If the current day is Sunday add one day
if (dow == 0)
    daysToAdd++;
// If the start date plus the additional days falls on or after the closest Saturday calculate weekends
if (dow + daysToAdd >= 6) {
    //Subtract days in current working week from work days
    var remainingWorkDays = daysToAdd - (5 - dow);
    //Add current working week's weekend
    daysToAdd += 2;
    if (remainingWorkDays > 5) {
        //Add two days for each working week by calculating how many weeks are included
        daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
        //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
        if (remainingWorkDays % 5 == 0)
            daysToAdd -= 2;
    }
}
  startDate.setDate(startDate.getDate() + daysToAdd-1);
  console.log(startDate);
  output.innerHTML = `The new working day will be <span>${startDate}</span>`;
});