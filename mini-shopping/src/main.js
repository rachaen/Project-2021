//fetch를 이용해서 json파일에 들어있는 items을 동적으로 받아옴
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// items를 html요소로 변환해서 화면에 표시해주기
function displayItems(items) {
  const container = document.querySelector('.shopping-items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// 데이터를 html 요소로 만들어주기
function createHTMLString(item) {
  return `
    <li class="shopping-item">
        <img src="${item.image}" alt="${item.type}" class="item-image" />
        <span class="item-desc">${item.gender}, ${item.size}</span>
    </li>
`;
}

// 버튼 이벤트 처리 함수
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}

// 받아온 아이템들을 이용해서 버튼을 누르면 filtering해주기
function setEventListeners(items) {
  const logo = document.querySelector('.shopping-logo img');
  const menu_buttons = document.querySelector('.shopping-menu');
  logo.addEventListener('click', () => displayItems(items));
  menu_buttons.addEventListener('click', (event) =>
    onButtonClick(event, items)
  );
}

// Main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
