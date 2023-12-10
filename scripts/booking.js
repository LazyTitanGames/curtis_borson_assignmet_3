/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded?
    // Yes
// When do they need to be reset or updated?
    // They should be reset when the clear days button is clicked and updated any time a button is clicked.

let cost_per_day = 35;
let num_of_days = 0;
const monday = document.getElementById("monday");         monday.addEventListener("click", is_clicked);
const tuesday = document.getElementById("tuesday");       tuesday.addEventListener("click", is_clicked);
const wednesday = document.getElementById("wednesday");   wednesday.addEventListener("click", is_clicked);
const thursday = document.getElementById("thursday");     thursday.addEventListener("click", is_clicked);
const friday = document.getElementById("friday");         friday.addEventListener("click", is_clicked);
const full = document.getElementById("full");             full.addEventListener("click", full_day);
const half = document.getElementById("half");             half.addEventListener("click", half_day);
const clear = document.getElementById("clear-button");    clear.addEventListener("click", clear_days);
const days = [monday, tuesday, wednesday, thursday, friday];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function is_clicked()
{
    if (this.classList.contains("clicked") && this !== clear)
    {
        this.classList.remove("clicked");
        num_of_days -= 1;
    }
    else if (!this.classList.contains("clicked") && this !== clear)
    {
        this.classList.add("clicked");
        num_of_days += 1;
    }
    calculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_days()
{
    for (const day of days)
    {
        if (day.classList.contains("clicked"))
        {
            day.classList.remove("clicked");
        }
    }
    num_of_days = 0;
    calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day()
{
    half.classList.add("clicked");
    full.classList.remove("clicked");
    cost_per_day = 20;
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day()
{
    full.classList.add("clicked");
    half.classList.remove("clicked");
    cost_per_day = 35;
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

let display_price = document.getElementById("calculated-cost");

function calculate()
{
    display_price.innerHTML = cost_per_day * num_of_days;
}