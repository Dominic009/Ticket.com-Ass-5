/* --------------------------------New code start-------------------------------- */

// Function for getting the user click
function getUserClick(){
    const elements = document.querySelectorAll('.selected');

    elements.forEach(element =>{
        element.addEventListener('click', function(){
            const elementText = element.innerText;
            console.log(elementText);
            setBgColor(element);
            element.setAttribute('disabled', 'disabled');  // to disable a button after clicking once
        });
    });
};

getUserClick()

// Function for setting the background of an element or with any value that will be passed
function setBgColor(value){
    if(getUserClick){
        value.style.backgroundColor = 'lightGreen';
    }
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