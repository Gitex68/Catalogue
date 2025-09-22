# 🚀 Site de Vente Scolaire - Voyage Toulouse 2025

## 📖 Description

Site web moderne et interactif pour soutenir le financement du voyage scolaire à Toulouse des élèves ISAS (Initiation aux Sciences Aéronautiques et Spatiales) du Lycée d'Altkirch. Le site présente une sélection soigneusement choisie de 4 catalogues de produits de qualité pour financer cette aventure éducative dans la capitale européenne de l'aéronautique.

## ✨ Fonctionnalités Principales

### 🎨 **Design Moderne & Animations**
- Interface glassmorphism avec effets de transparence avancés
- Animations d'accueil spectaculaires avec vagues cascade
- Transitions fluides et micro-interactions
- Système anti-scintillement pour une expérience parfaite
- Particules animées et formes flottantes

### 🌓 **Système de Thème Avancé**
- Mode sombre/clair avec transition douce
- Sauvegarde des préférences utilisateur
- Variables CSS dynamiques pour tous les éléments
- Adaptation automatique des couleurs et contrastes

### 📱 **Responsive Design Premium**
- Design adaptatif mobile-first
- Navigation hamburger animée sur mobile
- Grilles CSS Grid et Flexbox optimisées
- Touch-friendly sur tous les appareils

### 🛍️ **Showcase Produits Interactif**
- 4 catalogues avec cartes produits stylisées
- Modales immersives pour chaque catalogue
- Badges de catégorie (Alcool, Fraîcheur, Confort, Gourmandise)
- Boutons d'action alignés parfaitement

### 🎯 **Animations de Scroll Avancées**
- Intersection Observer API pour les déclenchements
- Animations de vague cascade au chargement
- Contrôle du défilement pendant les animations
- Effets de révélation progressive des sections

### 🚫 **Système Anti-Bug**
- Blocage du scroll pendant 5 secondes au chargement
- Prévention des conflits d'animation
- Gestion des états de chargement
- Cleanup automatique des performances

## 🛒 Catalogues Disponibles

### 🍷 **Vins Locaux** (Catégorie Alcool)
- Sélection de vins d'un viticulteur local
- Excellente qualité et production locale

### 🍊 **Agrumes Délicieux** (Catégorie Fraîcheur)
- Caisses de 10 kg d'agrumes frais BIO
- Produits de saison de qualité premium

### 🧦 **Chaussettes Pomme de Pin** (Catégorie Confort)
- Collection exclusive avec variété de styles
- Laine de mouton de qualité supérieure

### 🍫 **Chocolats du Cœur** (Catégorie Gourmandise)
- Assortiment raffiné de chocolats artisanaux
- Idéal pour les cadeaux et gourmandises

## 🏗️ Structure du Projet

```
site-vente-scolaire/
├── index.html                     # Page principale avec structure moderne
├── css/
│   └── style.css                  # 2800+ lignes de CSS avancé
├── js/
│   └── script.js                  # JavaScript ES6+ avec animations
├── images/                        # Ressources visuelles (si ajoutées)
├── catalogues/                    # Catalogues PDF
│   ├── catalogue-vins-locaux.pdf
│   ├── catalogue-agrumes-10kg.pdf
│   ├── catalogue-chaussettes-pomme-de-pin.pdf
│   └── catalogue-chocolats-du-coeur.pdf
├── .gitignore                     # Configuration Git
└── README.md                      # Cette documentation
```

## 🚀 Technologies Utilisées

### **Frontend Moderne**
- **HTML5** : Structure sémantique avec ARIA
- **CSS3** : Variables CSS, Grid, Flexbox, Animations keyframes
- **JavaScript ES6+** : Modules, Intersection Observer, Local Storage

### **Frameworks & Librairies**
- **Font Awesome 6.0** : Icônes vectorielles
- **Google Fonts** : Typographie Open Sans
- **CSS Grid & Flexbox** : Layouts responsifs avancés

### **Fonctionnalités Avancées**
- **Intersection Observer API** : Animations de scroll performantes
- **CSS Custom Properties** : Thème dynamique
- **Local Storage** : Sauvegarde des préférences
- **Backdrop Filter** : Effets glassmorphism
- **Transform3d** : Accélération matérielle GPU

## ⚡ Performance & Optimisations

### **Animations Optimisées**
- Utilisation de `transform3d` pour l'accélération GPU
- `will-change` pour les éléments animés
- Cleanup automatique des propriétés d'animation
- Anti-aliasing et smooth scrolling

### **Chargement Intelligent**
- Système de loading avec état de chargement
- Prévention des interactions pendant l'initialisation
- Lazy loading des animations
- Optimisation des repaints

### **Accessibilité (A11Y)**
- Support complet du clavier
- Labels ARIA appropriés
- Contrastes respectant WCAG 2.1
- Focus visible et navigation logique

## 🎯 Guide d'Installation

### **1. Cloner le repository**
```bash
git clone https://github.com/Gitex68/Catalogue.git
cd Catalogue/site-vente-scolaire
```

### **2. Ouvrir le site**
```bash
# Option 1: Ouvrir directement
open index.html

# Option 2: Serveur local (recommandé)
python -m http.server 8000
# Puis aller sur http://localhost:8000
```

### **3. Ajouter vos catalogues PDF**
Remplacez les fichiers dans `/catalogues/` avec vos vrais catalogues PDF.

## 🎨 Personnalisation Avancée

### **Modifier le Thème**
```css
/* Dans css/style.css */
:root {
    --primary: #2563eb;          /* Bleu principal */
    --secondary: #f59e0b;        /* Orange secondaire */
    --accent: #10b981;           /* Vert accent */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### **Ajuster les Animations**
```css
/* Durée des animations d'accueil */
.hero-title { transition: all 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.hero-subtitle { transition: all 3s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
```

### **Modifier les Délais de Scroll**
```javascript
// Dans js/script.js
const SCROLL_BLOCK_DURATION = 5000; // 5 secondes par défaut
```

## 🌐 Déploiement

### **Hébergement Recommandé**
- **GitHub Pages** : Gratuit et automatique
- **Netlify** : CI/CD et domaine personnalisé
- **Vercel** : Performance optimale

### **Configuration GitHub Pages**
1. Aller dans Settings → Pages
2. Source : Deploy from branch
3. Branch : main / root
4. Votre site sera disponible sur : `https://gitex68.github.io/Catalogue/site-vente-scolaire/`

## 🔗 Liens Utiles

- **Repository GitHub** : https://github.com/Gitex68/Catalogue
- **Programme ISAS** : [Lycée Jean-Jacques Henner](https://lycee-jjhenner.fr/nouveau-seconde-option-isas-initiation-aux-sciences-aeronautiques-et-spatiales/)
- **Toulouse sur Maps** : [Destination Toulouse](https://www.google.com/maps/place/Toulouse)

## 📞 Contact & Support

Pour le projet de voyage scolaire :
- **Email** : voyage.toulouse@lycee-altkirch.fr
- **Téléphone** : 03 89 40 XX XX
- **Horaires** : Lundi-Vendredi 8h-17h

## 📄 Licence

© 2025 Voyage Toulouse - Gitex68
