const $setVariableTemplate = $(
    '<div class="movable setVariable" id="setVariable-1" style="top: 0; left: 320px">\n' +
    '    <p>\n' +
    '        <span class="prev"></span>\n' +
    '        <span class="next"></span>\n' +
    '        <br>\n' +
    '        Set Variable\n' +
    '    </p>\n' +
    '    <select name="varNr">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '    <label>\n' +
    '        <input type="number" style="width: 45%;color: black; alignment: right">\n' +
    '    </label>\n' +
    '</div>'),
    $setVariableButton = $('#setVariableButton');
let setVariableNr = 0;

$setVariableButton.click(function () {

    let $newElement = $setVariableTemplate.clone();
    $newElement.attr('id', 'setVariable-' + (++setVariableNr));
    dragElement($newElement[0]);
    $('body').append($newElement);
});