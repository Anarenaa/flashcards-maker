const previewTest = JSON.parse(localStorage.getItem('previewTest')) || [];

if (previewTest.length >= 1) {
    renderTestList();
}

function renderTestList() {
    const container = document.querySelector('.ready-made-tests');
    container.innerHTML = '';

    let previewTestHTML = '';

    previewTest.forEach((test, index) => {
        const { title, description, uniqueId } = test;
        const html = `
        <div class="ready-made-test">
            <h2 class="ready-made-test__title">
                <a href="check-test.html?title=${encodeURIComponent(uniqueId)}">
                ${title}
                </a>
            </h2>
            <div class="ready-made-test__description">
                ${description}
            </div>
            <img class="ready-made-test__remove-button" src="img/icons-trash.svg" alt="remove-icon" onclick = "
                previewTest.splice(${index}, 1);
                renderTestList();
                localStorage.setItem('previewTest', JSON.stringify(previewTest));
            ">
        </div>`;
        previewTestHTML += html;
    });

    container.innerHTML = previewTestHTML;
}