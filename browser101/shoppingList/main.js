addEventListener('load', () => {
  const item_input = document.querySelector('.item_input');
  const items = document.querySelector('.items');
  const item_plus = document.querySelector('.item_plus');

  item_input.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
      addItem();
    }
  });

  item_plus.addEventListener('click', () => {
    addItem();
    item_input.focus();
  });

  items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
      const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
      toBeDeleted.remove();
    }
  });

  let id = 0;
  function addItem() {
    const value = item_input.value;
    const pluslist = document.createElement('li');
    if (!value || value === '' || value === ' ') {
      item_input.value = '';
      return false;
    }
    pluslist.setAttribute('class', 'item');
    pluslist.setAttribute('data-id', id);
    pluslist.innerHTML = `
        <li class="item">
          <div class="item_content">
            <span class="item_name">${value}</span>
            <button class="item_delete">
              <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
          </div>
        </li>
    `;
    id++;

    items.appendChild(pluslist);

    items.scrollTop = items.scrollHeight;

    item_input.value = '';
  }
});
