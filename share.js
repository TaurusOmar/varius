document.addEventListener('DOMContentLoaded', function() {
  const currentUrl = window.location.href;

  // Verificar si la URL actual contiene '/blog/'
  if (currentUrl.includes('/blog')) {
    const shareButtonsContainer = document.createElement('div');
    shareButtonsContainer.classList.add('share-buttons');

    const networks = [
      {
        name: 'facebook',
        url: 'https://twitter.com/intent/tweet?url=',
        icon: 'https://www.svgrepo.com/show/494144/facebook.svg' // Reemplaza esto con la URL de tu SVG de Facebook
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/intent/tweet?url=',
        icon: 'https://www.svgrepo.com/show/494158/twitter.svg' // Reemplaza esto con la URL de tu SVG de Facebook
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
        icon: 'https://www.svgrepo.com/show/494177/linkedin-boerder.svg' // Reemplaza esto con la URL de tu SVG de LinkedIn
      },

      {
        name: 'telegram',
        url: 'https://t.me/share/url?url=',
        icon: 'https://www.svgrepo.com/show/96442/telegram.svg' // Reemplaza esto con la URL de tu SVG de Telegram
      },
      {
        name: 'whatsapp',
        url: 'https://wa.me/?text=',
        icon: 'https://www.svgrepo.com/show/126669/whatsapp.svg' // Reemplaza esto con la URL de tu SVG de WhatsApp
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
});
