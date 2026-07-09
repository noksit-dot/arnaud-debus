# ─────────────────────────────────────────────────────────────
#  Site Arnaud Debus — commandes de développement
#  Usage : make <cible>.  `make` seul (ou `make help`) liste tout.
# ─────────────────────────────────────────────────────────────

.DEFAULT_GOAL := help
SHELL := /bin/bash

# Port du serveur de dev Astro (surchargeable : make dev PORT=3000)
PORT ?= 4321
URL  := http://localhost:$(PORT)/arnaud-debus/

.PHONY: help install dev open build preview check clean reinstall

help: ## Affiche cette aide
	@echo "Site Arnaud Debus — cibles disponibles :"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN{FS = ":.*?## "}{printf "  \033[36m%-11s\033[0m %s\n", $$1, $$2}'

# Installe les dépendances seulement si nécessaire (node_modules absent
# ou package.json plus récent). Sert de pré-requis aux autres cibles.
node_modules: package.json
	npm install
	@touch node_modules

install: node_modules ## Installe les dépendances (npm install)

dev: node_modules ## Serveur de dev + rechargement à la volée (HMR) → $(URL)
	@echo "▶ Dev sur $(URL)  —  Ctrl+C pour arrêter"
	npm run dev -- --port $(PORT)

open: ## Ouvre le site de dev dans le navigateur (macOS)
	@open "$(URL)"

build: node_modules ## Génère le site statique dans dist/
	npm run build

preview: build ## Build puis prévisualise le rendu de production
	npm run preview -- --port $(PORT)

check: node_modules ## Vérifie le code (astro check — installe l'outil au 1er run)
	npx astro check

clean: ## Supprime les fichiers générés (dist/, .astro/)
	rm -rf dist .astro
	@echo "✓ Nettoyé."

reinstall: clean ## Réinstalle tout de zéro (supprime node_modules)
	rm -rf node_modules package-lock.json
	npm install
