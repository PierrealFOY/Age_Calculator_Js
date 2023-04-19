
// We set the dayInput and the limit of the dayInput //
let dayInput = document.getElementById('dayInput');
if (dayInput.value < 1 && dayInput.value > 31) {
    console.error('Please enter a number between 1 and 31');
}
dayInput.addEventListener('input', calculateAge); {


// ---------------------------- //
// We set the monthInput and the limit of the monthInput //
let monthInput = document.getElementById('monthInput');
if (monthInput.value < 1 && monthInput.value > 12) {
    console.error('Please enter a number between 1 and 12');
}
monthInput.addEventListener('input', calculateAge);


// ---------------------------- //
// We set the yearInput and the limit of the yearInput //
let yearInput = document.getElementById('yearInput');
if (yearInput.value > 2023) {
    console.error('Please enter a number before 2023');
}
yearInput.addEventListener('input', calculateAge);


function calculateAge() {
    // We get the values of the inputs //
    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    // We set the outputs with the new input datas //
    document.getElementById('daysOutput').innerHTML = day;
    document.getElementById('monthsOutput').innerHTML = month;
    document.getElementById('yearsOutput').innerHTML = year;

    // We calculate the age //
    let date = new Date(year, month - 1, day);
    let today = new Date();
    let diff = today - date;

    // Calculate the age in days //
    let ageInDays = Math.floor(diff / 86400000);

    // Calculate the age in years //
    let ageInMonths = Math.floor(diff / 2592000000);

    // Calculate the age in years //
    let ageInYears = Math.floor(diff / 31536000000);

    document.getElementById('daysOutput').innerHTML = ageInDays;
    document.getElementById('monthsOutput').innerHTML = ageInMonths;
    document.getElementById('yearsOutput').innerHTML = ageInYears;

    return;
}

}
