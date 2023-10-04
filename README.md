# Frontend for teamchallenge project

- [backend](https://dev-backend-b4vo.onrender.com/)
- [frontend гілка main](https://front-main-zano.onrender.com/)
- [frontend гілка dev](https://dev-backend-b4vo.onrender.com/)

## Run local

```bash
npm run dev       #localhost:3000/
npm run storybook #localhost:6006/
```

## Налаштування Pretier в Visual Studio Code

Для початку потрібно встановити плагін з назвою **Prettier - Code formatter**

Сайт плагіна [https://prettier.io/](https://prettier.io/)

Для того аби використовувати однакове форматування коду для редактора Visual Studio Code сторений файл в директорії проєкту **dev_local/vsc_prettier/.prettierrc**

Зайдіть в Visual Studio Code в налаштування:

```bash
File / Preferences / Settings
```

Виберіть вкладку **Workspace**
натисніть **Ctrl + Shift + p**
має з'явитися пошуковий рядок в який потрібно ввести.

```bash
prettier.configPath
```

Після цього має з'явитися налаштування **"Path to the prettier configuration file."** з полем для вводу шляху.
В це поле потрібно ввести шлях до файлу:

```bash
./dev_local/vsc_prettier/.prettierrc
```

Перевірити наступне налаштування, має стояти галочка.
Для швидкого пошуку налаштування натисніть **Ctrl + Shift + p** і ввдеіть наведений текст.

```bash
prettier.requireConfig
```

## Локальний запуск Docker

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

В середині контейнеру запустити застосунок

```bash
npm run dev
```

В випадку успішного запуску ви зможете мати доступ до застосунку через ваш браузeр за адресою http://localhost:3000

## Storybook and styled

Documentation storybook and styled

- [storybook + sc ](https://storybook.js.org/recipes/styled-components)

### Run storybook locally

Go to the project directory

Install dependencies

```bash
npm i
```

Install storybook

```bash
npx storybook@latest init
```

Install storybook + styled comp

```bash
npm i @storybook/addon-stylind --save-dev
```

Next step, edit file **.storybook/main.js** add this string to the addon section.

```javascript
addons: [
  ...
  "@storybook/addon-styling",
],
```

Run storybook

```bash
npm run storybook
```

If successful, storybook will be available at
http://localhost:6006/
