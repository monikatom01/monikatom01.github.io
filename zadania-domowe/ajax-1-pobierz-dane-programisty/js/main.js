$(document).ready(function () {

    $('#btn').click(function () {

        function pobierzDane() {

            $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
                function (dane) {
                    console.log(dane);
                    $('#btn').after('<div id="dane-programisty">hjk</div>');
                    $('#dane-programisty').html(dane.imie + ' ' + ' ' + dane.nazwisko + ' ' + ' ' + dane.zawod + ' ' + ' ' + dane.firma);
                })
        }
        pobierzDane();
    })
})
