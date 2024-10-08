const urlParams = new URLSearchParams(window.location.search);
const testTitle = urlParams.get('title');

const previewTest = JSON.parse(localStorage.getItem('previewTest')) || [];
const swiperWrapper = document.querySelector('.swiper-wrapper');

swiperWrapper.innerHTML = '';

const test = previewTest.find(t => t.title === testTitle);

if (test) {
    const { questions, answers } = test;

    questions.forEach((question, index) => {
        const answer = answers.find(a => a.id === question.id.replace('q-', 'a-'));
        const html = `
            <div class="swiper-slide card">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <p class="card__question">${question.text}</p>
                    </div>
                    <div class="card__face card__face--back">
                        <p class="card__answer">${answer ? answer.text : 'No answer available'}</p>
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.innerHTML += html;
    });
}

const cards = document.querySelectorAll('.card__inner');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});