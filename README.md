# Frontend for teamchallenge project

- Default React App with few get and post requests to [backend](https://hello-world-sije.onrender.com/)
- Hosted at [render.com](https://react-x1x9.onrender.com/)
- Docker image [cr1m3s/react](https://hub.docker.com/repository/registry-1.docker.io/cr1m3s/react/general)
- Local run:
  `npm start` :)

## Локальний запуск

Для того аби запустити проект локально потрібно спочатку встановити собі docker та docker-compose. Актуальні інструкції по встановленню можна знайти по наведеним посиланням, для кожної операційної системи як то linux, windows, mac.

- https://docs.docker.com/engine/install/
- https://docs.docker.com/compose/install/

### Запуск docker-compose

Після встановлення вище наведених залежностей, потрібно викачати собі на локальну машину репозиторій з кодом і перейти в гілку dev.

Cтворити docker мережу tch_network за допомогою команди:

```bash
docker network create tch_network
```

Перевірити чи була створена docker мережа tch_network за допомогою команди:

```bash
docker network ls
```

Використовуючи консоль зайти в директорію dev_local яка містить файл docker-compose.yml і скориставшись наведеною комадною запустити контейнери для локальної розробки фронтенд застосунку.

```bash
docker-compose up -d
```

Дочекатися поки будуть завантажені усі необхідні образи з інтернету і перевірити стан роботи за допомогою наведеної команди в середині директорії dev_local

```bash
docker-compose ps
```

Якщо контейнери запущені тоді потрібно зайти в середину виконавши таку команду:

```bash
docker exec -it tch_frontend bash
```

Перебуваючи в середині контейнера запустити наступні команди:

```bash
npm install --silent
npm install react-scripts@3.4.1 -g --silent
```

Для запуску застосунку, виконати команду в середині контейнера:

```bash
npm start
```

В випадку успішного запуску ви зможете мати доступ до застосунку через ваш браузре за адресою http://localhost:3000
