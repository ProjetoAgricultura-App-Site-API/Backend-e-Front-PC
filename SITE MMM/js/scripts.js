class Validator(){

    constructor(){
        this.validations[

        ]
    }

    //iniciar a validação de todos os campos

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);



} ) 