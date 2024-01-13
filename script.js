document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<span class="close-btn" onclick="closeModal()">&times;</span><img id="modal-image">';
  
    document.body.appendChild(modal);
  
    const images = [
      'anime wallpaper.jpg',
      'bg2.jpg',
      'bg3.webp',
      'ces_home.jpg',
      'img1.jpg',
      'Close-up-hands-group-working-on-laptop.jpeg',
      'strom.jpg',
      'college2.jpg',
      'kuch kuch.png',
      'lp.jpg',
      'sales.jpg',
      'sale.webp',
      'Screenshot 2024-01-12 222005.png',
      'WhatsApp Image 2023-02-19 at 12.03.08.jpg',
      'anime wallpaper.jpg',
      'bg2.jpg',
      'bg3.webp',
      'ces_home.jpg',
      'img1.jpg',
      'Close-up-hands-group-working-on-laptop.jpeg',
      'strom.jpg',
      // Add more image paths as needed
    ];

  
    images.forEach((imageUrl, index) => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `Image ${index + 1}`;
      img.addEventListener('click', () => openModal(imageUrl));
      galleryContainer.appendChild(img);
    });
  });
  
  function openModal(imageUrl) {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    document.querySelector('.modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.querySelector('.modal').style.display = 'none';
  }
  