const btnGenerator = document.getElementById('btnGenerator');

btnGenerator.addEventListener('click',  () => {
    const hexNumber = '0123456789ABCDEF';
    let hexCode1 = "";
    let hexCode2 = "";

    // 6 caracteres
    for (let i = 0; i < 6; i++) {
        hexCode1 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
        hexCode2 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
    }

    document.body.style.background = `linear-gradient(270deg, #${hexCode1}, #${hexCode2})`;
})