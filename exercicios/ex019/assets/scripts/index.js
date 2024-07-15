class Form {
    constructor() {
        this.main = document.querySelector('main')
    };
    
    pegaClique() {
        document.addEventListener('click', (event) => {
            let clic = event.target;

            if(clic.classList.contains('send')) {
                event.preventDefault();
                const inputs = this.main.querySelectorAll('input');
               inputs.forEach(element => {
                    console.log(element.value);
            
                const nome = this.main.querySelector('.nome');
                const contenudoNome = nome.value;
           
                if (contenudoNome.length > 5) {
                    console.log('muito grande');
                };
               });
            };
        });
    };

    nome(texto) {
        console.log(texto);
    };
    
};

const form = new Form();

form.pegaClique();