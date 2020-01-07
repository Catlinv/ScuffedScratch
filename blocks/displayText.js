const $displayTextTemplate = $(
    '<div class="movable displayText" id="displayText-1" style="top: 0; left: 320px">\n' +
    '    <p>\n' +
    '        <span class="prev"></span>\n' +
    '        <span class="next"></span>\n' +
    '        <br>\n' +
    '        Display Text\n' +
    '    </p>\n' +
    '    <label>\n' +
    '        <input type="text" style="width: 95%;color: black">\n' +
    '    </label>\n' +
    '</div>'),
    $displayTextButton = $('#displayTextButton');
let displayTextNr = 0;

$displayTextButton.click(function () {

    let $newElement = $displayTextTemplate.clone();
    $newElement.attr('id', 'displayText-' + (++displayTextNr));
    dragElement($newElement[0]);
    $('body').append($newElement);
});
