/* Jornada/Timeline */
function selectDot(dotId) {
    // Remove a classe 'selected' de todas as bolinhas
    var allDots = document.querySelectorAll('.dot');
    allDots.forEach(function (dot) {
        dot.classList.remove('selected');
    });

    // Adiciona a classe 'selected' apenas à bolinha com o ID correspondente
    var selectedDot = document.getElementById(dotId);
    selectedDot.classList.add('selected');

    // Atualiza o conteúdo dos cards com base no dot selecionado
    updateCardContent(dotId);
}

//Conteúdo Jornada

const jornadaData = {
    dot1: {
        title: '15 DIAS',
        content: 'A visão do seu bebê é limitada, focando melhor em objetos que estão a 20-30 cm de distância — aproximadamente a distância entre o rosto do bebê e o de quem o está segurando.',
    },
    dot2: {
        title: '1 MÊS',
        content: 'Bebês de um mês podem começar a sorrir socialmente, não apenas como reflexo, o que é um marco inicial importante na comunicação e no desenvolvimento emocional.',
    },
    dot3: {
        title: '2 MESES',
        content: 'Aos dois meses, muitos bebês já conseguem levantar a cabeça e o peito brevemente quando estão de barriga para baixo, mostrando fortalecimento muscular inicial.',
    },
    dot4: {
        title: '3 MESES',
        content: 'Curiosidade sobre o bebê aos 3 meses.',
    },
    dot5: {
        title: '6 MESES',
        content: 'Curiosidade sobre o bebê aos 6 meses.',
    },
    dot6: {
        title: '1 ANO',
        content: 'Curiosidade sobre o bebê ao completar 1 ano.',
    },
    dot7: {
        title: '2 ANOS',
        content: 'Curiosidade sobre o bebê aos 2 anos.',
    }
};


// Cards
// Conteudo dos Cards

