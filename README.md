# Code Lightbox
Ce bout de code permet d'afficher le formulaire de participation d'un concours en lightbox.

## Pre Requis
JQuery, version 1.10 ou plus.

## Elements necessaires
- `assets/css/lightbox.css`
- `assets/images/lightbox-close.png`
- `assets/images/lightbox-overlay.png`
- `assets/js/lightbox.png`

## Fonctionnement
Lorsqu'un ancre `<a>` possede l'attribut `data-lightbox`, une fenetre s'ouvrira avec le contenu du URL de destination.
Ce contenu sera affiche dans un iframe sous forme de popup / lightbox.

Si l'appareil de l'utilisateur ou sa fenetre a une largeure plus petite que 1024px, l'action de lightbox sera ignore.

## Exemple de bouton
Dans l'exemple suivant, on affiche les 2 etats e l'interieur d'un ancre.
```
<a href="form/" target="_blank" data-lightbox>Participer</a>
```

### IMPORTANT
L'ancre doit contenir l'attribut `data-lightbox` pour fonctionner et doit absoluement avoir l'attribut `target="_blank"`.
De cette facon, si la largeure de l'appareil est plus petit que 1024px, tel qu'une tablette ou un mobile, il n'y aura pas de popup et ce sera un nouvel onglet qui sera ouvert a la place.

Cela est en place car nous avons eu des problemes avec les appareils IPAD dans le passe.


## Form State
Depuis 2019, nous ajoutons l'attribut "data-form-state", aux pages de type concours. Cette attribut est ensuite recupere dans le css pour changer l'apparence de la page selon la valeur de l'attribut.

En general, c'est surtout le bouton de participation qui change de l'etat "Participer" a "Concours termine".

```
<html class="nojs" lang="fr" dir="ltr" data-form-state="!closed">
```

Il a ete entendu que de facon general, lorsque le concours est dans la periode active, la valeur est `!closed`.

Ensuite, lorsque le concours est termine, on change la valeur pour `closed`.

Cela permet a Stefan de faire le changement sans que nous ayons a intervenir, si jamais il voudrait effectuer le travail seul.

## Exemples 
Voici un exemple de code HTML qui inclus les etats:

```
<div class="subscribe"><a href="form/" target="_blank" data-lightbox>
	<span class="subscribe-opened">Participer</span>
	<span class="subscribe-closed">
		<strong>Concours terminé</strong>
		<small>voir les gagnants</small>
	</span>
</a></div>
```

Dans le CSS, le changement d'etat se ferait comme suit:

```
.subscribe .subscribe-opened,
.subscribe .subscribe-closed{ display: none; vertical-align: middle; text-align: center; }
html[data-form-state="!closed"] .subscribe .subscribe-opened,
html[data-form-state="closed"] .subscribe .subscribe-closed{ display: table-cell; }
```

Un autre exemple pourrait etre:
```
.subscribe .subscribe-opened,
.subscribe .subscribe-closed{ display: none; }
html[data-form-state="!closed"] .subscribe .subscribe-opened{ background-image: url(../images/bouton-participer.png); display: block; }
html[data-form-state="closed"] .subscribe .subscribe-closed{ background-image: url(../images/bouton-terminer.png); display: block; }
```
