const Ashish= document.querySelector(`.btn`);
const Utkarsh=  document.querySelector(`.tasks`);
const yoyo= document.querySelector(`#task`)
const Utkarshh = () =>{
    Utkarsh.textContent+= yoyo.value;
    yoyo.value = ``
}

Ashish.addEventListener(`click`, Utkarshh );

yoyo.addEventListener(`keypress`, function (event){
    if(event.keyCode===13){
        Utkarshh();
    }
}
)