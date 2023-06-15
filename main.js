// Cette ligne crée une constante appelée "loading" et lui attribue la valeur de l'élément DOM avec l'ID "loadingAnimation". Cela suppose qu'il existe un élément dans le document avec cet ID.
const loading = document.getElementById("loadingAnimation");

// Cette ligne crée une constante appelée "content" et lui attribue la valeur de l'élément DOM avec l'ID "displayContent". Encore une fois, cela suppose qu'il existe un élément dans le document avec cet ID.
const content = document.getElementById("displayContent");

// Cette ligne crée une constante appelée "content" et lui attribue la valeur de l'élément DOM avec l'ID "displayContent". Encore une fois, cela suppose qu'il existe un élément dans le document avec cet ID.
window.onload = function () {

// Cette ligne utilise la fonction setTimeout pour retarder l'exécution de la fonction showContent de 3000 millisecondes (3 secondes). Ainsi, après un délai de 3 secondes, la fonction showContent sera appelée.
  setTimeout(showContent, 3000);
};

// Cette ligne déclare une fonction nommée "showContent".
function showContent() {

// Cette ligne modifie la propriété CSS "display" de l'élément "loading" pour la définir sur "none". Cela signifie que l'élément ne sera pas affiché.
loading.style.display = "none"; 

// Cette ligne modifie la propriété CSS "display" de l'élément "content" pour la définir sur "block". Cela signifie que l'élément sera affiché en tant que bloc.
  content.style.display = "block"; 
}


// En résumé, ce code contrôle l'affichage de deux éléments dans le document HTML. Au chargement de la fenêtre, la fonction showContent est programmée pour être exécutée après un délai de 3 secondes. Lorsque la fonction est exécutée, elle cache l'élément avec l'ID "loadingAnimation" en le définissant sur "none", puis affiche l'élément avec l'ID "displayContent" en le définissant sur "block". Cela peut être utilisé pour afficher une animation de chargement pendant un certain temps, puis afficher le contenu principal de la page après le chargement complet.