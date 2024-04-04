# Atividade da cadeira de Front-end

## Implementar uma página que representa um jogo da sorte. A página deve ter os seguintes elementos:

1) Um quadro FIGURAS, com 9 figuras diferentes, todas em forma de quadrado.
2) Um botão JOGAR.
3) Um botão ZERAR TUDO.
4) Um label TIMER, contendo um contador regressivo de tempo.
5) Um label RESULTADO, que começa com branco.
6) Uma tabela HISTÓRICO, com os resultados de cada jogada. A 1ª linha da tabela
deve ter o texto RESULTADO escrito em negrito.

## Como funciona?

•  Uma jogada começa com o click no botão jogar. 
•  O click mostra as 9 imagens em FIGURAS, define TIMER para 00:30, define RESULTADO para EM JOGO, escolhe
aleatoriamente uma figura premiada, e começa a contagem regressiva. 
•  A cada segundo, TIMER deve ser atualizado.
•  O usuário deve clicar em uma das figuras do quadro FIGURAS em até 30s.

## O que acontece no jogo?

• Se ele clicou na figura certa, este deve se tornar um quadrado verde, e as demais
quadrados vermelhos. O RESULTADO é igual a 1.000.000.
• Se ele clicou na figura errada, este deve se tornar um quadrado vermelho, e as
demais quadrados amarelos. RESULTADO é igual a 0.000.000.
• Se ele não clicou em nada em até 30s, todas as figuras devem ser tornar
quadrados vermelhos. Resultado é igual a TIMEOUT.
• Nos três casos, HISTÓRICO é acrescido de uma nova linha com o
resultado da jogada: GANHOU, PERDEU ou TIMEOUT.

• O click do botão ZERAR TUDO mostra as 9 imagens em FIGURAS, seta TIMER para 00:30, seta RESULTADO para branco e apaga todas as linhas da tabela, exceto a 1a linha.