# Frontend Mentor - Age calculator app

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Demo](#demo)
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Demo

https://yamami-mohammed-monsif.github.io/fm--age-calculator-app/

## Description

This repository contains the HTML, CSS, and JavaScript code for an age calculator app. The app allows users to input their birthdate (day, month, and year) and calculates their age in years, months, and days. Input fields include validation to ensure correct input format. Upon submission, the app calculates the age and displays the result dynamically on the page. The layout is clean and minimalistic, utilizing the Poppins font for typography. The app is designed to be user-friendly and provide a simple tool for calculating age accurately.

## Features

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Technologies Used

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow