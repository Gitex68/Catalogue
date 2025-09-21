# Site Web de Vente Scolaire - Voyage Toulouse 2025

## Description

Site web professionnel pour présenter et promouvoir la vente de produits dans le cadre du financement d'un voyage scolaire à Toulouse. Le site présente 4 catalogues de produits : vins locaux, caisses d'agrumes, chaussettes Pomme de Pin, et chocolats du Cœur.

## Fonctionnalités

✅ **Design moderne et responsive**
- Interface claire et intuitive
- Compatible mobile et desktop
- Animations fluides et professionnelles

✅ **Navigation optimisée**
- Menu de navigation fixe
- Scroll fluide vers les sections
- Menu hamburger pour mobile

✅ **Présentation des produits**
- 4 catalogues avec descriptions
- Modales d'information détaillées
- Boutons de téléchargement des catalogues PDF

✅ **Section contact**
- Formulaire de contact interactif
- Validation en temps réel
- Informations de contact

✅ **Optimisations**
- Performance optimisée
- Accessibilité améliorée
- SEO-friendly

## Structure du projet

```
site-vente-scolaire/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles CSS
├── js/
│   └── script.js           # JavaScript interactif
├── images/                 # Dossier pour les images
├── catalogues/            # Catalogues PDF
│   ├── catalogue-vins-locaux.txt
│   ├── catalogue-agrumes-10kg.txt
│   ├── catalogue-chaussettes-pomme-de-pin.txt
│   └── catalogue-chocolats-du-coeur.txt
└── README.md              # Ce fichier
```

## Installation et utilisation

1. **Ouvrir le site**
   - Double-cliquez sur `index.html` pour ouvrir dans votre navigateur
   - Ou utilisez un serveur local pour de meilleures performances

2. **Remplacer les catalogues**
   - Créez vos catalogues PDF
   - Remplacez les fichiers .txt dans le dossier `catalogues/`
   - Nommez-les exactement comme indiqué :
     - `catalogue-vins-locaux.pdf`
     - `catalogue-agrumes-10kg.pdf`
     - `catalogue-chaussettes-pomme-de-pin.pdf`
     - `catalogue-chocolats-du-coeur.pdf`

3. **Ajouter des images** (optionnel)
   - Ajoutez des photos de produits dans le dossier `images/`
   - Modifiez le CSS pour les intégrer

4. **Personnaliser les informations de contact**
   - Modifiez l'email dans `index.html` (ligne 184)
   - Changez le numéro de téléphone (ligne 194)
   - Adaptez les horaires si nécessaire

## Personnalisation

### Modifier les couleurs
Dans `css/style.css`, changez les variables CSS au début du fichier :
```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #f59e0b;  /* Couleur secondaire */
    --accent-color: #10b981;     /* Couleur d'accent */
}
```

### Modifier le contenu des produits
Dans `js/script.js`, éditez l'objet `cataloguesData` pour changer les descriptions et détails des produits.

### Ajouter des fonctionnalités
- **EmailJS** : Pour l'envoi automatique d'emails
- **Google Analytics** : Pour le suivi des visiteurs
- **Chatbot** : Pour l'assistance automatisée

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec variables CSS et Flexbox/Grid
- **JavaScript ES6+** : Fonctionnalités interactives
- **Font Awesome** : Icônes
- **Google Fonts** : Typographie (Open Sans)

## Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ Mobile et tablette
- ✅ Responsive design

## Support et maintenance

Pour toute question ou modification :
1. Consultez les commentaires dans le code
2. Modifiez les fichiers selon vos besoins
3. Testez sur différents navigateurs

## Conseils pour le déploiement

1. **Hébergement gratuit** :
   - GitHub Pages
   - Netlify
   - Vercel

2. **Nom de domaine** :
   - Choisissez un nom évocateur
   - Exemple : `voyage-toulouse-2025.fr`

3. **Référencement** :
   - Ajoutez des mots-clés pertinents
   - Optimisez les balises meta
   - Créez du contenu de qualité

## Licence

Projet libre d'utilisation pour les établissements scolaires.

---

🎓 **Bonne chance pour votre voyage scolaire à Toulouse !** 🏰
