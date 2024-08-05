function mostrarMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  // Salva o estado do menu no localStorage
  localStorage.setItem('menuActive', menu.classList.contains('active'));
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  // Marca o modal como fechado no localStorage
  localStorage.setItem('modalClosed', 'true');
}

window.onload = function() {
  const menu = document.getElementById('menu');
  const modal = document.getElementById('modal');

  // Verifica se o menu deve estar ativo
  const menuActive = localStorage.getItem('menuActive') === 'true';
  if (menuActive) {
    menu.classList.add('active');
  }

  // Verifica se o modal deve estar fechado
  const modalClosed = localStorage.getItem('modalClosed') === 'true';
  if (!modalClosed) {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }

  // Define o cookie "visited" com duração de 30 dias
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
  }
};