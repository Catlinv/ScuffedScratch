const $deleteButton = $('#deleteButton');

$deleteButton.click(function () {
    if(selected !== null){
        if(selected.id !== 'start' && selected.id !== 'end' && !($(selected).hasClass('tr') || $(selected).hasClass('fa')))
            $(selected).remove();
        selected.style.backgroundColor = '#2196F3';
        selected = null;
    }
});