function myFunction() {

    let Biology = parseInt(document.getElementById('Biology').value);
    let Chemistry = parseInt(document.getElementById('Chemistry').value);
    let Physic = parseInt(document.getElementById('Physic').value);
    let Mathmatic = parseInt(document.getElementById('Mathmatic').value);
    let English = parseInt(document.getElementById('English').value);
    let Kurdish = parseInt(document.getElementById('Kurdish').value);
    let Arabic = parseInt(document.getElementById('Arabic').value);





    let ko = Biology + Chemistry + Physic +
        Mathmatic + English + Kurdish +
        Arabic;
    let hamuy = ko / 7;
    document.getElementById('resultText').innerHTML = hamuy.toFixed(2) ;
}

function refreshPage() {
    window.location.reload();
}