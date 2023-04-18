document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = window.location.href;

  function createShareButtons() {
    if (currentUrl.includes('/')) {
      const shareButtonsContainer = document.createElement('div');
      shareButtonsContainer.classList.add('share-buttons');

      const networks = [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u=',
          icon: 'https://www.svgrepo.com/show/494144/facebook.svg'
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/intent/tweet?url=',
          icon: 'https://www.svgrepo.com/show/494158/twitter.svg'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
          icon: 'https://www.svgrepo.com/show/494177/linkedin-boerder.svg'
        },
        {
          name: 'telegram',
          url: 'https://t.me/share/url?url=',
          icon: 'https://www.svgrepo.com/show/96442/telegram.svg'
        },
        {
          name: 'whatsapp',
          url: 'https://wa.me/?text=',
          icon: 'https://www.svgrepo.com/show/126669/whatsapp.svg'
        },
      ];

      networks.forEach((network) => {
        const button = document.createElement('div');
        button.classList.add('share-button');

        const img = document.createElement('img');
        img.src = network.icon;
        button.appendChild(img);

        button.title = 'Compartir en ' + network.name;
        button.addEventListener('click', () => {
          window.open(network.url + encodeURIComponent(currentUrl), '_blank');
        });

        shareButtonsContainer.appendChild(button);
      });

      document.body.appendChild(shareButtonsContainer);
    }
  }

  function reloadShareButtons() {
    const existingShareButtons = document.querySelector('.share-buttons');
    if (existingShareButtons) {
      existingShareButtons.remove();
    }
    createShareButtons();
  }

  // Carga y ejecuta los botones de compartir al cargar la página
  createShareButtons();

  // Establece el intervalo en milisegundos (por ejemplo, 60000 ms = 1 minuto)
  const interval = 60000;

  // Recarga y ejecuta los botones de compartir a intervalos regulares
  setInterval(reloadShareButtons, interval);
});
