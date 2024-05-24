document.addEventListener('DOMContentLoaded', function() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropArea = document.querySelector('.drop-area');
  
    dragItems.forEach(item => {
      item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', item.innerText);
      });
    });
  
    dropArea.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    dropArea.addEventListener('drop', function(e) {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      const newItem = document.createElement('div');
      newItem.innerText = data;
      dropArea.appendChild(newItem);
    });
  });
  