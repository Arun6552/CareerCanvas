document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'certificate/cert (7).jpg', description: 'Certificate of Excellence 🥇' },
        { src: 'certificate/cert (16).jpg', description: 'Certificate of Excellence ' },
        { src: 'certificate/cert (6).jpg', description: 'Certificate of Excellence ' },
        { src: 'certificate/cert.jpg', description: 'Certificate of Achievement' },
        { src: 'certificate/cert0.jpg', description: 'Certificate of Appreciation' },
        { src: 'certificate/cert20.jpg', description: 'Certificate of Completion' },
        { src: 'certificate/cert (1).jpg', description: 'Certificate fo Achievement' },
        { src: 'certificate/cert (2).jpg', description: 'Certificate of Appreciation ' },
        { src: 'certificate/cert (3).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (4).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (5).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cer.jpg', description: 'Token of Appreciation ' },
        { src: 'certificate/cert21.jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (8).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (9).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (10).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (11).jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (12).jpg', description: 'Letter of Appreciation' },
        { src: 'certificate/cert22.jpg', description: 'Letter of Appreciation' },
        { src: 'certificate/cert (17).jpg', description: 'Letter of Appreciation' },
        { src: 'certificate/cert23.jpg', description: 'Certificate of Participation' },
        { src: 'certificate/cert (18).jpg', description: 'Description for Certification 16' },
        { src: 'certificate/cert (14).jpg', description: 'Certificate of Appreciation' },
        { src: 'certificate/cert19.jpg', description: 'National News Paper Headline-WRO' },

        // Add more images here
    ];

    const certGallery = document.getElementById('certGallery');

    images.forEach((image) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const certItemDiv = document.createElement('div');
        certItemDiv.className = 'cert-item';
        certItemDiv.setAttribute('data-image', image.src);
        certItemDiv.setAttribute('data-description', image.description);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.description;

        certItemDiv.appendChild(img);
        colDiv.appendChild(certItemDiv);
        certGallery.appendChild(colDiv);
    });

    document.querySelectorAll('.cert-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const modal = document.getElementById('certModal');
            const modalImage = document.getElementById('certModalImage');
            const modalDescription = document.getElementById('certModalDescription');
            const modalTitle = document.getElementById('certModalLabel'); // Corrected modal title ID

            modal.style.display = 'flex';
            modalImage.src = item.getAttribute('data-image');
            modalDescription.textContent = item.getAttribute('data-description');
            modalTitle.textContent = 'Certification Detail'; // Set modal title
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('certModal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('certModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
