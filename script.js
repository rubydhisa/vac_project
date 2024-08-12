document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('movie-title').value;
        const reviewText = document.getElementById('review-text').value;
        const rating = document.getElementById('rating').value;

        if (title && reviewText && rating) {
            const listItem = document.createElement('li');
            listItem.classList.add('review-item');
            listItem.innerHTML = `
                <strong>${title}</strong> <em>(Rating: ${rating})</em>
                <p>${reviewText}</p>
            `;
            reviewList.appendChild(listItem);

            // Clear the form
            form.reset();
        }
    });
});
