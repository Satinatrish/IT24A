class CardSearch {
    constructor(searchInputId, cardContainerClass) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.querySelector(`.${cardContainerClass}`);
        this.cards = this.cardContainer.querySelectorAll('.card');

        this.init();
    }

    init() {
        // Ensure the search input exists before adding the event listener
        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => {
                this.filterCards(this.searchInput.value);
            });
        } else {
            console.error(`Input with ID ${searchInputId} not found.`);
        }
    }

    filterCards(query) {
        const searchTerm = query.toLowerCase();

        this.cards.forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';

            // Show card if it matches the search term
            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                card.closest('.col-bm-4').style.display = '';
            } else {
                card.closest('.col-bm-4').style.display = 'none'; 
            }
        });
    }
}

// Ensure the document is fully loaded before initializing the CardSearch
document.addEventListener('DOMContentLoaded', () => {
    new CardSearch('cardSearch', 'container2');
});