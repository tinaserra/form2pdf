# FORM2PDF

```
le but est de generer un pdf a partir d'un formulaire remplis en ligne. il faut ensuite pouvoir telecharger le pdf et / ou l'envoyer par mail.
```

ici j'ai cree une premiere page avec un formulaire simple. on remplis les 4 infos demandées :
**nom**, **prenom**, **mail**, **phone**, puis on clique sur "envoyer".

Dans `index.html`, on attribu una classe respective a chacune des infos: 
- `class="formName"`
- `class="formPrenom"`
- `class="formMail"`
- `class="formPhone"`

Le script js va inserer les variables correspondantes a nos 4 infos dans une page.
Le fichier `pdf.html` est un exemple de cette page (peut etre supprimé).
-> A partir de la on peut telecharger le pdf. (a faire)