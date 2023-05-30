const inputField = document.getElementById('formInputField');

inputField.addEventListener('click', (event) => {
    inputField.style.outline = '2px solid #34cbcb';
    inputField.style.border = '2px solid #34cbcb';
});

inputField.addEventListener('blur', (event) => {
    inputField.style.outline = 'none';
    inputField.style.border = '2px solid grey';
})

const greeting = () => 
{
    const messageField = document.getElementById('messageField');

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    // console.log(currentDay);
    let currentDayName;
    let leftDay;
    
    switch(currentDay)
    {
        case 1:
            currentDayName = 'monday';
            break;
        case 2:
            currentDayName = 'tuesday';
            break;
        case 3:
            currentDayName = 'wednesday';
            break;
        case 4:
            currentDayName = 'thursday';
            break;
        case 5:
            currentDayName = 'friday';
            break;
        case 6:
            currentDayName = 'saturday';
            break;
        case 7:
            currentDayName = 'sunday';
            break;
    }
    
    // console.log(currentDay, currentDayName);
    
    let name = inputField.value ? inputField.value : 'user';
    // console.log(name);
    
    if(currentDay < 6 && currentDay !== 5)
    {
        leftDay = 6 - currentDay;
        messageField.innerText = `Hi ${name} 👋️. Today is ${currentDayName} and there are only ${leftDay} days left until weekend!`;
        inputField.value = ' ';
        
    }
    else if(currentDay === 5)
    {
        leftDay = 6 - currentDay;
        messageField.innerText = `Hi ${name} 👋️. Today is ${currentDayName} and there is only ${leftDay} day left until weekend!`;
        inputField.value = ' ';
        
    }
    else
    {
        messageField.innerText = `Hi ${name} 👋️. Today is ${currentDayName}, it's weekend!`;
        inputField.value = ' ';
    }
}

const button = document.getElementById('button');
button.addEventListener('click', greeting);
