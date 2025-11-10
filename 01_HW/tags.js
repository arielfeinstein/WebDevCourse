let i = 0;

const themes =[
    'SKINS/basic.css',
    'SKINS/dark.css',
    'SKINS/modern.css'
];

function changeTheme() {
    const linkElement = document.getElementById('theme-link');

    if (linkElement) {
        const newHref = themes[i%3];
        linkElement.href = newHref;

        i++;
    } else {
        console.error("Theme link element not found!");
    }
}