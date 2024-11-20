document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
    const closeBtn = document.createElement('button');
    
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';
    overlay.appendChild(closeBtn);
    
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => {
            const photos = response.data;

            let polaroidsHTML = '';

            photos.forEach(photo => {
                polaroidsHTML += `
                    <div class="polaroid">
                        <img src="${photo.url}" alt="Foto polaroid">
                        <div class="caption">${photo.title}</div>
                    </div>
                `;
            });

            main.innerHTML = polaroidsHTML;

            const cardImg = document.querySelectorAll('.polaroid img');
            
            cardImg.forEach((image) => {
                image.addEventListener('click', () => {
                    
                    overlay.style.display = 'flex';
                    overlayImage.src = image.src;
                });
            });

            
            closeBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
            });

            
            overlay.addEventListener('click', (over) => {
                if (over.target === overlay) {
                    overlay.style.display = 'none';
                }
            });

        })
        .catch(error => {
            console.error("Errore durante il caricamento delle immagini:", error);
        });
});
