class Form {
    constructor() {
        this.main = document.querySelector('main')
    };

    pegaClique() {
        document.addEventListener('click', (event) => {
            let clic = event.target;
            
            if (clic.classList.contains('send')) {
                event.preventDefault();
                let nome = this.escolheClasse('.nome');
                let apelido = this.escolheClasse('.apelido');
                let cpf = this.escolheClasse('.cpf');
                let user = this.escolheClasse('.usuario');
                let senha = this.escolheClasse('.senha');
                let repetir = this.escolheClasse('.repetirSenha');

                if (nome.length === 0 ) {
                    this.escreveErro('.nomeErrado', 'Precisa de introduzir um nome!');
                };
                if (apelido.length === 0) {
                    this.escreveErro('.apelidoErrado', 'Precisa de introduzir um apelido!')
                };
                if (user.length < 3 || user.length > 12) {
                    this.escreveErro('.userErrado', 'Usuário tem de ter entre 3 a 12 letras!')
                    console.log(senha)
                };
                if (senha !== repetir) {
                    this.escreveErro('.repetirErrado', 'As senhas não coincidem!')
                };

                if (senha < 6 || senha > 12) {
                    this.escreveErro('.senhaErrado', 'Senha tem de ter entre 3 a 12 letras!')
                };
            };
        });
    };

    escolheClasse(classe) {
        const nome = this.main.querySelector(classe);
        return nome.value;
    };

    escreveErro(classe, erro) {
        const nome = document.querySelector(classe);
        const p = document.createElement('p');
        p.classList.add('erro');
        p.textContent = erro;
        nome.append(p);
    };

    nome(texto) {
        console.log(texto);
    };

};

const form = new Form();

form.pegaClique();