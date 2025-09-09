This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# ♻️ reUSE – Plataforma de Reaproveitamento

**reUSE** é uma aplicação web desenvolvida com **Next.js** e **TypeScript**, criada como parte de um projeto acadêmico.  
O objetivo é promover a **sustentabilidade e o reaproveitamento de itens**, oferecendo aos usuários a possibilidade de **trocar, doar ou vender produtos usados** de forma simples e acessível.

---

## ⚙️ Funcionalidades

- Cadastro e login de usuários  
- Autenticação social (Google, Facebook)  
- Listagem de produtos disponíveis  
- Busca de produtos por CEP (integração com **ViaCEP**)  
- Perfil do usuário com produtos cadastrados  
- Integração com banco de dados **PostgreSQL** via **Prisma ORM**  

---

## 🔗 APIs Utilizadas

- [ViaCEP](https://viacep.com.br) – Para buscar endereços a partir do CEP digitado  

---

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) – Framework React  
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática  
- [Prisma](https://www.prisma.io/) – ORM para banco de dados  
- [PostgreSQL](https://www.postgresql.org/) – Banco de dados relacional  
- [Axios](https://axios-http.com/) – Requisições HTTP  
- [Vercel](https://vercel.com/) – Deploy da aplicação  

---

## 📂 Estrutura do Projeto

```bash
reuse/
 ├── prisma/              # Configurações do Prisma ORM
 ├── app/                 # Páginas e rotas da aplicação
 ├── components/          # Componentes reutilizáveis
 ├── services/            # Serviços e lógica de negócio
 ├── public/              # Arquivos estáticos
 ├── package.json         # Dependências do projeto
 └── README.md            # Documentação


🚀 Como rodar o projeto

1.Clone o repositório:
bash

git clone https://github.com/D4nilo-Rocha/reUse.git

2. Acesse a pasta do projeto:
cd reuse

3.Instale as dependências:
npm install
# ou
yarn install

4.Inicie o servidor de desenvolvimento:
yarn dev