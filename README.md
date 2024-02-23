# Aplicação de Coleta de Endereços de E-mail

Esta é uma aplicação web simples desenvolvida para coletar endereços de e-mail dos usuários. Atualmente, a aplicação não envia os e-mails recebidos para nenhum banco de dados, sendo apenas uma demonstração do formulário de coleta.

A aplicação foi implementada utilizando React com Vite, aproveitando a familiaridade e facilidade de desenvolvimento proporcionadas pelo React. Além disso, foram utilizadas as bibliotecas `styled-components` para estilização e `react-toastify` para exibir notificações ao usuário sobre o envio do e-mail.

Você pode acessar a aplicação em produção através do seguinte link: [Redway Desafio](https://redway-desafio.vercel.app/)

### Como executar localmente

Para executar esta aplicação localmente, você precisará ter o Docker instalado em sua máquina.

1. **Clone o Repositório:**
   
   ```
   git clone https://github.com/Lucas-Benfica/Redway-Desafio.git
   ```

2. **Navegue até o Diretório do Projeto:**

   ```
   cd Redway-Desafio
   ```

3. **Construa e Execute o Contêiner Docker:**

   Certifique-se de que seu Docker Daemon esteja em execução.

   ```
   docker-compose up --build
   ```

4. **Acesse a Aplicação:**

   Após o contêiner ser construído e executado com sucesso, a aplicação estará disponível em [http://localhost:8080](http://localhost:8080).

5. **Parar a Execução:**

   Quando terminar de usar a aplicação, você pode parar a execução do contêiner Docker executando o seguinte comando:

   ```
   docker-compose down
   ```

---

Agora você pode interagir com a aplicação localmente e testar o formulário de coleta de e-mails. Se precisar de mais alguma informação ou ajuda, não hesite em entrar em contato!

---