const form = document.querySelector('form');
const thanks = document.createElement('h1');
thanks.textContent = 'Obrigado!';
thanks.style.fontFamily = 'Montserrat, sans-serif';
thanks.style.fontSize = '60px';
thanks.style.textShadow = '2px 2px 5px #000';
thanks.style.opacity = '0';
document.body.appendChild(thanks);

form.addEventListener('submit', (event) => {
  // previne que a página seja recarregada
  event.preventDefault();
  
  // esconde o formulário
  form.style.display = 'none';
  
  // cria um elemento de parágrafo com a mensagem
  const message = document.createElement('p');
  message.textContent = 'Gostaríamos de agradecer imensamente pelo relato de caso de xenofobia que você compartilhou conosco. Sabemos que relatar um episódio como esse pode ser difícil e até mesmo doloroso, e é por isso que valorizamos tanto a sua coragem em nos contar o que aconteceu.\n\nAqui em nosso site, acreditamos firmemente que a xenofobia e qualquer outra forma de discriminação não têm lugar em nossa sociedade. Acreditamos na inclusão, no respeito mútuo e na celebração da diversidade, e é por isso que estamos comprometidos em combater qualquer forma de preconceito que possa surgir em nossa comunidade.' ;

  // adiciona estilo ao elemento de mensagem
  message.style.fontSize = '20px';
  message.style.maxWidth = '80%';
  message.style.textAlign = 'justify';
  message.style.lineHeight = '1.5em';
  message.style.padding = '20px';
  message.style.backgroundColor = '#f5f5f5';
  message.style.border = '1px solid #ccc';
  message.style.borderRadius = '5px';
  message.style.opacity = '0';
  message.style.transition = 'opacity 1s ease';
  message.style.marginTop = '50px';
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.width = '80%';
  message.style.margin = '0 auto';
  
  // adiciona o elemento de mensagem ao body do documento
  document.body.appendChild(message);
  
  // faz o elemento de agradecimento aparecer gradualmente
  setTimeout(() => {
    thanks.style.opacity = '1';
  }, 1000);
  
  // faz o elemento de mensagem aparecer gradualmente
  setTimeout(() => {
    message.style.opacity = '1';
  }, 1500);
});
