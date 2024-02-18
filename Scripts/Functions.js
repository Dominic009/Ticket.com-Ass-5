

function selectedButton(elementClass){
    const divs = document.querySelectorAll('.selected');

for (let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        this.style.backgroundColor = '#1DD100';
    })
 }
}

selectedButton('.selected');