# Portfolio

Portfolio full-stack moderne avec architecture monorepo, frontend React/TypeScript et backend Rust/Actix.

## Aperçu

image

Demo live: [lien]()

## Architecture
```bash
portfolio/
├── apps/
│   ├── frontend/           # Application React (Vite + TypeScript)
│   └── backend/            # API Rust (Actix Web)
├── libs/
│   └── ui/                 # Composants UI partagés (React + SCSS)
├── tools/
│   ├── docker/             # Configurations Docker
│   └── storybook/          # Documentation & test des composants
├── Makefile                # Commandes Docker simplifiées
└── docker-compose.yml      # Orchestration des services
```
## Installation avec `Docker`

### Prérequis

- `Docker` & `Docker compose`
- `Make` (optionnel mais recommandé)

### Démarrage rapide
```bash
# Cloner le repository
git clone https://github.com/EnzoCordovana/Portfolio.git

# Démarrer tous les services pour la première fois
make f

# Démarrer tous les services
make dev

# Sans Makefile
docker compose up
```

L'application sera accessible sur :
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **Storybook**: http://localhost:6006

## Licence

Ce projet est sous licence MIT. voir [[LICENSE]] pour plus de détails.

## Contact

CORDOVANA Enzo - enzocordo66@gmail.com

[LinkedIn](https://www.linkedin.com/in/enzocordovana/) - [Portfolio]() - [Github](https://github.com/EnzoCordovana)

---
⭐ Star le projet si vous l'appréciez !