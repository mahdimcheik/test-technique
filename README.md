# Résumé

Ce projet est une application web réalisée avec Angular 17 pour le front-end et Json Server pour simuler un back-end. Elle utilise l'API Google Maps et nécessite une clé d'API pour fonctionner.

## Installation

Pour mettre ne place ce projet il faut :
<br/>
1- Cloner le dépôt:
<br/>
<br/>

```bash
    git clone git@github.com:mahdimcheik/test-technique.git
```

<br/>

2- Accéder au répertoire et installer les dépendances:
<br/>
<br/>

```bash
    cd test-technique
```

<br/>

```bash
    npm i
```

<br/>

3- Lancer le projet
<br/>
<br/>

```bash
    npm run dev
```

Cette commande lancera simultanément le front-end et le back-end.

Il est également possible de les lancer séparément: <br/>

### Front-end

```bash
ng s -o
```

### Back-end

```bash
npx json-server capitals.json
```

## Remarque

Une clé d'API Google Maps est nécessaire pour que l'application fonctionne. Insérez-la dans le fichier index.html.
