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

submitButton.addEventListener('click', () => {
    if(day.value === '') {
        day.classList.add('error');
        labels[0].classList.add('error');
        errorMessageDay.textContent = 'This field is required';
    }
    
    if(month.value === '') {
        month.classList.add('error');
        labels[1].classList.add('error');
        errorMessageMonth.textContent = 'This field is required';
    }

    if(year.value === '') {
        year.classList.add('error');
        labels[2].classList.add('error');
        errorMessageYear.textContent = 'This field is required';
    }

    var dayisValid = validateDay();
    var monthIsValid = validateMonth();
    var yearIsValid = validateYear();
})


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

    var maxDay;
    if(month.value == 2) {
        maxDay =29;
    } else if (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
        maxDay = 30;
    } else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        maxDay = 31;
    }

    if(day.value > maxDay) {
        day.classList.add('error');
        month.classList.add('error');
        year.classList.add('error');
        for(var i=0; i<3; i++) {
            labels[i].classList.add('error');
        }
        errorMessageDay.textContent = 'Must be a valid date';
        return false;
    } else {
        month.classList.remove('error');
        labels[1].classList.remove('error');
        year.classList.remove('error');
        labels[2].classList.remove('error');
        return true;
    }
}


// validate the month
month.addEventListener('input', validateMonth);
function validateMonth() {
    if(month.value != '') {
        month.classList.remove('error');
        labels[1].classList.remove('error');
        errorMessageMonth.textContent = '';
    }

    if(month.value > 12 || month.value < 1) {
        month.classList.add('error');
        labels[1].classList.add('error');
        errorMessageMonth.textContent = 'Must be a valid month';
        return false;
    }
    validateDay(month.value);
    return true;
}

// validate the year
var resltYearValue;
year.addEventListener('input', validateYear);
function validateYear() {
    if(year.value != '') {
        year.classList.remove('error');
        labels[2].classList.remove('error');
        errorMessageYear.textContent = '';
    }

    if(year.value > 2024) {
        year.classList.add('error');
        labels[2].classList.add('error');
        errorMessageYear.textContent = 'Must be in the past';
        return false;
    }
    return true;
}