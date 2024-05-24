document.addEventListener('DOMContentLoaded', function() {
  const addItemBtn = document.getElementById('addItemBtn');
  const itemInput = document.getElementById('itemInput');
  const itemsContainer = document.getElementById('itemsContainer');

  addItemBtn.addEventListener('click', function() {
    const newItemText = itemInput.value.trim();
    if (newItemText !== '') {
      addItem(newItemText);
      itemInput.value = '';
      itemInput.focus();
    }
  });

  function addItem(text) {
    const item = document.createElement('div');
    item.classList.add('item');
    
    const itemText = document.createElement('div');
    itemText.classList.add('item-text');
    itemText.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      itemsContainer.removeChild(item);
    });
    
    item.appendChild(itemText);
    item.appendChild(deleteBtn);
    itemsContainer.appendChild(item);
  }
});
