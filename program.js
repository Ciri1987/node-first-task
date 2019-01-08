process.stdin.setEncoding('utf-8'); //ustawienie kodowania, odczytanie wartości jako string a nie dane szesnastkowe

process.stdin.on('readable', function () { //ustawienie nasłuchiwania na zdarzenie odczytu (na zdarzenie .on odczytu readable masz wykonać funkcję)
    var input = process.stdin.read(); //metoda read odczytuje co user wpisał na wejściu
    if (input !== null) { //sprawdzenie czy na wejściu cokolwiek istnieje

        var instructions = input.toString().trim(); //trim usuwa wszystkie białe znaki z przodu i za tekstem
        switch (instructions) { //switch statement - zmiana z if
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case 'version':
                process.stdout.write('Your node.js version is: ' + process.versions.node + '\n');
                break;

            case 'language':
                process.stdout.write('Your language is: ' + process.env.lang) + '\n';
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
        }


        /*if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!'); //warunek sprawdzający czy komenda ma odpowiednią wartość i zwraca dane które wpisał user i kończy aplikację jeśli wpisze /exit
        }*/
    }

});