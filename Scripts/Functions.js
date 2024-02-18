

// function selectedButton(elementClass){
//     const divs = document.querySelectorAll(elementClass);

// for (let i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', function(){
//         this.style.backgroundColor = '#1DD100';
        
//         let playerPressed = parseInt(this.innerText)
//         const userPress = playerPressed + 1;
//         console.log(typeof userPress, userPress)
//     })
//  }
// }

// selectedButton('.selected');

function seatSelection(){
const seats = document.querySelectorAll('.selected');
const totalSeats = document.getElementById('total-seats');


for (let i = 0; i < seats.length; i++){
    let seat = seats[i];
    
    seat.addEventListener('click', function selectSeat(){

        let countOfSeats = parseInt(totalSeats.innerText) || 0;

        if(countOfSeats < 4){
            seat.style.backgroundColor = '#1DD100';
            countOfSeats++;
            totalSeats.innerText = countOfSeats;
        }else{
            seat.removeEventListener('click', selectSeat())
        }
        
        const id = document.getElementById('Available-seats');
        let availableSeats = getInnerText('Available-seats');
        availableSeats--;

        id.innerText = availableSeats;




        // console.log(countOfSeats);

    })
}
}

function getInnerText(elementid){
    const text = document.getElementById(elementid).innerText;
    const stringToNumber = parseInt(text);

    return stringToNumber;
}

function setTextValue(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}


seatSelection();
setTextValue('total-seats', 0);