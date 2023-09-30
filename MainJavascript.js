function cycle() {

    const description = document.querySelector('.description');
    const buttons = document.querySelectorAll('.item3');
    let i = 0;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => {
                btn.style = "background-color: none; border-top-left-radius: none; border-top-right-radius: none";
            });

            description.textContent = button.getAttribute('data-text');
            description.style = button.getAttribute('design');

            button.style = "background-color: #50505010; border-top-left-radius: 50px; border-top-right-radius: 50px;";
        });
    });
}

function headerCycle(buttonIndex, startButton) {
    if (buttonIndex == -1) buttonIndex = startButton;

    const buttons = document.querySelectorAll('.header-text');

    const bar = document.getElementById('bar');

    const selectedButton = buttons[buttonIndex];
    buttons.forEach(button => {
        button.style.color = '#505050';
    });
    selectedButton.style.color = 'white';

    const buttonPosition = selectedButton.getBoundingClientRect().left;
    const barPosition = buttons[1].getBoundingClientRect().left - 8;

    const offset = buttonPosition - barPosition;
    bar.style.transform = `translateX(${offset}px)`;
    bar.style.transition = 'transform 0.3s';
}

function headerStart(buttonIndex) {
    const buttons = document.querySelectorAll('.header-text');

    const bar = document.getElementById('bar');

    const selectedButton = buttons[buttonIndex];
    selectedButton.style.color = 'white';
    const buttonPosition = selectedButton.getBoundingClientRect().left;
    const barPosition = buttons[1].getBoundingClientRect().left - 8;

    const offset = buttonPosition - barPosition;
    bar.style.transform = `translateX(${offset}px)`;
    bar.style.transition = 'none';
}
cycle();
