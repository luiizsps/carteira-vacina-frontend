# Carteira Vacina Frontend

Frontend da aplicacao Carteira Vacina, desenvolvido com React e Vite.

## Requisitos

- Node.js instalado
- Backend `carteira-vacina` rodando localmente
- Banco de dados configurado para o backend

## Como rodar

1. Instale as dependencias:
```bash
npm install
```

2. Inicie o frontend:
```bash
npm run dev
```

3. Acesse no navegador:
```text
http://localhost:5173/
```

## Integracao com o backend

O frontend consome a API do backend pela porta `8089`.

Em ambiente de desenvolvimento, o Vite faz o proxy das requisicoes `/api` para:

```text
http://localhost:8089
```

Rotas usadas atualmente:

- `GET /vacina/consultar`
- `GET /vacina/consultar/faixa_etaria/{faixa}`

## Importante para testes

Para o frontend funcionar corretamente, e necessario que:

- o backend esteja rodando na porta `8089`
- o banco de dados do backend esteja funcionando
- a rota `http://localhost:8089/vacina/consultar` responda com sucesso

Se o backend ou o banco nao estiverem disponiveis, o frontend vai abrir, mas nao conseguira carregar os dados das vacinas.

## Build

Para gerar a versao de producao:

```bash
npm run build
```
