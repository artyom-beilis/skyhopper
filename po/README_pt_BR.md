# AstroHopper — (anteriormente SkyHopper)

[TOC]

[AstroHopper](https://artyom-beilis.github.io/astrohopper.html) é um aplicativo web gratuito e de código aberto, desenvolvido por [Artyom Beilis](https://github.com/artyom-beilis/skyhopper), que ajuda a localizar objetos no céu noturno.
Ele permite apontar com precisão de uma estrela conhecida e fácil de identificar para estrelas mais fracas ou objetos de céu profundo (DSO), medindo mudanças nos ângulos de apontamento do celular por meio do giroscópio e dos sensores de gravidade integrados. É semelhante a um sistema de círculos graduados digitais implementado em um smartphone.

O smartphone precisa ter giroscópio e sensores de gravidade e, de preferência, uma bússola.

O AstroHopper é um aplicativo web que contém uma única página HTML e um banco de dados de objetos em JavaScript. Ele continua funcionando offline, desde que esteja armazenado no cache do navegador.

## Operação

Fixe o celular ao telescópio de modo que a parte física **superior** do aparelho aponte na direção de observação. Isso difere dos aplicativos astronômicos comuns, que simulam uma visão do céu pela câmera. No AstroHopper, a tela fica paralela à direção de observação.

Antes de fixar o smartphone, abra o AstroHopper e calibre a bússola fazendo movimentos em forma de “8”. A calibração melhora significativamente a precisão da direção indicada pela bússola.
Se a bússola não funcionar corretamente, toque no botão com o ícone de mão `✋` para usar o modo manual.

Ao iniciar o AstroHopper, o Guia de início rápido é exibido. Você também pode consultar a ajuda a qualquer momento tocando no botão de engrenagem `⚙`, no canto superior direito, e depois no botão `?`.

1. Aponte o telescópio para uma estrela ou planeta fácil de identificar, próximo ao objeto que deseja observar.
2. Toque no botão `[Alinhar]`, no canto superior esquerdo da tela.
3. Toque na estrela ou no planeta escolhido. Um temporizador de 3 segundos será iniciado para evitar que a vibração afete o alinhamento. Ao fim da contagem, o aplicativo estará alinhado com o objeto selecionado. A mensagem “Alinhado” será exibida, e uma cruz no centro da tela indicará no mapa a direção para a qual o telescópio está apontado.
4. Toque no objeto que deseja observar ou digite o nome dele no campo de pesquisa do menu Configurações, acessível pelo botão de engrenagem `⚙`. Uma linha indicará a direção em que você deve mover o telescópio; as variações de altitude e azimute serão exibidas, respectivamente, no lado direito e na parte inferior da tela.
5. Mova o telescópio até que esses valores se aproximem de zero. Nesse ponto, ele deverá estar apontado para o objeto desejado.
6. Para localizar outro objeto, repita o alinhamento desde a primeira etapa. Os giroscópios integrados do celular não mantêm a precisão por muito tempo nem após vários movimentos.

Vídeos de apresentação e tutoriais:

- Demonstração e tutorial produzidos por Nir Zonshine: <https://youtu.be/AtArqBLWWJ8>
- Resenha produzida por John Dreese (também conhecido como Reflactor): <https://youtu.be/6-_58mSGz1Q>

## Observações para usuários de iOS

Para usar o AstroHopper, é necessário conceder algumas permissões ao Safari.

Sensores de orientação do dispositivo:

- No iOS 13.0 ou posterior, permita o acesso às informações de orientação do dispositivo tocando no botão `Ativar orientação do dispositivo` assim que o aplicativo carregar.
- No iOS 12.2 ou anterior, habilite o acesso em: _Ajustes > Safari > Acesso ao Movimento e Orientação_.

Geolocalização (observe se a mensagem “Sem geolocalização” aparece na tela):

- Acesse Ajustes > Privacidade > Serviços de Localização e ative o recurso. Depois, localize “Safari” e selecione “Durante o Uso do App”. No iOS 14.0 ou posterior, tanto a localização precisa quanto a aproximada devem funcionar.
- Alguns usuários relataram que foi necessário reiniciar o dispositivo para que essas alterações entrassem em vigor.

## Instalação do AstroHopper

O AstroHopper é um aplicativo web progressivo (PWA). Você pode instalá-lo no smartphone como um aplicativo comum. Depois de instalado, ele funciona totalmente offline. Também é possível usá-lo como demonstração em um laptop.

Para instalar o AstroHopper, acesse <https://artyom-beilis.github.io/astrohopper.html> e siga as instruções do navegador:

- Android/Chrome: toque em `...`, ao lado do endereço, e selecione “Instalar app” ou “Adicionar à tela inicial”.
- Samsung Browser: toque no símbolo `↓`, ao lado do endereço.
- Android/Firefox: toque em `...`, ao lado do endereço, e selecione “Instalar”.
- Android/Edge: toque em `...`, na parte inferior, e selecione “Adicionar ao telefone”.
- iPhone/Safari: toque no botão Compartilhar (um quadrado com uma seta para cima), role a tela e selecione “Adicionar à Tela de Início”.

O aplicativo será adicionado à tela inicial ou à lista de aplicativos, conforme o navegador.

Para verificar se o AstroHopper funciona offline:

1. Feche todos os aplicativos e navegadores abertos.
2. Ative o modo avião e confirme que o Wi-Fi está desligado.
3. Toque no ícone do AstroHopper e verifique se o aplicativo abre e funciona.

Em geral, basta atualizar a página para atualizar a versão instalada do AstroHopper. Se isso não funcionar no seu navegador, desinstale o aplicativo e instale-o novamente.

## Solução de problemas

- _O céu exibido no aplicativo está diferente do esperado?_

  Verifique se o navegador fornece informações corretas sobre sua localização. Caso contrário, a mensagem “Sem geolocalização” será exibida. Confira as coordenadas geográficas no menu Configurações e confirme se correspondem à sua localização real.

- _Movimento o celular, mas nada muda no aplicativo?_

  Verifique se o celular tem sensores funcionais. Aplicativos como o SkyMap funcionam corretamente no seu dispositivo?

- _Movimento o telescópio, mas somente a altitude muda; o azimute continua apontando para o norte ou para Polaris?_

  Talvez o navegador não seja compatível com a indicação da bússola, ou o celular não tenha esse sensor. Nesse caso, será exibido um ícone de bússola riscada.
  Você pode ajustar o azimute manualmente deslizando o dedo pela tela até obter o valor desejado e, em seguida, alinhar o telescópio.

- _Apontei o telescópio para uma estrela, mas o celular parece indicar outra direção?_

  A bússola do celular pode estar bastante imprecisa. Experimente:

  1. Mover o celular em forma de “8” para recalibrar a bússola.
  2. Aumentar o campo de visão do aplicativo tocando em `+`, no canto superior esquerdo, ao lado do valor padrão `∠60°`.
  3. Ativar o modo de azimute manual tocando no ícone de mão `✋`, à direita, e ajustar o azimute manualmente.

- _A tela escurece muito rápido e não tenho tempo para alinhar ou apontar o telescópio?_

  Altere as configurações de suspensão do celular. No Android, procure essa opção em “Configurações > Tela”; no iOS, em “Ajustes > Tela e Brilho > Bloqueio Automático”.

- _Ao mover o telescópio para ajustar o azimute, o aplicativo mostra movimentos estranhos ou na direção oposta?_

  O giroscópio pode ter perdido precisão. Isso pode acontecer. Tente novamente. Se o problema persistir, experimente uma destas opções:

  1. Escolher uma estrela de alinhamento cujo azimute seja mais próximo do objeto desejado. O acompanhamento da altitude é mais preciso.
  2. Corrigir primeiro a altitude e depois procurar o objeto no eixo do azimute.

- _O gesto de pinça amplia a página inteira em vez de alterar o campo de visão do mapa do céu?_

  Isso depende das configurações do navegador:

  - Chrome: Configurações > Acessibilidade > ativar zoom forçado > desativar.
  - Firefox: Configurações > Acessibilidade > sempre ativar zoom > desativar.
  - Samsung Browser: Configurações > Aparência > zoom manual > desativar.
  - Edge: Configurações > Tamanho da fonte > zoom em todos os sites > desativar; ou Configurações > Acessibilidade > zoom em todos os sites > desativar.

  No iOS, não há opção para desativar o zoom da página inteira.

## Controles

- Lado esquerdo, de cima para baixo:

  - Botão e estado de alinhamento: toque para iniciar o processo e, em seguida, selecione a estrela ou o planeta usado no alinhamento.
  - Campo de visão: use os botões `+` e `-` para aumentar ou reduzir o campo.
  - Com uma lista de observação selecionada, os controles `<` e `>` percorrem os objetos da lista. O nome do objeto selecionado aparece abaixo.

- Lado direito, de cima para baixo e da direita para a esquerda:

  - `⚙`: botão Configurações.
  - Campo de pesquisa de objetos: permite inserir o nome ou o código de um objeto. Depois de encontrá-lo, pressione Enter. Para repetir a pesquisa, toque no ícone de lupa; o aplicativo voltará ao objeto selecionado.
  - `✋`: ativa o modo manual; o ícone de bússola ativa o modo de bússola; o ícone de bússola riscada indica que ela não está disponível e que somente o modo manual pode ser usado.
  - `W`: aparece quando um objeto nomeado é selecionado. Toque nele para abrir a página do objeto na Wikipédia; é necessária uma conexão com a internet.

- Menu Configurações, acessível pelo ícone `⚙`:

  - Botão `↻`: reinicia o alinhamento e o alvo.
  - Modo de interface compacta: otimiza a tela para dispositivos pequenos, reduzindo os botões e movendo os controles do campo de visão para o menu Configurações.
  - Tela cheia: alterna para a exibição em tela cheia.
  - Modo noturno: ativa ou desativa a tela vermelha para observações noturnas.
  - Somente no modo de tela compacta, ajuste do campo de visão com os botões `+` e `-`.
  - Magnitude estelar máxima: ajusta, com `+` e `-`, o limite de magnitude das estrelas exibidas ou disponíveis para alinhamento.
  - Magnitude aparente máxima de objetos DSO: ajusta, com `+` e `-`, o limite de brilho dos objetos DSO exibidos.
  - Tamanho da fonte: aumenta o texto, o que pode ajudar em telas pequenas ou melhorar a legibilidade.
  - Seleção e edição da lista de observação pessoal.
  - Campo para pesquisar objetos pelo nome.
  - Alinhamento com qualquer objeto DSO: use com cuidado, pois é difícil determinar o centro de objetos extensos, como aglomerados abertos.
  - Filtro dos objetos astronômicos por tipo.
  - Ativação ou desativação do zoom com gesto de pinça.
  - Configuração das informações da Wikipédia.
  - Exibição do tutorial inicial ao iniciar o aplicativo.
  - Lista de objetos adicionados pelo usuário.
  - Estado da geolocalização e botão para recarregá-la.
  - Informações dos sensores.

## Controles no modo de tela compacta

Controles na tela:

- Canto superior esquerdo: `◎` — botão e estado do alinhamento; `✓` indica alinhado, `✗` indica não alinhado e `?` solicita a seleção de uma estrela de alinhamento.
- Com uma lista de observação selecionada, use `<` e `>` à esquerda para percorrer os objetos. O nome do objeto selecionado aparece abaixo.
- Lado direito:

  - `✋`: modo manual; ícone de bússola: modo de bússola.
  - `⚙`: menu Configurações.

- Lado esquerdo: `W` aparece quando um objeto nomeado está selecionado. Toque nele para abrir a página do objeto na Wikipédia; é necessária uma conexão com a internet.

## Informações da Wikipédia

Quando o botão `W` aparecer, toque nele para abrir um quadro com a página da Wikipédia sobre o objeto selecionado.

_Observação:_ o aplicativo não controla o estilo dessa página. Por padrão, ela pode aparecer com texto preto sobre fundo branco, o que não é desejável para a visão noturna. Você pode alterar as configurações do navegador ou usar uma extensão como o [Dark Reader](https://darkreader.org), mas texto branco ou imagens brilhantes ainda podem atrapalhar a observação.

Por padrão, a exibição de informações da Wikipédia fica desativada no modo noturno. É possível alterar esse comportamento em “Wiki”, no menu Configurações.

## Lista de observação

Você pode criar uma lista de observação personalizada com antecedência para percorrer os objetos com facilidade durante a noite.
No menu Configurações, há a opção `Lista`, com o controle `[editar]` para abrir a ferramenta de edição.

Uma lista de observação é uma sequência simples de nomes de objetos, separados por espaços, quebras de linha ou vírgulas.
Por exemplo, a lista padrão abaixo:

    M411, M47, M49, M50, M44, M45

É possível definir várias listas nomeadas escrevendo um nome seguido de `:`, por exemplo:

    clusters: M41 M47 M49
     M50 M44 M45
    doublestars: Polaris, "Cor Caroli"

Você pode incluir comentários para o usuário entre `(` e `)` para explicar o identificador do objeto. O comentário será exibido na interface quando o objeto for selecionado. Por exemplo:

    Galaxies: M31 (Andromeda), M64 (Black Eye)

_Observação:_ se você adicionar um comentário ou usar um nome com espaços, inclua uma vírgula `,` como separador.

Selecione listas usando os botões `<` e `>` do controle “Listas”. Quando uma lista é selecionada, dois botões, `<` e `>`, aparecem na tela principal, abaixo do botão “Alinhar”. Eles permitem percorrer os objetos para a frente e para trás. O nome do objeto selecionado aparece abaixo dos controles.

As listas de observação ficam armazenadas no celular para cada domínio e são mantidas quando você fecha e abre o aplicativo novamente.

## Objetos do usuário

O aplicativo não inclui todas as estrelas e todos os objetos DSO possíveis. Para acessar objetos que não constam no banco de dados, você pode adicioná-los em “Objetos do usuário”, no menu Configurações.

Os objetos do usuário são definidos em formato CSV. A primeira coluna contém o nome do objeto, a segunda sua ascensão reta (RA) e a terceira sua declinação (DEC).
RA e DEC podem ser informadas em graus decimais (0–360 para RA e −90 a +90 para DEC) ou em horas/graus, minutos e segundos. Os segundos podem ser omitidos. Os campos podem ser separados por espaços, por `:` ou pelos símbolos correspondentes, como `h`, `m`, `s` e `d`. Por exemplo:

- RA: `170.6358`, `11:22:32.6`, `11h 22m 32.6s`, `11h 22' 32.6''`, `11 22′ 32.6″`, `11 22 32.6` ou `11:32`.
- DEC: `-87.3757`, `-87:22:32.6`, `-87d 22m 32.6s`, `-87d 22' 32.6''`, `-87° 22′ 32.6″`, `-87 22 32.6` ou `-87:22`.

Exemplo de lista:

    V1405,23h 24m 48s, +61° 11′ 15″
    Pluto,19:55:16,-22:13:42

Os objetos do usuário ficam armazenados no celular para cada domínio e são mantidos quando você fecha e abre o aplicativo novamente.

## Usuários de montagens equatoriais

O aplicativo pressupõe o uso de uma montagem altazimutal. Em uma montagem equatorial, pode surgir um erro adicional devido ao desalinhamento entre o eixo principal do celular e o eixo do telescópio.

Se os alvos estiverem próximos dos polos e for necessária uma mudança significativa na ascensão reta, qualquer desalinhamento entre o celular e o telescópio afetará a precisão. O erro final pode ser calculado por `2e⋅sin(Δα/2)⋅sin(δ)`, em que `e` é o erro de alinhamento entre o celular e o telescópio, `Δα` é a mudança necessária na ascensão reta e `δ` é a declinação do alvo.

Por isso, o aplicativo pode não funcionar de forma confiável com montagens equatoriais. Recomenda-se usar montagens altazimutais.

## Problemas conhecidos

- O zoom por pinça não funciona corretamente no iOS, pois não há como desativar o zoom do navegador.
- No iOS, o gesto de pinça ou o toque duplo pode ampliar a tela quando isso não deveria ocorrer.
- Em algumas versões do iPad (iOS 12.5), a seleção de estrelas ou alvos não funciona.

## Relato de erros e suporte

- A melhor forma de relatar erros é pelo projeto no GitHub: <https://github.com/artyom-beilis/skyhopper>
- O autor do programa, Artyom Beilis, também participa com frequência do fórum [Cloudy Nights](https://www.cloudynights.com/index/). Ao pedir ajuda, mencione corretamente o nome do aplicativo: “AstroHopper”.

## Direitos autorais

(C) 2021-2025 Artyom Beilis.

Este aplicativo web de código aberto é distribuído sob a licença GPL. Seu funcionamento depende de sensores adequados. Não há qualquer garantia. Para informações detalhadas sobre os direitos autorais das diferentes partes do projeto, consulte <https://github.com/artyom-beilis/skyhopper/blob/main/COPYING.md>.
