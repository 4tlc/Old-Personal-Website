document.querySelector('.projectLink').addEventListener('click', (e) => {
    location.href = 'projects.html';
});

document.querySelector('.emailMe').addEventListener('click', (e) => {
    window.open(
        'mailto:tcroniniv@gmail.com'
    );
});

document.querySelector('.gitHubLink').addEventListener('click', (e) => {
    window.open(
        'https://github.com/4tlc'
    );
});

document.querySelector('.resumeLink').addEventListener('click', (e) => {
    window.open(
        'resources/Timothy Cronin Resume.pdf'
    );
});
