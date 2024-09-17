# Orçamento Pessoal

Este projeto foi desenvolvido durante o curso de desenvolvimento web do Jamilton Damasceno. O objetivo é praticar o uso de Bootstrap, HTML, CSS e JavaScript para criar uma aplicação de orçamento pessoal.

## Funcionalidades

### Cadastro de Despesas

Na página [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "c:\Users\Cynthia\OneDrive\Documentos\GitHub\Orcamento-Pessoal\index.html"), o usuário pode cadastrar novas despesas. Os campos disponíveis para cadastro são:

- **Ano**: Seleção do ano da despesa.
- **Mês**: Seleção do mês da despesa.
- **Dia**: Inserção do dia da despesa.
- **Tipo**: Seleção do tipo de despesa (Alimentação, Educação, Lazer, Saúde, Transporte).
- **Descrição**: Descrição da despesa.
- **Valor**: Valor da despesa.

  ![image](https://github.com/user-attachments/assets/dc716e02-9fcd-4eb5-9896-2f8a56a24b22)


Ao clicar no botão de adicionar (`<i class="fas fa-plus"></i>`), a despesa é validada e, se todos os campos estiverem preenchidos corretamente, é salva no [`localStorage`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A29%7D%7D%5D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "Go to definition") do navegador. Caso contrário, uma mensagem de erro é exibida.

![image](https://github.com/user-attachments/assets/1c9be9d7-5b2d-4751-8a95-77b7715bd899)
![image](https://github.com/user-attachments/assets/386c66d3-eb12-42e9-a2bb-9d57c76d83d9)


### Consulta de Despesas

Na página [`consulta.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Fconsulta.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "c:\Users\Cynthia\OneDrive\Documentos\GitHub\Orcamento-Pessoal\consulta.html"), o usuário pode consultar as despesas cadastradas. Os filtros disponíveis para consulta são:

- **Ano**: Filtrar despesas por ano.
- **Mês**: Filtrar despesas por mês.
- **Dia**: Filtrar despesas por dia.
- **Tipo**: Filtrar despesas por tipo.
- **Descrição**: Filtrar despesas por descrição.
- **Valor**: Filtrar despesas por valor.

  ![image](https://github.com/user-attachments/assets/25876fd8-72a3-42df-b6f5-1c346340ccb2)


Ao clicar no botão de pesquisa (`<i class="fas fa-search"></i>`), as despesas que correspondem aos filtros são exibidas em uma tabela. Cada linha da tabela mostra:

- **Data**: Data da despesa (dia/mês/ano).
- **Tipo**: Tipo da despesa.
- **Descrição**: Descrição da despesa.
- **Valor**: Valor da despesa.

![image](https://github.com/user-attachments/assets/7f47a91a-1f2a-437d-8023-2f096c0f0071)


### Remoção de Despesas

Na tabela de despesas exibida na página [`consulta.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Fconsulta.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "c:\Users\Cynthia\OneDrive\Documentos\GitHub\Orcamento-Pessoal\consulta.html"), cada linha possui um botão de remoção (`<i class="fas fa-times"></i>`). Ao clicar neste botão, a despesa correspondente é removida do [`localStorage`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A29%7D%7D%5D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "Go to definition") e a tabela é atualizada.

![image](https://github.com/user-attachments/assets/4b01f30f-5043-453e-8909-95a9bb79b2d3)


### Modais de Aviso

A aplicação utiliza modais para exibir mensagens de sucesso ou erro ao usuário. Existem três tipos de modais:

- **Sucesso na Gravação**: Exibido quando uma despesa é cadastrada com sucesso.
- **Erro na Gravação**: Exibido quando há um erro no cadastro da despesa (campos não preenchidos corretamente).
- **Sucesso na Exclusão**: Exibido quando uma despesa é removida com sucesso.

## Estrutura do Projeto

- **index.html**: Página de cadastro de despesas.
- **consulta.html**: Página de consulta de despesas.
- **app.js**: Arquivo JavaScript que contém a lógica da aplicação.
- **logo.png**: Imagem do logo da aplicação.

## Tecnologias Utilizadas

- **HTML**: Estrutura das páginas.
- **CSS**: Estilização das páginas.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **JavaScript**: Lógica da aplicação.
- **localStorage**: Armazenamento local das despesas.

## Como Executar

1. Clone o repositório.
2. Abra o arquivo [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "c:\Users\Cynthia\OneDrive\Documentos\GitHub\Orcamento-Pessoal\index.html") em um navegador para cadastrar despesas.
3. Abra o arquivo [`consulta.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FCynthia%2FOneDrive%2FDocumentos%2FGitHub%2FOrcamento-Pessoal%2Fconsulta.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225b9c28a9-d4a3-4310-becd-511b16b01775%22%5D "c:\Users\Cynthia\OneDrive\Documentos\GitHub\Orcamento-Pessoal\consulta.html") em um navegador para consultar e remover despesas.

## Conclusão

Este projeto é uma excelente prática para quem deseja aprender e aplicar conceitos de desenvolvimento web utilizando HTML, CSS, Bootstrap e JavaScript. Ele abrange funcionalidades comuns em aplicações reais, como cadastro, consulta, remoção de dados e exibição de mensagens de feedback ao usuário.
