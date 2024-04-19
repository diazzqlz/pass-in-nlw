# Pass.in - API de Gestão de Participantes em Eventos Presenciais
O Pass.in é uma aplicação de gestão de participantes em eventos presenciais. Esta API permite que organizadores cadastrem eventos, e os participantes conseguem fazer o check-in no evento.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

## Instalação
1. Clone o repositório do Pass-in:
```bash
git clone https://github.com/diazzqlz/pass-in-nlw.git
cd pass-in-nlw
npm install
```
## Uso
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
npm run dev
```
O servidor será iniciado em `http://localhost:3333`.

## Rotas

* **GET /attendees/:attendeeId/check-in:** essa rota permite que um participante seja marcado como presente em um evento, garantindo que cada participante só possa realizar o check-in uma vez.
* **POST /events:** essa rota permite que novos eventos sejam criados na aplicação, garantindo que cada evento tenha um slug único.
* **GET /attendees/:attendeeId/badge:** essa rota permite que o participante obtenha seu crachá, incluindo informações importantes sobre o evento e a URL de check-in.
* **GET /events/:eventId/attendees:** essa rota permite que os organizadores obtenham os participantes de um evento específico, com opções de filtragem e paginação dos resultados.
* **GET /events/:eventId:** essa rota permite que os usuários obtenham os detalhes de um evento específico, incluindo informações sobre o número máximo de participantes e a quantidade de participantes já inscritos.
* **POST /events/:eventId/attendees:** essa rota permite que os usuários registrem novos participantes em eventos específicos, garantindo que não haja duplicatas de participantes e respeitando o número máximo de participantes permitidos para cada evento.
