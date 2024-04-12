var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');

var labels = document.getElementsByTagName('label');

var errorMessageDay = document.getElementById('errorMessageDay');
var errorMessageMonth = document.getElementById('errorMessageMonth');
var errorMessageYear = document.getElementById('errorMessageYear');

var resultDay = document.getElementById('result-day');
var resultMonth = document.getElementById('result-month');
var resultYear = document.getElementById('result-year');

var submitButton = document.getElementById('submitButton');


// validate the day
day.addEventListener('input', validateDay);
function validateDay(monthInput) {
    if(day.value != '') {
        day.classList.remove('error');
        labels[0].classList.remove('error');
        errorMessageDay.textContent = '';
    }

    if(day.value > 31 || day.value < 1) {
        day.classList.add('error');
        labels[0].classList.add('error');
        errorMessageDay.textContent = 'Must be a valid day';
        return false;
    }
}