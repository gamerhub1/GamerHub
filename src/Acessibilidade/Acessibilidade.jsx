import React from 'react';
import './Acessibilidade.css';
import NavBar from '../Navbar/NavBar.tsx';

const Acessibilidade = () => {
  const jogos = [
    {
      nome: 'The Last of Us Part II',
      descricao: 'The Last of Us Part II oferece um dos pacotes de acessibilidade mais completos, incluindo uma gama de opções para deficientes visuais e auditivos. O jogo possui controles altamente customizáveis, permitindo que jogadores ajustem a sensibilidade e a ação dos botões. Para deficientes visuais, oferece opções como modo de alto contraste, além de narração das falas dos personagens e descrição de ambientes. Já para deficientes auditivos, o jogo conta com legendas detalhadas, inclusive com descrição de sons e música, facilitando a navegação no mundo do jogo.',
      trailer: 'https://www.youtube.com/embed/W2Wnvvj33Wo',
      imagem: 'https://example.com/the-last-of-us.jpg',
      steamLink: 'https://store.steampowered.com/app/18893/The_Last_of_Us_Part_II/',
    },
    {
      nome: 'Forza Horizon 5',
      descricao: 'Forza Horizon 5 oferece uma extensa gama de recursos de acessibilidade, permitindo que jogadores com deficiência motora, visual ou auditiva personalizem a experiência de jogo. O título conta com um sistema de controles customizáveis, incluindo a possibilidade de ajustar a sensibilidade do volante e a dificuldade dos desafios. Para jogadores com daltonismo, há um modo de correção de cores que melhora a legibilidade dos elementos no jogo. Além disso, há a opção de legendas detalhadas e de áudio em diferentes idiomas.',
      trailer: 'https://www.youtube.com/embed/FYH9n37B7Yw',
      imagem: 'https://example.com/forza-horizon-5.jpg',
      steamLink: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
    },
    {
      nome: 'Celeste',
      descricao: 'Celeste é um jogo de plataforma que se destaca pelo seu pacote de acessibilidade, especialmente focado em ajudar jogadores com dificuldades motoras. O jogo permite ajustar a velocidade do jogo, adicionar saltos automáticos, e até mesmo colocar assistentes de jogabilidade que permitem pular seções difíceis. Além disso, há configurações para ajustar a cor do fundo, aumentar o contraste, e incluir sons para jogadores com deficiência auditiva. Essas opções fazem com que Celeste seja acessível para uma ampla gama de jogadores.',
      trailer: 'https://www.youtube.com/embed/70d9irlxiB4',
      imagem: 'https://example.com/celeste.jpg',
      steamLink: 'https://store.steampowered.com/app/504230/Celeste/',
    },
    {
      nome: 'Minecraft',
      descricao: 'Minecraft é um dos jogos mais inclusivos quando se trata de acessibilidade. Ele oferece uma ampla gama de opções, como a possibilidade de ativar narração do jogo, além de ajustes no contraste e tamanhos de texto. Jogadores com deficiências visuais podem utilizar a função de narração para descrever o ambiente, itens e interações. Para jogadores com deficiência auditiva, o jogo inclui legendas e a opção de indicar visualmente certos sons, como o movimento de criaturas ou a quebra de blocos. Além disso, Minecraft tem uma vasta comunidade de mods que oferecem ainda mais opções de acessibilidade.',
      trailer: 'https://www.youtube.com/embed/MmB9b5njVbA',
      imagem: 'https://example.com/minecraft.jpg',
      steamLink: 'https://store.steampowered.com/app/91310/Minecraft/',
    },
    {
      nome: 'Sea of Thieves',
      descricao: 'Sea of Thieves inclui uma série de recursos de acessibilidade para garantir que jogadores com diferentes habilidades possam se divertir. Para deficientes auditivos, o jogo oferece legendas completas, incluindo a descrição dos sons de ambiente e efeitos sonoros. Para deficientes visuais, há opções de alto contraste e narração das atividades realizadas no jogo, como coletar itens e navegar. Os controles também são altamente personalizáveis, permitindo ajustar os botões e os movimentos para atender às necessidades de jogadores com deficiência motora.',
      trailer: 'https://www.youtube.com/embed/xKLpWOEEUxc',
      imagem: 'https://example.com/sea-of-thieves.jpg',
      steamLink: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves/',
    },
    {
      nome: 'Hades',
      descricao: 'Hades oferece uma grande quantidade de opções para personalizar a experiência do jogador, incluindo modos de dificuldade ajustáveis e várias opções visuais. Jogadores com deficiência visual podem utilizar o modo de contraste alto, que melhora a visibilidade de elementos no ambiente. Para deficientes auditivos, o jogo oferece legendas completas e a descrição de sons importantes, como o ataque de inimigos. Hades também inclui controles remotos personalizados, permitindo que os jogadores ajustem os controles ao seu estilo de jogo.',
      trailer: 'https://www.youtube.com/embed/91t0ha9x0AE',
      imagem: 'https://example.com/hades.jpg',
      steamLink: 'https://store.steampowered.com/app/1145360/Hades/',
    },
    {
      nome: 'God of War (2018)',
      descricao: 'God of War (2018) é um exemplo notável de acessibilidade, oferecendo opções de personalização de controles, ajustes no tamanho das legendas e até mesmo a opção de narração para deficientes visuais. O jogo inclui também modos de contraste alto para tornar os detalhes do ambiente mais visíveis. Jogadores com dificuldades motoras podem modificar as configurações de combate, como a sensibilidade e a ativação de habilidades automáticas, para facilitar a jogabilidade.',
      trailer: 'https://www.youtube.com/embed/FyIwEFXOcaE',
      imagem: 'https://example.com/god-of-war.jpg',
      steamLink: 'https://store.steampowered.com/app/1593500/God_of_War/',
    },
    {
      nome: 'Spider-Man: Miles Morales',
      descricao: 'Spider-Man: Miles Morales oferece uma série de opções para tornar o jogo acessível a todos, incluindo legendas detalhadas e a opção de aumentar o tamanho do texto. O jogo também oferece controles personalizados para acomodar jogadores com deficiência motora e opções de contraste de cores para melhorar a legibilidade. Para deficientes auditivos, o jogo inclui indicações visuais dos sons ao redor do personagem, como ataques e movimentos dos inimigos.',
      trailer: 'https://www.youtube.com/embed/qjRzm9A7DU4',
      imagem: 'https://example.com/spiderman-miles.jpg',
      steamLink: 'https://store.steampowered.com/app/1434190/Marvels_Spiderman_Miles_Morales/',
    },
    {
      nome: 'Uncharted: The Lost Legacy',
      descricao: 'Uncharted: The Lost Legacy oferece uma série de opções de acessibilidade, incluindo legendas ajustáveis, descrição de sons e ajustes de contraste. Para deficientes auditivos, o jogo proporciona legendas com informações adicionais sobre o ambiente sonoro. Já para deficientes visuais, oferece modos de alto contraste e a opção de narração para descrever as ações e os cenários.',
      trailer: 'https://www.youtube.com/embed/i8qzBkHjk_0',
      imagem: 'https://example.com/uncharted.jpg',
      steamLink: 'https://store.steampowered.com/app/931750/Uncharted_The_Lost_Legacy/',
    },
    {
      nome: 'Ratchet & Clank: Rift Apart',
      descricao: 'Ratchet & Clank: Rift Apart é um excelente exemplo de como um jogo de ação pode ser acessível. Ele oferece ajustes de controle para deficientes motores e modos de contraste para ajudar deficientes visuais. Além disso, as legendas são altamente personalizáveis, permitindo alterar o tamanho e o estilo da fonte. O jogo também oferece uma função de narração para descrever elementos importantes durante o jogo.',
      trailer: 'https://www.youtube.com/embed/ai3o0XtrnM8',
      imagem: 'https://example.com/ratchet-clank.jpg',
      steamLink: 'https://store.steampowered.com/app/1575380/Ratchet_and_Clank_Rift_Apart/',
    },
    {
      nome: 'Watch Dogs: Legion',
      descricao: 'Watch Dogs: Legion oferece diversas opções de acessibilidade, incluindo legendas e indicações visuais para jogadores com deficiência auditiva. O jogo também permite ajustes no contraste, além de opções de controle para jogadores com dificuldades motoras. O título oferece uma excelente flexibilidade de personalização para que todos os jogadores possam se adaptar às suas necessidades.',
      trailer: 'https://www.youtube.com/embed/srXrGKGAU20',
      imagem: 'https://example.com/watch-dogs-legion.jpg',
      steamLink: 'https://store.steampowered.com/app/927110/Watch_Dogs_Legion/',
    },
    {
      nome: 'Resident Evil Village',
      descricao: 'Resident Evil Village tem uma ampla gama de opções de acessibilidade, incluindo ajustes de dificuldade, legendas e modos de contraste para jogadores com deficiência visual. Para deficientes auditivos, o jogo oferece legendas completas e uma descrição de sons importantes. A personalização de controles também é uma opção importante para jogadores com dificuldades motoras, permitindo a adaptação de botões e comandos.',
      trailer: 'https://www.youtube.com/embed/Qge5m24C5qs',
      imagem: 'https://example.com/resident-evil-village.jpg',
      steamLink: 'https://store.steampowered.com/app/1196590/Resident_Evil_Village/',
    },
    {
        nome: 'Apex Legends',
        descricao: 'Apex Legends é um jogo battle royale que oferece uma série de recursos de acessibilidade, incluindo modos de cor personalizáveis para deficientes visuais, como o modo de daltonismo. Além disso, os jogadores podem ajustar o tamanho das legendas, ativar a descrição de sons importantes no jogo e personalizar os controles, o que facilita a adaptação para jogadores com deficiência motora.',
        trailer: 'https://www.youtube.com/embed/9-kNd1_xG9Q',
        imagem: 'https://example.com/apex-legends.jpg',
        steamLink: 'https://store.steampowered.com/app/1172470/Apex_Legends/',
      },
      {
        nome: 'Overwatch 2',
        descricao: 'Overwatch 2 é um jogo multiplayer que oferece amplas opções de acessibilidade. Ele permite a personalização completa dos controles, incluindo opções para jogadores com dificuldades motoras. As legendas são ajustáveis e há a possibilidade de alterar a visibilidade de certos elementos do jogo, como os efeitos visuais de habilidades e ataques. O jogo também inclui a descrição de sons importantes, como a chegada de inimigos.',
        trailer: 'https://www.youtube.com/embed/kBj4SCL4PNo',
        imagem: 'https://example.com/overwatch-2.jpg',
        steamLink: 'https://playoverwatch.com/',
      },
      {
        nome: 'The Witcher 3: Wild Hunt',
        descricao: 'The Witcher 3: Wild Hunt tem várias opções de acessibilidade, incluindo legendas ajustáveis, narração das falas e a possibilidade de personalizar controles para jogadores com dificuldades motoras. O jogo também oferece opções de contraste alto para deficientes visuais, além de permitir a personalização da experiência auditiva, com a descrição de sons importantes, como o movimento de inimigos.',
        trailer: 'https://www.youtube.com/embed/c0i88t0Kacs',
        imagem: 'https://example.com/witcher-3.jpg',
        steamLink: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
      },
      {
        nome: 'Far Cry 5',
        descricao: 'Far Cry 5 oferece um conjunto de opções de acessibilidade, como legendas e descrição de sons importantes, que facilitam a navegação para jogadores com deficiência auditiva. O título também possui ajustes de contraste e a possibilidade de personalizar os controles para jogadores com deficiências motoras. Além disso, é possível ativar um modo de assistência de direção para facilitar o controle do veículo no jogo.',
        trailer: 'https://www.youtube.com/embed/NyfSm5juldU',
        imagem: 'https://example.com/far-cry-5.jpg',
        steamLink: 'https://store.steampowered.com/app/552520/Far_Cry_5/',
      },
      {
        nome: 'Fortnite',
        descricao: 'Fortnite oferece várias opções de acessibilidade, como a possibilidade de ajustar o tamanho das legendas, cores e contrastes para deficientes visuais, e até mesmo oferecer uma narração de ambiente. Jogadores com dificuldades motoras podem personalizar os controles para tornar a jogabilidade mais confortável. Além disso, o jogo tem um sistema de som que ajuda a identificar a localização dos inimigos e outros elementos importantes.',
        trailer: 'https://www.youtube.com/embed/W6W-o_z0cdE',
        imagem: 'https://example.com/fortnite.jpg',
        steamLink: 'https://www.epicgames.com/fortnite/',
      },
      {
        nome: 'Doom Eternal',
        descricao: 'Doom Eternal oferece opções de acessibilidade como legendas personalizáveis, contrastes ajustáveis, e descrição de sons, o que facilita a jogabilidade para deficientes auditivos e visuais. O título também conta com a personalização dos controles para jogadores com dificuldades motoras, além de permitir a modificação da dificuldade do jogo, tornando-o mais acessível para diversos tipos de jogadores.',
        trailer: 'https://www.youtube.com/embed/_oVwrpfo_QA',
        imagem: 'https://example.com/doom-eternal.jpg',
        steamLink: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
      },
      {
        nome: 'Stardew Valley',
        descricao: 'Stardew Valley é um jogo de simulação com várias opções de acessibilidade. Ele permite a personalização das legendas, incluindo a possibilidade de modificar o tamanho do texto e os contrastes, tornando o jogo mais acessível para deficientes visuais e auditivos. A jogabilidade também pode ser ajustada, com a possibilidade de adaptar os controles para jogadores com dificuldades motoras.',
        trailer: 'https://www.youtube.com/embed/8A7A1X1TVNc',
        imagem: 'https://example.com/stardew-valley.jpg',
        steamLink: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
      },
      {
        nome: 'Hitman 3',
        descricao: 'Hitman 3 oferece várias opções de acessibilidade, como legendas ajustáveis, narração de falas e ajustes de contraste para deficientes visuais. Para jogadores com deficiência auditiva, o título inclui a descrição de sons importantes e a personalização das configurações de áudio. O jogo também permite a personalização dos controles para facilitar a jogabilidade para jogadores com dificuldades motoras.',
        trailer: 'https://www.youtube.com/embed/R_Ob-fupzKg',
        imagem: 'https://example.com/hitman-3.jpg',
        steamLink: 'https://store.steampowered.com/app/1121640/Hitman_3/',
      },
      {
        nome: 'Bioshock Infinite',
        descricao: 'Bioshock Infinite inclui uma série de opções de acessibilidade, como legendas ajustáveis e a descrição de sons importantes no ambiente. Jogadores com dificuldades motoras podem ajustar os controles, enquanto aqueles com deficiência auditiva se beneficiam de um sistema de narração de sons e indicações visuais dos eventos importantes. O jogo também oferece contrastes elevados para facilitar a visualização.',
        trailer: 'https://www.youtube.com/embed/T9CcbwO9LFk',
        imagem: 'https://example.com/bioshock-infinite.jpg',
        steamLink: 'https://store.steampowered.com/app/8870/BioShock_Infinite/',
      },
      {
        nome: 'Control',
        descricao: 'Control oferece uma ampla gama de opções de acessibilidade, incluindo legendas, ajustes de contraste, e a descrição de sons importantes, como explosões e ataques. O jogo também permite a personalização dos controles, permitindo que jogadores com dificuldades motoras adaptem a experiência. Para deficientes visuais, há um modo de alto contraste e a narração de elementos no ambiente.',
        trailer: 'https://www.youtube.com/embed/PT5yMfC9LQM',
        imagem: 'https://example.com/control.jpg',
        steamLink: 'https://store.steampowered.com/app/870780/Control/',
      },
      {
        nome: 'The Quarry',
        descricao: 'Um jogo de terror interativo com um "modo filme" e diversas opções de acessibilidade, como legendas customizáveis e controles simplificados.',
        trailer: 'https://www.youtube.com/embed/Zh2K7SxRHmo',
        imagem: 'https://example.com/the-quarry.jpg',
        steamLink: 'https://store.steampowered.com/app/1716740/The_Quarry/',
      },
      {
        nome: 'Psychonauts 2',
        descricao: 'Um jogo de plataforma e aventura com opções de acessibilidade, incluindo modo invencível e ajustes de dificuldade.',
        trailer: 'https://www.youtube.com/embed/liJTZfJhOcs',
        imagem: 'https://example.com/psychonauts-2.jpg',
        steamLink: 'https://store.steampowered.com/app/607080/Psychonauts_2/',
      },
  ];

  return (
    <>
      <NavBar />
      <div className='bodyacss'>
      <div className="acessibilidade-containeracss">
        <h1 className='h1acss'> Jogos com Acessibilidade</h1>
        <p className='descricaoacss'>O GamerHub é um site dedicado a todos os gamers, com foco na promoção de uma experiência inclusiva e acessível para todos. Nosso objetivo é criar um espaço onde jogadores de diferentes habilidades e necessidades possam encontrar jogos que atendam às suas exigências, com opções de acessibilidade que tornam o universo dos games mais inclusivo. Acreditamos que todos merecem ter a oportunidade de jogar e se divertir, e, por isso, destacamos jogos que oferecem recursos como legendas, ajustes de contraste, personalização de controles e narração, para que ninguém seja deixado de lado. No GamerHub, a acessibilidade é uma prioridade, garantindo que todos possam aproveitar os melhores títulos do mercado de maneira confortável e personalizada.</p>
        <div className="jogos-lista">
          {jogos.map((jogo, index) => (
            <div key={index} className="jogo-itemacss">
              <h2 className='h2acss'>{jogo.nome}</h2>
              <p className='pacss'>{jogo.descricao}</p>
              <div className="jogo-mediaacss">
                <iframe className='iframeacss'
                  width="560"
                  height="315"
                  src={jogo.trailer}
                  title={`Trailer de ${jogo.nome}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img src={jogo.imagem} alt={`Imagem de ${jogo.nome}`} className="jogo-imagemacss" />
              </div>
              <a href={jogo.steamLink} target="_blank" rel="noopener noreferrer" className="steam-linkacss">
                ADIQUIRIR 🛒
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Acessibilidade;
