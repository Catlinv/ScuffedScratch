const $ifTemplate = $(
    '<div class="movable if" id="if-1" style="top: 0; left: 320px">\n' +
    '    <p>\n' +
    '        <span class="prev"></span>\n' +
    '        <br>\n' +
    '        If\n' +
    '    </p>\n' +
    '    <select name="varNr1">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '    <select name="operation">\n' +
    '        <option value="==">==</option>\n' +
    '        <option value="<">&lt;</option>\n' +
    '        <option value=">">&gt;</option>\n' +
    '        <option value="<=">&lt;=</option>\n' +
    '        <option value=">=">&gt;=</option>\n' +
    '    </select>\n' +
    '    <select name="varNr2">\n' +
    '        <option value="0">v1</option>\n' +
    '        <option value="1">v2</option>\n' +
    '        <option value="2">v3</option>\n' +
    '        <option value="3">v4</option>\n' +
    '        <option value="4">v5</option>\n' +
    '    </select>\n' +
    '    <hr>\n' +
    '    <div class="tr">True <span class="next"></span></div>\n' +
    '    <hr>\n' +
    '    <div class="fa">False <span class="next"></span></div>\n' +
    '</div>'),
    $ifButton = $('#ifButton');
let ifNr = 0;

$ifButton.click(function () {

    let $newElement = $ifTemplate.clone();
    $newElement.attr('id', 'if-' + (++ifNr));
    dragElement($newElement[0]);
    $('body').append($newElement);
});