const cardData = {
    dot1: [
        {
            title: "Sono",
            subtitle: "Ciclos de Sono: Como Seu Bebê Dorme Durante o Dia",
            content: "Nos primeiros 15 dias, o sono do bebê é irregular, com períodos que variam entre 16 a 20 horas por dia, distribuídos em várias pequenas sonecas. É importante observar os sinais de sono do bebê, como esfregar os olhos ou bocejar, e criar um ambiente propício ao sono, com uma temperatura confortável, ambiente calmo e pouco estímulo visual. Durante o sono, os bebês passam por ciclos de sono leve, sono profundo e sono REM, sendo essencial permitir que o bebê complete esses ciclos para um sono reparador."
        },
        {
            title: "Troca de fraldas",
            subtitle: "Guia Prático para Fraldas e Banhos no Primeiro Mês",
            content: "Espere trocar de seis a oito fraldas por dia. Nos primeiros dias, as fezes serão escuras e pegajosas, chamadas de mecônio, mas isso é normal e sinal de que os intestinos estão funcionando corretamente. É importante trocar a fralda do bebê sempre que estiver molhada ou suja para evitar irritações na pele. Ao trocar a fralda, limpe delicadamente a área genital do bebê com lenços umedecidos ou algodão e água morna, e aplique uma fina camada de creme protetor contra assaduras para prevenir irritações."
        },
        {
            title: "Alimentação",
            subtitle: "Primeiras Escolhas Nutricionais: Amamentar ou Fórmula?",
            content: "Nos primeiros dias, a amamentação pode ser desafiadora, mas é crucial para a nutrição e o vínculo entre mãe e bebê. Procure ajuda se tiver dificuldades, como consultoras de amamentação ou enfermeiras especializadas em lactação. Durante a amamentação, é importante garantir uma boa posição e pega correta para evitar fissuras no mamilo e garantir uma alimentação eficaz para o bebê. Se optar por alimentar com fórmula, siga as instruções de preparo corretamente e escolha uma fórmula adequada para a idade do bebê."
        },
        {
            title: "Brincadeiras",
            subtitle: "Brincando com o Bebê: Dicas para Estimular e Divertir",
            content: "Nesta fase, o contato visual e conversar com o bebê são formas eficazes de estimulação. Além disso, brinquedos com cores contrastantes, texturas diferentes e sons suaves podem chamar a atenção do bebê e estimular seus sentidos. A partir do segundo mês, atividades como colocar o bebê de bruços sob supervisão, balançar suavemente brinquedos pendurados acima do bebê e cantar canções de ninar podem ajudar a fortalecer os músculos do pescoço, desenvolver habilidades motoras e promover o vínculo entre pais e bebê."
        },
        {
            title: "Desafios",
            subtitle: "Sistema Digestivo em Formação: Paciência e Observação Necessárias",
            content: "É comum bebês terem gases e cólicas nesse período devido à imaturidade do sistema digestivo. Medidas como movimentos suaves, massagem na barriga em sentido horário e aplicação de calor local podem ajudar a aliviar o desconforto. Além disso, observe os sinais de desconforto do bebê, como choro excessivo, pernas encolhidas e rosto avermelhado, e tente identificar possíveis gatilhos, como alimentos na dieta da mãe, para evitar futuros episódios de cólicas."
        },
        {
            title: "Segurança no Lar",
            subtitle: "Dicas Essenciais para Manter seu Bebê Seguro",
            content: "A segurança no lar é fundamental à medida que seu bebê começa a explorar. Certifique-se de: Primeiro, instalar grades de segurança nas escadas para evitar quedas. Segundo, usar protetores nas tomadas para prevenir choques elétricos. Terceiro, manter produtos de limpeza e medicamentos fora do alcance do bebê, preferencialmente em armários trancados. E por último, assegurar que o ambiente seja seguro para a fase de engatinhar e andar, removendo objetos pequenos que possam ser engolidos, fixando móveis instáveis e colocando protetores em quinas afiadas."
        }
        
    ],
    
    dot2: [
        {
            title: "Sono",
            subtitle: "Estabelecendo um padrão de sono mais consistente",
            content: "Aos 1 mês, os bebês começam a ter um padrão de sono mais previsível, embora ainda acordem frequentemente durante a noite."
        },
        {
            title: "Troca de fraldas",
            subtitle: "Gerenciando a mudança na rotina de trocas",
            content: "Você notará uma mudança na frequência e consistência das fezes à medida que o sistema digestivo do bebê amadurece."
        },
        {
            title: "Alimentação",
            subtitle: "Amamentação e primeiros desafios alimentares",
            content: "Neste ponto, o bebê pode começar a ter intervalos de alimentação mais longos, de 3 a 4 horas entre as mamadas."
        },
        {
            title: "Brincadeiras",
            subtitle: "Explorando novas formas de interação",
            content: "Introduza brinquedos com cores contrastantes e diferentes texturas para estimular a visão e o tato."
        },
        {
            title: "Desafios",
            subtitle: "Observando as primeiras mudanças de comportamento",
            content: "Continue observando as respostas do bebê a diferentes alimentos, especialmente se estiver amamentando, pois sua dieta pode afetar o bebê."
        },
        {
            title: "Segurança no Lar",
            subtitle: "Adaptando a casa para um bebê em crescimento",
            content: "A segurança no lar é fundamental à medida que seu bebê começa a explorar. Certifique-se de: \n- Instalar grades de segurança nas escadas. \n- Usar protetores nas tomadas. \n- Manter produtos de limpeza e medicamentos fora do alcance. \n- Assegurar que o ambiente seja seguro para a fase de engatinhar e andar."
        }
    ],
    dot3: [
        {
            title: "Sono",
            subtitle: "Melhora na qualidade e duração do sono noturno.",
            content: "Com 2 meses, muitos bebês começam a dormir por períodos mais longos à noite, alguns podendo dormir até 5-6 horas seguidas."
        },
        {
            title: "Troca de fraldas",
            subtitle: "Mudanças nas fraldas: o que muda aos dois meses?",
            content: "Neste estágio, as fezes começam a se firmar um pouco mais, e a frequência pode diminuir, o que é normal."
        },
        {
            title: "Alimentação",
            subtitle: "Nutrição em evolução: primeiros sinais de satisfação.",
            content: "É um bom momento para começar a observar sinais de refluxo ou intolerâncias alimentares, e consultar um pediatra se necessário."
        },
        {
            title: "Brincadeiras",
            subtitle: "Fortalecimento através do jogo: tempo de barriga para baixo.",
            content: "Encoraje o tempo de bruços para fortalecer os músculos do pescoço e preparar o bebê para rolar e eventualmente engatinhar."
        },
        {
            title: "Desafios",
            subtitle: "Explorando novas habilidades motoras e auditivas.",
            content: "Os bebês podem começar a driblar mais nessa idade devido ao desenvolvimento das glândulas salivares."
        },
        {
            title: "Segurança no Lar",
            subtitle: "Primeiros sons: balbucios que preparam para a fala.",
            content: "A segurança no lar é fundamental à medida que seu bebê começa a explorar. Certifique-se de: \n- Instalar grades de segurança nas escadas. \n- Usar protetores nas tomadas. \n- Manter produtos de limpeza e medicamentos fora do alcance. \n- Assegurar que o ambiente seja seguro para a fase de engatinhar e andar."
        }
    ],
    dot4: [
        {
            title: "Título do Card 1 - Dot 4",
            subtitle: "Subtítulo do Card 1 - Dot 4",
            content: "Conteúdo detalhado para o Card 1 quando Dot 4 é selecionado."
        }
    ],
    dot5: [
        {
            title: "Título do Card 1 - Dot 5",
            subtitle: "Subtítulo do Card 1 - Dot 5",
            content: "Conteúdo detalhado para o Card 1 quando Dot 5 é selecionado."
        }
    ],
    dot6: [
        {
            title: "Título do Card 1 - Dot 6",
            subtitle: "Subtítulo do Card 1 - Dot 6",
            content: "Conteúdo detalhado para o Card 1 quando Dot 6 é selecionado."

        }
    ]


};

