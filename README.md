<a name="readme-top"></a>

<h2>L5 Music</h2>
<br>
<details>
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre">Sobre o Projeto</a>
      <ul>
        <li><a href="#stacks">Stacks</a></li>
      </ul>
    </li>
    <li>
      <a href="#inicio">Rodando o projeto</a>
      <ul>
        <li><a href="#pre-requisitos">Pré Requisitos</a></li>
      </ul>
    </li>
    <li><a href="#home">Página Inicial</a></li>
    <li><a href="#artists-albums">Artistas e Álbuns</a></li>
    <li><a href="#responsive">Layout responsivo</a></li>
  </ol>
</details>

### Sobre

<p id="sobre">O projeto L5 Music objetiva reunir álbuns, artistas e músicas além de realizar uma busca específica por artistas e álbuns. Também pode monitorar a utilização do usuário, armazenando dados de consulta.</p>


### Stacks Utilizadas

<p id="stacks"><p>

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Angular][Angular.io]][Angular-url]
* [![Primeng][Primeng.com]][Primeng-url]
* [![SweetAlert][Sweetalert.com]][Sweetalert-url]

### Rodando o Projeto

<p id="inicio">Para utilizar a aplicação da maneira correta é necessário seguir alguns passos.</p>

### Pré-requisitos e instalação

<p id="pre-requisitos">Devem ser seguidos os seguintes passos:</p>

1. Gere, de forma gratuita, um token (key) para utilização da API [https://www.last.fm/api/intro](https://www.last.fm/api/intro)
2. Clone o repositório
   ```sh
   git clone https://github.com/FalcaoCamilla/teste-l5.git
   ```
3. Instale os pacotes do NPM
   ```sh
   npm install
   ```
4. Salve sua chave (env)
   ```js
   const environment = {
      apiKey: 'e3ec2db4a3260319fd40a19fe78ef52a'
   }

   ```
5. Rode o projeto Angular
   ```sh
   ng serve
   ```

### Página Inicial

<p id="home">A página inicial é iniciada realizando uma busca limitada pelas melhores músicas do momento.</p>
<p>É possível, através dela, acessar os componentes de artistas e álbuns</p>

https://user-images.githubusercontent.com/94142714/235805895-eee92821-f24b-449b-91af-ad22f2841e67.mp4

### Artistas e Álbuns

<p>Antes de tudo, é possível verificar uma navbar. Nesse cabeçalho será possível alternar entre artistas e álbuns (isso é refletido diretamente no tipo de busca feita) ou voltar à página inicial do projeto</p> 
<p id="artists-albums">A página de artistas, assim como a de álbuns, tem um layout padrão. Inicialmente, deverão ser carregados 5 melhores artistas ou, a depender da página acessada, 5 álbuns, sendo um de cada top artista, respectivamente.</p>

https://user-images.githubusercontent.com/94142714/235806230-b02383d4-9440-43aa-8832-94f7d4ffca32.mp4

<p>Na mesma página é possível realizar uma busca, seja ela por artista ou por álbum - a depender, novamente, da página escolhida - e ter seu resultado exibido na seção abaixo. Também conta com um histórico (clicável e removível) para buscas recentes.</p>

https://user-images.githubusercontent.com/94142714/235807573-bb2b456c-afb0-4176-afc1-538c21557232.mp4

### Responsividade

<p id="responsividade">Por fim, o layout é adaptável e se comporta da seguinte forma:</p>

https://user-images.githubusercontent.com/94142714/235809307-dc03fa07-ce90-4762-8f6b-97e88b5b8491.mp4

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Primeng.com]: https://img.shields.io/badge/PrimeNg-DD0031?style=for-the-badge&logoColor=white
[Primeng-url]: https://primeng.org/
[Sweetalert.com]: https://img.shields.io/badge/SweetAlert-ff69b4?style=for-the-badge&logoColor=white
[Sweetalert-url]: https://sweetalert2.github.io/
