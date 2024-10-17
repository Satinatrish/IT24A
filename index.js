class CardSearch {
    constructor(searchInputId, cardContainerClass) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.querySelector(`.${cardContainerClass}`);
        this.cards = this.cardContainer.querySelectorAll('.card');

        this.init();
    }

    init() {
      
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

            
            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                card.closest('.col-12, .col-sm-6, .col-md-4').style.display = ''; 
            } else {
                card.closest('.col-12, .col-sm-6, .col-md-4').style.display = 'none'; 
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new CardSearch('cardSearch', 'container.mt-4'); 
});

   
