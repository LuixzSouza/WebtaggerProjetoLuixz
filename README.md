# Webtagger Situação – Projeto de Demonstração

Este repositório contém o site Webtagger desenvolvido como um projeto situacional para demonstrar minhas habilidades em desenvolvimento web. O objetivo é apresentar uma versão redesenhada e responsiva do site da empresa, usando as tecnologias que eles adotam, e servir como portfólio para uma oportunidade de entrar na equipe.

## 📝 Sobre este projeto

- Propósito: Criar uma versão do site da Webtagger com melhorias de design, experiência do usuário e boas práticas de código, servindo como prova de conceito para uma possível vaga na empresa.
- Escopo: Mantém as seções principais (Home, Cases, Sites, Aplicativos, Sistemas em nuvem, E‑commerce, Hospedagem, Contato), mas adiciona animações, gradientes dinâmicos e responsividade aprimorada.
- Contexto: Projeto criado individualmente e não será publicado em produção pela empresa. É apenas para fins didáticos e de avaliação de competências.

## 🚀 Tecnologias utilizadas

- HTML5 e CSS3 (com CSS Nesting e variáveis customizadas)
- JavaScript para interações e animações leves
- Sass/SCSS (opcional, compatível) ou CSS Custom Properties
- Docker (exemplo de ambiente de desenvolvimento em container)
- WordPress (para simular a versão original, opcional)
- Font Awesome (ícones)

## 📂 Estrutura do projeto

```
/ (root)
│
├── index.html           # Página inicial e estrutura principal
├── style.css            # Estilos globais e componentes
├── script.js            # Funções de interatividade
├── Dockerfile           # Exemplo de container para dev
├── README.md            # Este arquivo
└── /img                 # Imagens e logos usados
    └── logoWebtagger.png
```

## ⚙️ Como executar

Clone o repositório:
```
git clone https://github.com/seu-usuario/webtagger-situacao.git
cd webtagger-situacao
```

Abrir localmente (sem Docker):
- Abra o arquivo index.html no navegador.

🐳 Passo a passo com Docker
Com Docker (opcional):
```
cd webtagger

docker build -t projetowebtagger .

docker run -p 8080:80 projetowebtagger
```
Acesse http://localhost:8080.

## 🎯 O que será avaliado

- Qualidade do HTML semântico e acessibilidade
- Organização e clareza no CSS (uso de variáveis e aninhamento)
- Uso de boas práticas JavaScript
- Responsividade e usabilidade em mobile e desktop
- Criatividade no design e animações sutis

## 📞 Contato

Se tiver dúvidas ou quiser conversar sobre o projeto, entre em contato:

Nome: Luiz Antônio de Souza
E-mail: luiz.anttoniodesouza004@gmail.com
LinkedIn: https://www.linkedin.com/in/luiz-antonio-souza-5000a226b/

Este projeto é um trabalho acadêmico/situacional e não representa a versão oficial do site da Webtagger.
