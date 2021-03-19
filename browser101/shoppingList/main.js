addEventListener('load', () => {
  const item_input = document.querySelector('.item_input');
  const items = document.querySelector('.items');
  const item_plus = document.querySelector('.item_plus');

  item_input.addEventListener('keydown', (event) => {
    if (window.event.keyCode == 13) {
      addItem();
    }
  });

  item_plus.addEventListener('click', (event) => {
    addItem();
  });

  function deleteLi(child) {
    let grandparent = child.parentNode.parentNode;
    grandparent.parentNode.removeChild(grandparent);
  }

  function addItem() {
    const value = item_input.value;
    const pluslist = document.createElement('li');
    const plus_name = document.createElement('span');
    const plus_delete = document.createElement('button');
    const divider = document.createElement('div');
    const delete_img = document.createElement('i');
    const plus_content = document.createElement('div');
    if (!value || value === '' || value === ' ') {
      item_input.value = '';
      return false;
    }
    divider.setAttribute('class', 'divider');
    pluslist.setAttribute('class', 'item');
    plus_content.setAttribute('class', 'item_content');
    plus_name.setAttribute('class', 'item_name');
    plus_delete.setAttribute('class', 'item_delete');
    delete_img.setAttribute('class', 'fas fa-trash-alt');

    plus_name.textContent = value;

    plus_delete.appendChild(delete_img);
    plus_content.appendChild(plus_name);
    plus_content.appendChild(plus_delete);
    pluslist.appendChild(plus_content);
    items.appendChild(pluslist);

    plus_delete.addEventListener('click', (event) => {
      deleteLi(event.currentTarget);
    });
    items.scrollTop = items.scrollHeight;

    item_input.value = '';
  }
});
