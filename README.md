# 🌍 AtlasWorld

> Une application React moderne pour explorer les pays du monde entier

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**AtlasWorld** est une application web interactive qui permet d'explorer et de découvrir des informations détaillées sur tous les pays du monde. Développée avec React et alimentée par l'API REST Countries, elle offre une expérience utilisateur fluide et moderne.

## ✨ Fonctionnalités

### 🔍 Exploration des Pays
- **Liste complète** : Affichage de tous les pays avec drapeaux, population, région et capitale
- **Recherche en temps réel** : Filtrage instantané par nom de pays
- **Filtrage par région** : Sélection par continent (Afrique, Amérique, Asie, Europe, Océanie)
- **Page de détails** : Informations complètes sur chaque pays (nom natif, sous-région, monnaies, langues, domaine internet)

### 🗺️ Navigation Intelligente
- **Pays frontaliers** : Navigation directe vers les pays voisins
- **Boutons de retour** : Retour à la page précédente ou à l'accueil

### ❤️ Système de Favoris
- **Sauvegarde de pays** : Marquez vos pays préférés d'un simple clic
- **Page dédiée** : Consultez tous vos favoris en un seul endroit
- **Badge de compteur** : Visualisez le nombre de favoris dans le header
- **Persistance** : Vos favoris sont sauvegardés localement (localStorage)

### 🎨 Interface "Vintage Explorer"
- **Thème Carte au Trésor** : Design unique inspiré des cartes anciennes et parchemins
- **Mode sombre** : Basculez entre le mode "Jour" (Parchemin) et "Nuit" (Bois sombre)
- **Typographie** : Polices *Cinzel* et *Crimson Text* pour une immersion totale
- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **UX soignée** : Animations fluides et interactions satisfaisantes

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/atlasworld.git
cd atlasworld

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`

### Build pour la Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool ultra-rapide
- **React Router v6** - Gestion du routing
- **Context API** - Gestion d'état global (favoris)
- **REST Countries API v3.1** - Source de données
- **CSS Variables** - Système de thème dynamique
- **localStorage** - Persistance des favoris

## 📁 Structure du Projet

```
atlasworld/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── CountryCard.jsx
│   │   ├── FavoriteButton.jsx
│   │   ├── FilterRegion.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/              # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── CountryDetails.jsx
│   │   └── Favorites.jsx
│   ├── context/            # Contextes React
│   │   └── FavoritesContext.jsx
│   ├── App.jsx             # Composant principal
│   ├── App.css             # Styles globaux
│   └── index.css           # Variables CSS et reset
├── public/                 # Fichiers statiques
└── package.json
```

## 🎯 Fonctionnalités Détaillées

### Recherche et Filtrage
Recherchez un pays par son nom ou filtrez par région géographique. Les résultats s'affichent instantanément grâce à la gestion d'état React.

### Page de Détails
Cliquez sur n'importe quel pays pour accéder à une page détaillée contenant :
- Nom natif du pays
- Population totale
- Région et sous-région
- Capitale
- Domaine internet (TLD)
- Monnaies utilisées
- Langues parlées
- Pays frontaliers (cliquables)

### Système de Favoris
- Ajoutez des pays à vos favoris depuis la page d'accueil ou la page de détails
- Consultez tous vos favoris sur une page dédiée (`/favorites`)
- Les favoris sont sauvegardés dans le localStorage et persistent après rafraîchissement
- Badge dynamique dans le header affichant le nombre de favoris

### Mode Sombre
Basculez entre le mode clair et sombre selon vos préférences. Le thème est appliqué via des variables CSS pour une transition fluide.

## 🌐 API

Ce projet utilise l'[API REST Countries v3.1](https://restcountries.com/) pour récupérer les données des pays.

Endpoints utilisés :
- `GET /v3.1/all?fields=...` - Liste de tous les pays
- `GET /v3.1/alpha/{code}?fields=...` - Détails d'un pays spécifique
- `GET /v3.1/alpha?codes={codes}&fields=...` - Plusieurs pays par codes

## 📝 Scripts Disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer le build de production
npm run preview  # Prévisualiser le build de production
npm run lint     # Linter le code avec ESLint
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ dans le cadre d'un projet de formation React.

## 🙏 Remerciements

- [REST Countries API](https://restcountries.com/) pour les données
- [React](https://reactjs.org/) pour le framework
- [Vite](https://vitejs.dev/) pour l'outillage de développement

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !
