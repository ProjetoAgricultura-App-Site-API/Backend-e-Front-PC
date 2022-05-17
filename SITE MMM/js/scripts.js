class Validator{

    constructor(){
        this.validations = [

            'data-min-length'

        ]
    }

    //iniciar a validação de todos os campos
    validate(form){

        //pegar os inputs
        let inputs = document.getElementsByName('input');

        //transforma HTMLcollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação no que for encontrado
        inputsArray.forEach(function(input) {
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){

                if(input.getAttribute(this.validations[i]) != null){

                }

            }
        }, this);

    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);



} ) 