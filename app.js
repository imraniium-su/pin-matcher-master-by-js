function getpin() {
    const pin = generatepin();
    const pinstring = pin + '';
    if (pinstring.length === 4) {
        return pin;
    }
    else {
        return getpin();
    }
}
function generatepin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getpin();
    const displaypinfield = document.getElementById('disply-pin');
    displaypinfield.value = pin;
})
document.getElementById('calcolotor').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typenumberfield = document.getElementById('typed-number');
    const previoustypenumber = typenumberfield.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typenumberfield.value = '';
        }
        else if (number === '<') {
            const digit = previoustypenumber.split('');
            digit.pop();
            const remiiningdigit = digit.join('');
            typenumberfield.value = remiiningdigit;
        }
    }
    else {


        const newtypenumber = previoustypenumber + number;
        typenumberfield.value = newtypenumber;
    }
})
document.getElementById('verfify-pin').addEventListener('click', function () {
    const displaypinfield = document.getElementById('disply-pin');
    const currentpin = displaypinfield.value;

    const typenumberfield = document.getElementById('typed-number');
    const typenumber = typenumberfield.value;

    const pinsuccessmessage = document.getElementById('pin-success');
    const pinsfaliuremessage = document.getElementById('pin-failure');
    if (typenumber === currentpin) {

        pinsuccessmessage.style.display = 'block';
        pinsfaliuremessage.style.display = 'none';
    }
    else {

        pinsfaliuremessage.style.display = 'block';
        pinsuccessmessage.style.display = 'none';
    }

})
