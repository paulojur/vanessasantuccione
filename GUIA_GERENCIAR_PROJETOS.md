# Guia de Gerenciamento de Projetos - Site Vanessa Santuccione

Este guia explica passo a passo como você pode **adicionar um novo projeto** ou **substituir um projeto existente** no seu site.

A estrutura do seu site agora é profissional: **Cada projeto tem sua própria página HTML**. Isso ajuda muito no Google (SEO), mas exige que você faça alterações em 3 lugares para que tudo funcione perfeitamente.

---

## 📝 Cenário de Exemplo
Para facilitar, vamos imaginar que você quer **substituir** o projeto antigo *"Travel & Lifestyle"* por um novo projeto chamado **"Neon Dreams"**.

### O que você vai precisar antes de começar:
1.  As imagens do novo projeto salvas na pasta `images/neon-dreams/` (exemplo).
2.  O texto (Título, Briefing, Conceito) do novo projeto.

---

## Passo 1: Criar a Página do Novo Projeto

A maneira mais fácil não é começar do zero, mas **copiar** uma página que já funciona.

1.  Vá na pasta do seu site (`f:\Site Vanessa\vanessasantuccione`).
2.  Encontre o arquivo do projeto que você quer substituir (neste exemplo: `project-travel-lifestyle.html`).
3.  Faça uma cópia dele (Copiar e Colar).
4.  Renomeie a cópia para o novo nome: `project-neon-dreams.html`.
5.  Abra esse novo arquivo no editor de código e altere as seguintes partes:

**Metadados (Para o Google e Facebook/WhatsApp):**
```html
<!-- Mude o Título da aba do navegador -->
<title>Neon Dreams | Vanessa Santuccione</title>

<!-- Mude a descrição que aparece no Google -->
<meta name="description" content="Neon Dreams - Uma colagem digital explorando luzes urbanas...">

<!-- Mude as tags Open Graph (para quando compartilhar no Zap) -->
<meta property="og:title" content="Neon Dreams | Vanessa Santuccione">
<meta property="og:url" content="https://vanessasantuccione.com/project-neon-dreams.html">
<meta property="og:image" content="https://vanessasantuccione.com/images/neon-dreams/capa.webp">
```

**Conteúdo Visível (O que o usuário vê):**
Role até encontrar a tag `<main>` e altere os textos e caminhos das imagens:
```html
<!-- Categoria -->
<span class="...">Personal Project</span>

<!-- Título Principal -->
<h1 class="...">Neon Dreams</h1>

<!-- Textos -->
<h2>The Brief</h2>
<p>Escreva aqui o briefing...</p>

<!-- Imagens (Caminho da pasta que você criou) -->
<img src="images/neon-dreams/capa.webp" alt="Neon Dreams Artwork" ...>
<img src="images/neon-dreams/detalhe1.webp" alt="Detail 1" ...>
```
> **Dica:** Mantenha as classes (ex: `class="w-full h-auto..."`) iguais para não quebrar o design.

---

## Passo 2: Atualizar a Vitrine (`portfolio.html`)

Agora que a página existe, precisamos criar o "botão" (card) para as pessoas clicarem nela.

1.  Abra o arquivo `portfolio.html`.
2.  Procure pelo bloco do projeto antigo que você vai substituir (dê um Ctrl+F e procure por `project-travel-lifestyle.html`).
3.  Você verá um bloco `<a>` grande. Altere o link e as informações:

```html
<!-- Mude o Link (href) para o arquivo que você criou no Passo 1 -->
<a href="project-neon-dreams.html" class="...">
    
    <!-- Mude a Imagem da Capa -->
    <img src="images/neon-dreams/capa.webp" alt="Neon Dreams - Descrição..." class="...">

    <!-- Mude o Texto que aparece EM CIMA da imagem (Versão Mobile) -->
    <div class="md:hidden ...">
        <p class="...">Neon Dreams</p>
        <p class="...">Personal Project</p>
    </div>

    <!-- Mude o Texto que aparece ao PASSAR O MOUSE (Versão Desktop) -->
    <div class="hidden md:flex ...">
        <!-- ... -->
        <p class="...">Neon Dreams</p>
        <p class="...">Personal Project</p>
    </div>
</a>
```

> **Se fosse um projeto NOVO (sem substituir):** Apenas copie um bloco `<a>...</a>` inteiro de outro projeto e cole no final da lista, logo antes de fechar a `</div>` dos projetos.

---

## Passo 3: Avisar o Google (`sitemap.xml`)

Para que o Google saiba rápido que esse projeto novo existe.

1.  Abra o arquivo `sitemap.xml`.
2.  Se você está **substituindo**: Procure a linha do projeto antigo e mude a URL.
    *   De: `<loc>https://vanessasantuccione.com/project-travel-lifestyle.html</loc>`
    *   Para: `<loc>https://vanessasantuccione.com/project-neon-dreams.html</loc>`
3.  Se você está **adicionando**: Copie um bloco `<url>...</url>` inteiro e cole no final, alterando a URL para a nova.
4.  Atualize a data em `<lastmod>` para a data de hoje (ex: `2025-02-15`).

---

## Resumo
1.  **Crie** o arquivo HTML do projeto (copiando um existente).
2.  **Edite** textos e links das imagens dentro dele.
3.  **Linke** ele na página `portfolio.html`.
4.  **Atualize** o `sitemap.xml`.

Pronto! Seu novo projeto está no ar, otimizado para SEO e pronto para ser compartilhado.
