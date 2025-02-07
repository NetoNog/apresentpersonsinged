// Espera o conteúdo da página ser completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // 1. Alteração da cor de fundo das habilidades com um clique
    const abilities = document.querySelectorAll('.ability');  // Seleciona todas as habilidades na página
    
    // Itera sobre cada habilidade encontrada
    abilities.forEach(function(ability) {
      // Adiciona um evento de "hover" (passar o mouse) nas habilidades
      ability.addEventListener('mouseenter', function() {
        ability.style.backgroundColor = '#555';  // Muda a cor de fundo quando o mouse entra
      });
      
      // Adiciona um evento para restaurar a cor quando o mouse sai
      ability.addEventListener('mouseleave', function() {
        ability.style.backgroundColor = '';  // Restaura a cor original ao sair com o mouse
      });
    });
  
    // 2. Contador de visitas à página
    let visitCount = localStorage.getItem('visitCount');  // Recupera o número de visitas armazenado no navegador
    
    if (!visitCount) {
      visitCount = 0;  // Se não houver número de visitas salvo, começa do zero
    }
    
    visitCount++;  // Incrementa o número de visitas a cada carregamento de página
    
    // Armazena o novo valor no armazenamento local do navegador
    localStorage.setItem('visitCount', visitCount);
  
    // Exibe o número de visitas na página, em um lugar desejado
    const visitElement = document.createElement('div');  // Cria um novo elemento div para mostrar as visitas
    visitElement.textContent = `Você visitou esta página ${visitCount} vezes!`;  // Texto para o contador
    visitElement.style.position = 'fixed';  // Define a posição fixa na tela
    visitElement.style.bottom = '10px';  // Coloca a mensagem no fundo da página
    visitElement.style.left = '10px';  // Alinha a mensagem à esquerda
    visitElement.style.backgroundColor = '#222';  // Cor de fundo da mensagem
    visitElement.style.color = '#fff';  // Cor do texto
    visitElement.style.padding = '10px';  // Espaçamento interno
    visitElement.style.borderRadius = '5px';  // Bordas arredondadas
    visitElement.style.fontSize = '1.2em';  // Tamanho da fonte
    
    document.body.appendChild(visitElement);  // Adiciona o contador de visitas no corpo da página
  
  });
  