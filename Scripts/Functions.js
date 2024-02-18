const divs = document.querySelectorAll('.selected');

divs.forEach(function(div){
    div.addEventListener('click', function(){
        this.style.backgroundColor = 'red';
    })
})
