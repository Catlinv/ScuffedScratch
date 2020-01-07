const $displayVariableTemplate = $(
    '<div class="movable setVariable" id="displayVariable-1" style="top: 0; left: 320px">\n' +
    '    <p>\n' +
    '        <span class="prev"></span>\n' +
    '        <span class="next"></span>\n' +
    '        <br>\n' +
    '        Display Variable\n' +
    '    </p>\n' +
    '    <select name="varNr">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '</div>'),
    $displayVariableButton = $('#displayVariableButton');
let displayVariableNr = 0;

$displayVariableButton.click(function () {

    let $newElement = $displayVariableTemplate.clone();
    $newElement.attr('id', 'displayVariable-' + (++displayVariableNr));
    dragElement($newElement[0]);
    $('body').append($newElement);
});