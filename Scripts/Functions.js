/* --------------------------------New code start-------------------------------- */


interactive();
setInnerText('total-price', 0);

// Function for calling the logics
function interactive(){

    getUserClick();
}



// Function for getting the user click
function getUserClick(){
    const elements = document.querySelectorAll('.selected');
    elements.forEach(element =>{
        element.addEventListener('click', function(){
            const elementText = element.innerText;
            setBgColor(element);
            element.setAttribute('disabled', 'disabled');  // to disable a button after clicking once
            getSelectedSeats(elementText)


            
            const elem = document.getElementById('total-seats');
            const text = elem.innerText;
            let convert = parseInt(text);
            convert = convert + 1;
            elem.innerText = convert;


            const elem2 = document.getElementById('Available-seats');
            const text2 = elem2.innerText;
            let convert2 = parseInt(text2);
            convert2 = convert2 - 1;
            elem2.innerText = convert2;
        });
    });
};


// Function for setting the background of an element or with any value that will be passed
function setBgColor(value){
    if(getUserClick){
        value.style.backgroundColor = 'lightGreen';
    };
};


// Get users selected seat number in the billing section
function getSelectedSeats(value){
    const container = document.getElementById("selected-seat-container");
    
    const ul = document.createElement('ul');
    ul.style.display = 'flex';
    ul.style.justifyContent = 'space-between';
    const li = document.createElement('li');
    const li2 = document.createElement('li');

    const price = 550;
    const li3 = document.createElement('li');
    li3.innerText = price;

    
    li.innerText = value;
    li2.innerText = "Economy";
    
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    container.appendChild(ul);

};



// Set dynamic inner text
function setInnerText(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}




// Function for total cost
function totalCost(value1, value2){
    const cost = value1 + value2;

    return cost;
}

// get inner text
function getInnerText(elementid){
    const element = document.getElementById(elementid);
    const text = element.innerText;
    const convert = parseInt(text);

    console.log(convert);
}













/* --------------------------------New code end-------------------------------- */







// Navigation bar "Bus" button is functional
// Total seats update
// User can not select more than 4 seats
// Seat quantity update in billing section
// Dynamically added seat details
// User have to provide their details (espcially correct phone number) to be able to click the "NEXT" button


// function seatSelection(){
// const seats = document.querySelectorAll('.selected');
// const totalSeats = document.getElementById('total-seats');


// for (let i = 0; i < seats.length; i++){
//     let seat = seats[i];
    
//     seat.addEventListener('click', function selectSeat(e){

//         const text = e.target.parentNode.childNodes[1].innerText;
//         const selectedContainer = document.getElementById('seat-number-container');
//         selectedContainer.innerText = text;


//         let countOfSeats = parseInt(totalSeats.innerText) || 0;

//         const id = document.getElementById('Available-seats');
//         let availableSeats = getInnerText('Available-seats');
//         availableSeats--;

//         id.innerText = availableSeats;

        
//         if(countOfSeats < 4){
//             seat.style.backgroundColor = '#1DD100';
//             countOfSeats++;
//             totalSeats.innerText = countOfSeats;
//             getQuery(seat, 'p');
//         }
//         else{
//           return seat.removeEventListener('click', selectSeat);
//         }
        
//     })
// }
// }



// function getInnerText(elementid){
//     const text = document.getElementById(elementid).innerText;
//     const stringToNumber = parseInt(text);

//     return stringToNumber;
// }

// function setTextValue(elementid, value){
//     const element = document.getElementById(elementid);
//     element.innerText = value;
// }

// function getClassInnerText(elementTag){
//     const element = seat.querySelector(elementTag).innerText;
//     console.log(element)
// }



// function getQuery(element, elementTag){
//    const get = element.querySelector(elementTag).innerText;
   
//    const getSeatNumber = document.getElementById('seat-number');
//    const text = getSeatNumber.innerText;
//    console.log(text)
//    text.innerText = get;
// }



// //Phone number validation to make next button work

// const inputNumber = document.getElementById('phone-number');
// const button = document.getElementById('next-button');

// function validateNumber(number){
//     let phoneRegex = /^\d{11}$/;
//    return phoneRegex.test(number)

// }

//     inputNumber.addEventListener('input', function(){
//         let phoneNumber = inputNumber.value;
//         const isValidNumber = validateNumber(phoneNumber);

//         if(isValidNumber){
//             button.removeAttribute('disabled');
//         }else{
//             button.setAttribute('disabled', 'disabled');
//         }

//     })


//     function removeClass(elementid, value){
//         const element = document.getElementById(elementid);
//         element.classList.remove(value);
//     };


// validateNumber();
// seatSelection();
// setTextValue('total-seats', 0);
// setTextValue('total-price', 0);
// setTextValue('grand-total', 0);