# Psicólogo Clínico - Landing Page

Landing page profissional para psicólogo clínico, desenvolvida com React 19, TypeScript e Vite.

## Visão Geral

Este projeto é uma single-page application (SPA) moderna que apresenta os serviços de um psicólogo clínico, com formulário de contato integrado, blog e design totalmente responsivo.

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 19.2.3 | Biblioteca UI |
| TypeScript | 5.8.2 | Tipagem estática |
| Vite | 6.2.0 | Build tool e dev server |
| React Router DOM | 7.12.0 | Roteamento client-side |
| Tailwind CSS | CDN | Framework de estilos |
| Lucide React | 0.562.0 | Biblioteca de ícones |

## Arquitetura do Projeto

```
micael-psicologo/
├── components/              # Componentes React reutilizáveis
│   ├── About.tsx           # Seção sobre o profissional
│   ├── Benefits.tsx        # Benefícios da terapia online
│   ├── Blog.tsx            # Grid de posts do blog
│   ├── ContactForm.tsx     # Formulário de contato
│   ├── FAQ.tsx             # Perguntas frequentes (accordion)
│   ├── Footer.tsx          # Rodapé com CTA e contatos
│   ├── Hero.tsx            # Seção hero principal
│   ├── Navbar.tsx          # Barra de navegação responsiva
│   ├── ScrollToTop.tsx     # Utilitário para scroll
│   ├── Services.tsx        # Serviços oferecidos
│   └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
│
├── pages/                   # Páginas da aplicação
│   ├── Home.tsx            # Página inicial (landing page)
│   └── BlogPost.tsx        # Página individual de artigo
│
├── data/                    # Dados estáticos
│   └── blogPosts.ts        # Conteúdo dos posts do blog
│
├── public/                  # Arquivos estáticos
│   └── images/             # Imagens otimizadas
│
├── App.tsx                 # Componente raiz com rotas
├── index.tsx               # Entry point da aplicação
├── constants.tsx           # Dados de benefícios e serviços
├── types.ts                # Interfaces TypeScript
├── vite.config.ts          # Configuração do Vite
└── tsconfig.json           # Configuração TypeScript
```

## Estrutura da Landing Page

A página inicial é composta pelas seguintes seções:

1. **Navbar** - Navegação fixa com menu responsivo
2. **Hero** - Apresentação principal com CTAs
3. **Benefits** - Benefícios da terapia online
4. **About** - Sobre o profissional
5. **Services** - Serviços oferecidos (Ansiedade, Depressão, Fobias, TOC, Luto, Baixa Autoestima)
6. **Contact** - Formulário de contato
7. **Blog** - Artigos sobre saúde mental
8. **FAQ** - Perguntas frequentes
9. **Footer** - Rodapé com informações de contato

## Rotas

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Landing page completa |
| `/blog/:id` | BlogPost | Artigo individual do blog |

## Integrações

- **FormSubmit.co** - Serviço de envio de emails para o formulário de contato
- **WhatsApp API** - Botão flutuante para contato direto
- **Google Fonts** - Fonte Inter

## Como Rodar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd micael-psicologo
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Preview da build de produção |

## Build de Produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`, prontos para deploy em plataformas como Vercel, Netlify ou qualquer servidor de arquivos estáticos.

## Personalização

### Cores do Tema

As cores principais estão definidas via Tailwind:

- **Primary**: `#006D77` (teal escuro)
- **Secondary**: `#83C5BE` (teal claro)
- **Accent**: `#EDF6F9` (azul claro)
- **Dark**: `#212529` (texto escuro)

### Conteúdo

- **Serviços e Benefícios**: Edite `constants.tsx`
- **Posts do Blog**: Edite `data/blogPosts.ts`
- **FAQ**: Edite o array `QUESTIONS` em `components/FAQ.tsx`
- **Informações de Contato**: Edite os componentes `Footer.tsx` e `ContactForm.tsx`

## Características

- Design responsivo (mobile-first)
- Animações suaves e modernas
- SEO-friendly
- Performance otimizada com imagens comprimidas
- TypeScript para maior segurança de tipos
- Componentes modulares e reutilizáveis

## Licença

Este projeto é de uso privado.
