

function selectedButton(elementClass){
    const divs = document.querySelectorAll(elementClass);

for (let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        this.style.backgroundColor = '#1DD100';
        
        let playerPressed = parseInt(this.innerText)
        const userPress = playerPressed + 1;
        console.log(typeof userPress, userPress)
    })
 }
}

selectedButton('.selected');
