# Frontend for teamchallenge project

-   [backend](https://dev-backend-b4vo.onrender.com/)
-   [frontend main](https://front-main-zano.onrender.com/)
-   [frontend dev](https://dev-backend-b4vo.onrender.com/)

## Run local

```bash
npm run dev       #localhost:3000/
npm run storybook #localhost:6006/
```

## Local run in Docker

First of all, install "Doker" and "Docker compose".
These URLs have instructions for installing "Doker" on any operating system like Linux, Windows, and Mac.

-   https://docs.docker.com/engine/install/
-   https://docs.docker.com/compose/install/

### docker-compose

Download the git repository with the code and switch to the branch named "dev".

Create a new network inside docker and named it as tch_network:

```bash
docker network create tch_network
```

Check whether the docker's network has been created using the command:

```bash
docker network ls
```

Change the directory to dev_local, this directory should contain the docker-compose.yml file, then you can run local containers with the command:

```bash
docker-compose up -d
```

Check whether the docker containers have been created using the command:

```bash
docker-compose ps
```

If the containers are running, you need to enter inside the container using the command:

```bash
docker exec -it tch_frontend bash
```

Run the application inside the container.

```bash
npm run dev
```

If everything is OK, you can use the application with any browser by this URL: http://localhost:3000

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
