document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main'); 

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
        })
        .catch(error => {
            console.error("Errore durante il caricamento delle immagini:", error);
        });
});
