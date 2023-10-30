const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const alarmeInput = document.getElementById('alarme');
const definirAlarmeBtn = document.getElementById('definirAlarme');
const despertadorAudio = document.getElementById('despertadorAudio');
let alarmeAtivo = false;

// Função que atualiza o relógio a cada segundo
function atualizarRelogio() {
  // Obtém a data e hora atual
  let dateToday = new Date();

  // Obtém as horas, minutos e segundos da data atual
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  // Formata as horas, minutos e segundos para terem sempre dois dígitos
  if (hr < 10) {
    hr = "0" + hr;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  // Atualiza o texto do relógio com os valores formatados
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  // Verifica se o despertador está ativado e se a hora atual coincide com a hora definida
  if (alarmeAtivo) {
    let horaAlarme = alarmeInput.value;
    let horaAtual = `${hr}:${min}`;

    if (horaAtual === horaAlarme) {
      despertadorAudio.play();
      alert("Hora do despertador!");

      // Reinicia o estado do despertador
      alarmeAtivo = false;
      alarmeInput.value = '';
    }
  }
}

// Função para definir o alarme
function definirAlarme() {
  let horaAlarme = alarmeInput.value;

  if (horaAlarme !== "") {
    alarmeAtivo = true;
    alert(`Alarme definido para ${horaAlarme}`);
  }
}

// Adiciona o evento de clique ao botão "Definir Alarme"
definirAlarmeBtn.addEventListener('click', definirAlarme);

// Adiciona o evento de escuta para reiniciar o estado do despertador quando o áudio terminar de ser reproduzido
despertadorAudio.addEventListener('ended', function() {
  alarmeAtivo = false;
  alarmeInput.value = '';
});

// Inicializa o relógio ao carregar a página
window.addEventListener('load', function () {
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);
});