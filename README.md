
# Dashboard.io

![image](https://cdn.discordapp.com/avatars/485752871027998725/abd8ca42e420f9fcda938f8281d874db.png?size=160)

Ce repository est un fork régulièrement mis à jour de **Dashboard.io**, un dashboard open source créé par **Sworder71**.

## Table des matières

- [Dashboard.io](#dashboardio)
  - [Table des matières](#table-des-matières)
  - [V1](#v1)
  - [Installation](#installation)
    - [Compléter le fichier `config.json`](#compléter-le-fichier-configjson)
  - [Fonctionnement](#fonctionnement)

## V1

La version `0.0.1` a été créée le Dimanche 2 septembre 2018. Pour utiliser `Dashboard.io`, vous devez mettre une **star** au git.

## Installation

### Compléter le fichier `config.json`

- `id` doit être l'ID de votre bot.
- `token` doit être le **token** du bot.
- `prefix` doit être le **prefix** du bot.
- `secret` se trouve dans la page de votre bot sur [discordapp.com](https://discordapp.com/developers/applications/)
- `url` doit être l'URL vers laquelle les utilisateurs seront redirigés, si vous êtes en local, mettez simplement: `http://localhost`.
- `production` doit être **true** ou **false**. Si vous utilisez une URL avec le port (comme `localhost:3000`), mettez **false**. Sinon, mettez **true**.

## Fonctionnement

> **Note: `npm` et `nodejs` sont requis pour faire fonctionner le bot.**

- Veillez à bien mettre la redirection OAuth2 dans les **REDIRECTS** de votre bot.
![image](https://cdn.discordapp.com/attachments/485886312398848030/485886331336130561/unknown.png)
- Faites `npm install` afin d'installer tous les modules nécessaire au fonctionnement du bot.
- Pour lancer le bot, faites `node app.js`.
