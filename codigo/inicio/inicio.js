//trocar da pág. início para o menu
function irMenu() {
    location.href = 'menu.html'
  }
  
  const FACIL = 1
  const INTERM = 2
  const DIFICIL = 3
  
  //mudar de dificuldade
  function mudarDificuldade(nivel) {
    if (nivel == FACIL) {
      location.href = '../facil/facil.html'
    } else if (nivel == INTERM) {
      location.href = '../intermediario/intermediario.html'
    } else if (nivel == DIFICIL) {
      location.href = '../dificil/dificil.html'
    }
  }
  