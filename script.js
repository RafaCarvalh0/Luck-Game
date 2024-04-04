document.addEventListener("DOMContentLoaded", () => {
    const figuras = document.querySelectorAll(".figura");
    let temporizador;
    let figuraVencedora;

    function resetarPartida() {
        figuras.forEach(figura => figura.style.backgroundColor = '#fff');
        document.getElementById('tempoRestante').innerText = '00:30';
        document.getElementById('resultadoDoGame').innerText = '';
        clearInterval(temporizador);
    }

    document.getElementById('botaoJogar').addEventListener('click', () => {
        resetarPartida();
        figuraVencedora = Math.floor(Math.random() * figuras.length);
        let tempoRestante = 30;
        temporizador = setInterval(() => {
            tempoRestante--;
            document.getElementById('tempoRestante').innerText = `00:${tempoRestante.toString().padStart(2, '0')}`;
            if (tempoRestante <= 0) {
                clearInterval(temporizador);
                figuras.forEach(figura => figura.style.backgroundColor = 'red');
                document.getElementById('resultadoDoGame').innerText = 'TIMEOUT';
                updateHistory('TIMEOUT');
            }
        }, 1000);
    });

    figuras.forEach((figura, index) => {
        figura.addEventListener('click', () => {
            if (index === figuraVencedora) {
                figura.style.backgroundColor = 'green';
                figuras.forEach((fig, idx) => {
                    if (idx !== figuraVencedora) fig.style.backgroundColor = 'red';
                });
                document.getElementById('resultadoDoGame').innerText = '1.000.000';
                updateHistory('GANHOU');
            } else {
                figura.style.backgroundColor = 'red';
                figuras.forEach((fig, idx) => {
                    if (idx !== index) fig.style.backgroundColor = 'yellow';
                });
                document.getElementById('resultadoDoGame').innerText = '0.000.000';
                updateHistory('PERDEU');
            }
            clearInterval(temporizador);
        });
    });

    document.getElementById('botaoResetar').addEventListener('click', () => {
        resetarPartida();
        const tabelaHistorico = document.getElementById('historico');
        const linhas = tabelaHistorico.getElementsByTagName('tr');
        while (linhas.length > 1) {
            tabelaHistorico.deleteRow(1);
        }
    });

    function updateHistory(result) {
        const tabelaHistorico = document.getElementById('historico');
        const novaLinha = tabelaHistorico.insertRow(-1);
        const novaCelula = novaLinha.insertCell(0);
        novaCelula.textContent = result;
    }
});