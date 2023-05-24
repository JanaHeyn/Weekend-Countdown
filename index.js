const greeting = () => 
{
    const inputField = document.getElementById('formInputField');
    const greetingField = document.getElementById('greetingField');

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
    
    if(currentDay < 6)
    {
        leftDay = 6 - currentDay;
        greetingField.innerText = `Hi ${name}. Today is ${currentDayName} and there are only ${leftDay} days left until the weekend!`
        inputField.value = ' ';
        
    }
    else if(currentDay === 5)
    {
        leftDay = 6 - currentDay;
        greetingField.innerText = `Hi ${name}. Today is ${currentDayName} and there is only ${leftDay} day left until the weekend!`
        inputField.value = ' ';
        
    }
    else
    {
        greetingField.innerText = `Hi ${name}. It is ${currentDayName}. and therefore weekend!`
        inputField.value = ' ';
    }
}

const button = document.getElementById('button');
button.addEventListener('click', greeting);