const $operationVariablesTemplate = $(
    '<div class="movable operationVariables" id="operationVariables-1" style="top: 0; left: 320px">\n' +
    '    <p>\n' +
    '        <span class="prev"></span>\n' +
    '        <span class="next"></span>\n' +
    '        <br>\n' +
    '        Operation Variables\n' +
    '    </p>\n' +
    '    <select name="varNr0">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '    <span>=</span>\n' +
    '    <select name="varNr1">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '    <select name="operation">\n' +
    '        <option value="+">+</option>\n' +
    '        <option value="-">-</option>\n' +
    '        <option value="/">/</option>\n' +
    '        <option value="*">*</option>\n' +
    '    </select>\n' +
    '    <select name="varNr2">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '</div>'),
    $operationVariablesButton = $('#operationVariablesButton');
let operationVariablesNr = 0;

$operationVariablesButton.click(function () {

    let $newElement = $operationVariablesTemplate.clone();
    $newElement.attr('id', 'operationVariables-' + (++operationVariablesNr));
    dragElement($newElement[0]);
    $('body').append($newElement);
});