function showCardDetails(title, content) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = title;
    modalBody.textContent = content;

    const cardModal = new bootstrap.Modal(document.getElementById('cardModal'), {});
    cardModal.show();
}

// Função para atualizar o conteúdo dos cards
function updateCardContent(dotId) {
    const contents = cardData[dotId];
    const images = document.querySelectorAll('.card-img-top'); // Seleciona todas as imagens dos cards
    const cards = document.querySelectorAll('.card'); // Seleciona todos os cards

    // Aplica filtro de cores conforme o DOT
    const newColor = getColorForDot(dotId); // Obtemos a nova cor com base no DOT
    images.forEach(image => {
        let overlay = image.parentElement.querySelector('.overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            image.parentElement.appendChild(overlay);
        }
        overlay.style.backgroundColor = newColor;
    });

    // Aplica a cor de fundo conforme o DOT
    const newBackgroundColor = getBackgroundColorForDot(dotId); // Obtemos a nova cor com base no DOT
    cards.forEach(card => {
        card.style.backgroundColor = newBackgroundColor;
    });

    // Aplica a cor de fundo dos botões conforme o DOT
    const newButtonColor = getButtonColorForDot(dotId);
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.style.backgroundColor = newButtonColor;
    });

    contents.forEach((content, i) => {
        const card = document.getElementById(`card${i + 1}`);
        if (!card) return;

        const cardTitle = card.querySelector('.card-title');
        const cardSubtitle = card.querySelector('.card-text');
        const cardButton = card.querySelector('.btn-primary');

        const sanitizedContent = content.content.replace(/\n/g, '<br>');

        cardTitle.textContent = content.title;
        cardSubtitle.textContent = content.subtitle;
        cardButton.setAttribute('onclick', `showCardDetails('${escapeJS(content.title)}', '${escapeJS(content.content)}', '${escapeJS(sanitizedContent)}')`);
    });
}

//Cor do filtro da imagem do Card
function getColorForDot(dotId) {
    switch (dotId) {
        case 'dot1':
            return ''; // Cor suave para DOT1
        case 'dot2':
            return 'rgba(131, 173, 255, 0.4)'; // Cor mais intensa para DOT2
        case 'dot3':
            return 'rgba(175, 153, 255, 0.4)'; // Outra cor para DOT3
        default:
            return 'rgba(159, 132, 255, 0.2)'; // Cor padrão
    }
}

//Cor de fundo do Card
function getBackgroundColorForDot(dotId) {
    switch (dotId) {
        case 'dot1':
            return '#94e6ff'; // Cor original para DOT1
        case 'dot2':
            return 'rgba(113, 160, 255, 1)'; // Cor azul suave para DOT2
        case 'dot3':
            return 'rgba(159, 132, 255, 0.8)'; // Outra cor para DOT3 (exemplo: rosa claro)
        default:
            return '#94e6ff'; // Cor padrão
    }
}

//Cor de fundo do botão do Card
function getButtonColorForDot(dotId) {
    switch (dotId) {
        case 'dot1':
            return ''; // Cor original para DOT1
        case 'dot2':
            return 'rgba(34, 108, 255, 1)'; // Cor roxa suave para DOT2
        case 'dot3':
            return 'rgba(120, 83, 255, 1)'; // Outra cor para DOT3 (exemplo: rosa claro)
        default:
            return '#94e6ff'; // Cor padrão
    }
}
function selectDot(dotId) {
    var allDots = document.querySelectorAll('.dot');
    allDots.forEach(function (dot) {
        dot.classList.remove('selected');
    });

    var selectedDot = document.getElementById(dotId);
    selectedDot.classList.add('selected');

    updateCardContent(dotId);
    updateCuriosityContent(dotId);  // Nova função para atualizar as curiosidades
}

function updateCuriosityContent(dotId) {
    const curiosity = jornadaData[dotId];
    const jornadaTitle = document.getElementById('jornada-title');
    const jornadaText = document.getElementById('jornada-text');

    // Fade out
    jornadaTitle.style.opacity = '0';
    jornadaText.style.opacity = '0';

    setTimeout(() => {
        if (curiosity) {
            jornadaTitle.textContent = curiosity.title;
            jornadaText.textContent = curiosity.content;
        } else {
            jornadaTitle.textContent = 'Informação não disponível';
            jornadaText.textContent = 'Não há curiosidades registradas para esta etapa.';
        }
        // Fade in
        jornadaTitle.style.opacity = '1';
        jornadaText.style.opacity = '1';
    }, 200);  // Espera a transição de fade out completar
}

function escapeJS(text) {
    return text.replace(/'/g, "\\'");
}

document.addEventListener("DOMContentLoaded", function () {
    selectDot('dot1');  // Inicializa com o conteúdo de 'dot1' carregado
});
