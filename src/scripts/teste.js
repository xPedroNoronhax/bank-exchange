// document.addEventListener('DOMContentLoaded', function() {
//     //selecionou o select com a classe flags
//     let flags = document.querySelectorAll('.flags');
//     //selecionou a div na qual ira conter a imagem das bandeiras
//     let flagContainers = document.querySelectorAll('.flag-container');

//     function atualizaPais(select) {
//         //selectedValue é uma variavel nao qual captura o valor dentro do select(ex: 'brasil' 'argentina')
//         //esse parametro é referente ao pais selecionado
//         //no codigo essa funcao ira ocorrer sempre no evento onchange, que é quando ira haver a troca dos valores em select.
//         let selectedValue = select.value;
//         // index ira conter qual select.value(optioon) estara em select.
//         //Array.from(flags) é uma função que ira converter todas as opções dentro de select em arrays. 
//         //Index of ira encontrar qual o indece da opção selecionada(ex: indexOF('brasil') = [0])
//         let index = Array.from(flags).indexOf(select); // Encontre o índice do select correspondente

        
//         //FlagMapping seria um objeto, onde por exemplo 'brasil' seria a chave e que receberia como valor os codigos url contendo a imagem da bandeira
//         let flagMapping = {
//             'brasil': '<img src="https://flagicons.lipis.dev/flags/4x3/br.svg" alt="">',
//             'argentina': '<img src="https://flagicons.lipis.dev/flags/4x3/ar.svg" alt="">',
//             'canada': '<img src="https://flagicons.lipis.dev/flags/4x3/ca.svg" alt="">',
//             'estados unidos': '<img src="https://flagicons.lipis.dev/flags/4x3/um.svg" alt="">',
//             'euro': '<img src="https://flagicons.lipis.dev/flags/4x3/eu.svg" alt="">',
//             'reino unido': '<img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="">'
//         };

//         if (selectedValue in flagMapping) {
//             flagContainers[index].innerHTML = flagMapping[selectedValue];
//         }
//     }

//     // Adicione um ouvinte de eventos onchange para cada select
//     flags.forEach(function(select) {
//         select.onchange = function() {
//             atualizaPais(select);
//         };
//     });
// });