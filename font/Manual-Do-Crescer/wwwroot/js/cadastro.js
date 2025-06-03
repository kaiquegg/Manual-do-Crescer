let tipoUsuario;
tipoUsuario = document.getElementById('tipoUsuario').value;

document.getElementById('paisBtn').addEventListener('click', function () {
    this.classList.add('selecionado');
    document.getElementById('setaPais').classList.add('selecionado');

    document.getElementById('btnCadastro').classList.remove('selecionado');

    document.getElementById('profissionalBtn').classList.remove('selecionado');
    document.getElementById('setaProfissional').classList.remove('selecionado');

    // Troca a cor de fundo dos elementos .contato-dados e .contato-formulario

    document.querySelector('.contato-formulario').style.backgroundColor = '#4BBADD';
});

document.getElementById('profissionalBtn').addEventListener('click', function () {
    this.classList.add('selecionado');
    document.getElementById('setaProfissional').classList.add('selecionado');
    document.getElementById('btnCadastro').classList.add('selecionado');

    document.getElementById('paisBtn').classList.remove('selecionado');
    document.getElementById('setaPais').classList.remove('selecionado');

    // Troca a cor de fundo dos elementos .contato-dados e .contato-formulario

    document.querySelector('.contato-formulario').style.backgroundColor = '#9F84FF';
});

function selecionarAba(elemento) {
    // Remove a classe 'selecionado' de todos os elementos .user-type
    let abas = document.querySelectorAll('.user-type div');
    abas.forEach(aba => {
        aba.classList.remove('selecionado');
    });
    // Adicionar o valor para o selecionado
    tipoUsuario = elemento.id === 'paisBtn' ? 'pais' : 'profissional';
    console.log("tipoUsuário: ", tipoUsuario)
    document.getElementById('tipoUsuario').value = tipoUsuario;
    

    // Adiciona a classe 'selecionado' apenas ao elemento clicado
    elemento.classList.add('selecionado');

    // Verifica qual aba está selecionada e troca a cor de fundo dos elementos .contato-dados e .contato-formulario
    if (elemento.id === 'paisBtn') {
        document.querySelector('.contato-formulario').style.backgroundColor = '#9F84FF';
    } else if (elemento.id === 'profissionalBtn') {
        document.querySelector('.contato-formulario').style.backgroundColor = '#D47833';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona a classe 'selecionado' ao botão .pais
    document.getElementById('paisBtn').classList.add('selecionado');
});


