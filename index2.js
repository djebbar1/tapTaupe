$(document).ready(function () {
  let $indexAleatoire;
  let point = 0;
  let scoreElement = $("#count");

  $(".taupe").hide();

  setInterval(function () {
      let $tabDiv = $(".taupe");

      // Détacher l'événement de clic des taupes précédentes
      $tabDiv.off("click");

      // Masquer la taupe actuellement affichée
      if ($indexAleatoire) {
          $($indexAleatoire).hide();
      }

      // Choisir une nouvelle taupe aléatoirement
      $indexAleatoire = $tabDiv.eq(Math.floor(Math.random() * $tabDiv.length));

      // Afficher la nouvelle taupe
      $($indexAleatoire).show();

      // Gérer le clic sur la taupe
      $($indexAleatoire).click(function () {
          if (!$indexAleatoire.children(".taupe").length) {
              point++;
              scoreElement.text(point); // Utilisez scoreElement ici
          }
          $($indexAleatoire).remove();
      });

      setTimeout(function () {
          // Masquer la taupe après un certain délai (1 200 millisecondes dans votre code initial)
          $($indexAleatoire).hide();
      }, 1200);

  }, 2100);
});
