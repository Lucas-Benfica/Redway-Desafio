# Aplicação de Coleta de Endereços de E-mail

Esta é uma aplicação web simples desenvolvida para coletar endereços de e-mail dos usuários. Atualmente, a aplicação não envia os e-mails recebidos para nenhum banco de dados, sendo apenas uma demonstração do formulário de coleta.

Durante o desenvolvimento desta aplicação, optei pelo ReactJS por minha familiaridade com a ferramenta e sua facilidade de desenvolvimento, além das vantagens que ele oferece, principalmente para projetos maiores, como a reutilização de componentes e uma boa variedade de bibliotecas disponíveis. Para a estilização do site, escolhi a biblioteca styled-components, que possui a mesma capacidade do CSS padrão, mas facilita bastante a manutenção do código. Após a implementação do formulário de coleta, utilizei a biblioteca react-toastify, para que fosse enviado uma notificação de sucesso para o usuário ao enviar o e-mail.

Para containerizar a aplicação, utilizei a imagem node:alpine como base devido à sua leveza e eficiência. Em seguida, configurei sua construção, incluindo a instalação de dependências e a construção dos arquivos necessários para produção. Optei por utilizar a imagem base do Nginx devido à sua capacidade de servir arquivos estáticos de forma eficiente, o que é ideal para aplicações front-end como esta. O Nginx atua como um servidor web leve, garantindo o desempenho e a confiabilidade da aplicação.

Por último, para facilitar a execução do projeto em diferentes ambientes, criei um arquivo docker-compose.

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
   docker-compose up -d --build
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
