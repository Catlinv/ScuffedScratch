const $executeButton = $('#executeButton'),
    operations = {
        '+': function (x, y) {
            return x + y;
        },
        '-': function (x, y) {
            return x - y;
        },
        '*': function (x, y) {
            return x * y;
        },
        '/': function (x, y) {
            return x / y;
        },
        '==': function (x, y) {
            return x === y;
        },
        '>=': function (x, y) {
            return x >= y;
        },
        '<=': function (x, y) {
            return x <= y;
        },
        '>': function (x, y) {
            return x > y;
        },
        '<': function (x, y) {
            return x < y;
        },
    };

$executeButton.click(function () {
    let $current = $('#start'),
        $console = $('#console');
    let index, value, nr = 1,index1,index2,op,sel;

    $console.empty();
    $console.append('<p style="color: black">1: Start</p>');

    while ($current.attr('id') !== 'end') {

        let next = $current.find('.next').first();
        if (next[0] && next[0].innerText !== '') {
            next = next.text().slice(0, -1);
            $current = $(('#' + next));
            console.log($current);
            next = next.split('-')[0];
            switch (next) {
                case 'displayText':
                    $console.append('<p style="color: black">' + (++nr) + ': ' + $current.find('input').val() + '</p>');
                    break;
                case 'setVariable':
                    index = parseInt($current.find('select').val());
                    value = parseInt($current.find('input').val());
                    variables[index] = value;
                    break;
                case 'displayVariable':
                    index = parseInt($current.find('select').val());
                    $console.append('<p style="color: black">' + (++nr) + ': v' + (index + 1) + ' = ' + variables[index] + '</p>');
                    break;
                case 'operationVariables':
                    sel = $current.find('select');
                        index = parseInt($(sel[0]).val());
                        index1 = parseInt($(sel[1]).val());
                        index2 = parseInt($(sel[3]).val());
                        op = ($(sel[2]).val());
                    variables[index] = operations[op](variables[index1] || 0, variables[index2] || 0);
                    break;
                case 'if':
                    sel = $current.find('select');
                        index1 = parseInt($(sel[0]).val());
                        index2 = parseInt($(sel[2]).val());
                        op = ($(sel[1]).val());
                    if(operations[op](variables[index1] || 0, variables[index2] || 0)){
                        $current = $current.find('.tr');

                    } else {
                        $current = $current.find('.fa');
                    }
                    break;
                case 'end':
                    $console.append('<p style="color: black">' + (++nr) + ': End</p>');
                    break;
                default:
                    $console.append('<p style="color: black">WIP</p>');
            }
        } else {
            $console.append('<p style="color: red">ERROR. END NOT SET</p>');
            break;
        }
    }

});