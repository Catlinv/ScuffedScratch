const lineTemplate = $('#lineTemplate');
const variables = new Array(6);
for (let el of document.getElementsByClassName("movable")) {
    dragElement(el);
}

let selected = null;

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.id.startsWith('if')) {
        // if present, the header is where you move the DIV from:
        $(elmnt).find('.tr')[0].ondblclick = bindElements;
        $(elmnt).find('.fa')[0].ondblclick = bindElements;
    }
    elmnt.onmousedown = dragMouseDown;
    elmnt.ondblclick = bindElements;

    function dragMouseDown(e) {
        e = e || window.event;
        //e.preventDefault();
        e.stopPropagation();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        //e.preventDefault();
        e.stopPropagation();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = Math.max(elmnt.offsetTop - pos2, 0) + "px";
        elmnt.style.left = Math.min(Math.max(elmnt.offsetLeft - pos1, 320), 800) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        // snap element to postition
        elmnt.style.top = parseInt((elmnt.offsetTop) / 10) * 10 + "px";
        elmnt.style.left = parseInt((elmnt.offsetLeft) / 10) * 10 + "px";
    }

    function bindElements() {
        if(selected && $(selected).parent()[0].id === this.id) return;
        if(selected && this.id === selected.id){
            $(selected).find('.next').text('');
            selected = null;
            this.style.backgroundColor = "green";
            return;
        }

        if (selected === null && this.id !== 'end' && !this.id.startsWith('if')) {
            selected = this;
            this.style.backgroundColor = 'red';
        } else if (this.id !== 'start' && this.id !== 'tr' && this.id !== 'fa'){
            if($(selected).hasClass('tr') || $(selected).hasClass('fa')){
                $(selected).find('.next').text(this.id + '>');
                //this.childNodes[1].childNodes[1].innerHTML = ('&lt;' + $(selected).parent()[0].id);
            } else {

                selected.childNodes[1].childNodes[3].innerHTML = (this.id + '&gt;');

                //this.childNodes[1].childNodes[1].innerHTML = ('&lt;' + selected.id);
            }
            selected.style.backgroundColor = "green";
            this.style.backgroundColor = "green";
            selected = null;
        }
    }
}