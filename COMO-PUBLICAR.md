# Como publicar no GitHub Pages (grátis)

1. Entre em github.com com a conta **elsondev-backend**.
2. Crie um repositório público chamado exatamente **elsondev-backend.github.io**.
3. Clique em **Add file > Upload files** e arraste todos os arquivos desta pasta
   (index.html, styles.css, script.js e a pasta img). Clique em **Commit changes**.
4. Vá em **Settings > Pages** e confira que a fonte é **Deploy from a branch**, branch **main**, pasta **/ (root)**.
5. Em um ou dois minutos o site estará em **https://elsondev-backend.github.io**.

Para atualizar depois, é só enviar os arquivos novos pelo mesmo botão Upload files.

## O que falta você preencher

- Links do WelCar ("Ver site" e "Código") no index.html, onde está `href="#"`.
- Projetos 2 e 3: troque título, descrição, tags e links. Para colocar um print,
  troque `<div class="card-capa">...</div>` por `<img src="img/seu-print.jpg" alt="...">`.
- Depois de publicar, troque `content="img/elson.jpg"` na tag `og:image` pelo endereço completo
  (https://elsondev-backend.github.io/img/elson.jpg) para a foto aparecer quando o link for compartilhado.

Dica: no GitHub Pages, nomes de arquivo diferenciam maiúsculas e minúsculas
(Projeto1.png e projeto1.png são arquivos diferentes). Use nomes em minúsculas e sem espaços.
