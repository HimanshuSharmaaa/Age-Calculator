let UserInput = document.querySelector('#CurrentDate');
console.log(UserInput);
UserInput.max = new Date().toISOString().split('T')[0];
console.log(UserInput.max);
let submitBtn = document.querySelector('#submitBtn');
let inputContainer = document.querySelector('.input-container');


submitBtn.addEventListener('click' , function(e){
    if(UserInput.value==null || UserInput.value==''){  
        alert("**Choose a date please!");
    }   
    else{

    // UserInput values 
    let dob = new Date(UserInput.value);
    console.log(dob);
    let dobYear = dob.getFullYear();
    console.log(dobYear);
    let dobMonth = dob.getMonth() + 1;
    console.log(dobMonth);
    let dobDay = dob.getDate();
    console.log(dobDay);

    // Current values 
    let Current = new Date();
    console.log(Current);
    let CurrentYear = Current.getFullYear();
    console.log(CurrentYear);
    let CurrentMonth = Current.getMonth() + 1;
    console.log(CurrentMonth);
    let CurrentDay = new Date().getDate();
    console.log(CurrentDay);
    // difference

    let Year = CurrentYear - dobYear;
    let Month;
    let Day;
    if(CurrentMonth >= dobMonth){
        Month = CurrentMonth - dobMonth;
    }
    else{
        CurrentYear--;
        Month = 12 + CurrentMonth - dobMonth;
    }
    
    if(CurrentDay >= dobDay){
        Day = CurrentDay - dobDay;
    }
    else{
        Month--;
        Day = 31 + CurrentDay - dobDay;
        if (Month < 0) {
            Month = 11;
            Year--;
        }
    }
    let Heading = document.createElement('h2');
    Heading.innerText = `You are ${Year} years , ${Month} month , ${Day} days old.`;
    Heading.classList.add('resultHeading');
    inputContainer.appendChild(Heading);
    }

},false);

