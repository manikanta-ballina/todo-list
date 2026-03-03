document.querySelector('#b1').addEventListener('click',addlist);
document.querySelector('#list').addEventListener('click',checked_remove_item)
function addlist(){
    if(document.querySelector('#i1').value){
        var input_field = document.querySelector('#i1');
        var new_list = document.createElement('li');
        new_list.innerText =  input_field.value;
        var new_span = document.createElement('Span')
        new_span.innerText='x'
        var list_container = document.querySelector('#list');
        new_list.appendChild(new_span)
        list_container.appendChild(new_list)
        input_field.value = ''
    }
}
function checked_remove_item(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
   else if(event.target.tagName==='SPAN'){
    event.target.parentElement.remove();
   }
}