let titleElement = document.querySelector('.form__title');
let descriptionElement = document.querySelector('.form__description');
let formBlocksContainer = document.querySelector('.form-blocks');


function addBlock() {

    const newBlock = document.createElement('div');
    newBlock.classList.add('form-block');

    newBlock.innerHTML = `
        <button class="form-block__remove-button default-button" onclick="removeBlock(this)">&times;</button>
        <div class="form-block__inner">
            <label class="form-block__label">
                Question
                <input class="form-block__field" name="question" type="text" placeholder="New question">
            </label>
            <label class="form-block__label">
                Answer
                <input class="form-block__field" name="answer" type="text" placeholder="New answer">
            </label>
        </div>
        <hr>
    `;

    formBlocksContainer.appendChild(newBlock);
}

function removeBlock(button) {
    const blockToRemove = button.closest('.form-block');
    blockToRemove.parentNode.removeChild(blockToRemove);
}

function validation() {
    titleElement.classList.remove('title-error');
    let isValid = true;

    if (titleElement.value === '') {
        titleElement.classList.add('title-error');
        isValid = false;
    }

    const formBlocks = document.querySelectorAll('.form-block');

    formBlocks.forEach(block => {
        const questionInput = block.querySelector('.form-block__field[placeholder="New question"]');
        const answerInput = block.querySelector('.form-block__field[placeholder="New answer"]');
        questionInput.classList.remove('field-error');
        answerInput.classList.remove('field-error');

        if (questionInput.value === '') {
            questionInput.classList.add('field-error');
            isValid = false;
        }
        if (answerInput.value === '') {
            answerInput.classList.add('field-error');
            isValid = false;
        }
    });

    if (isValid) {
        saveTest();
        location.href = 'index.html';
    }
}

function saveTest() {
    const title = titleElement.value;
    const description = descriptionElement.value;
    const uniqueId = title + '-' + Date.now();
    
    const questionsList = [];
    const answersList = [];

    const formBlocks = document.querySelectorAll('.form-block');

    formBlocks.forEach((block, index) => {
        const questionInput = block.querySelector('.form-block__field[placeholder="New question"]');
        const answerInput = block.querySelector('.form-block__field[placeholder="New answer"]');
        const question = questionInput.value;
        const answer = answerInput.value;

        if (question) {
            questionsList.push({ id: `${index}-q-${uniqueId}`, text: question });
        }
        if (answer) {
            answersList.push({ id: `${index}-a-${uniqueId}`, text: answer });
        }
    });

    const previewTest = JSON.parse(localStorage.getItem('previewTest')) || [];

    const previewObject = {
        title,
        description,
        uniqueId,
        questions: questionsList,
        answers: answersList,
    };

    previewTest.push(previewObject);

    localStorage.setItem('previewTest', JSON.stringify(previewTest));
}