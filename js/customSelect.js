/** @format */

document.addEventListener('DOMContentLoaded', function () {
  const customSelectElements = document.querySelectorAll('.custom-select');

  customSelectElements.forEach((customSelect) => {
    const selectElement = customSelect.querySelector('select');
    const selectedDiv = document.createElement('DIV');
    selectedDiv.className = 'select-selected';
    selectedDiv.textContent = selectElement.options[selectElement.selectedIndex].textContent;
    customSelect.appendChild(selectedDiv);

    const optionsDiv = document.createElement('DIV');
    optionsDiv.className = 'select-items select-hide';

    Array.from(selectElement.options).slice(1).forEach((option) => {
      const optionDiv = document.createElement('DIV');
      optionDiv.textContent = option.textContent;
      optionDiv.addEventListener('click', function () {
        selectElement.selectedIndex = Array.from(selectElement.options).findIndex(opt => opt.textContent === this.textContent);
        selectedDiv.textContent = this.textContent;
        optionsDiv.querySelectorAll('.same-as-selected').forEach((el) => el.classList.remove('same-as-selected'));
        this.classList.add('same-as-selected');
        selectedDiv.click(); // Close the dropdown after selection
      });
      optionsDiv.appendChild(optionDiv);
    });

    customSelect.appendChild(optionsDiv);

    selectedDiv.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(selectedDiv);
      optionsDiv.classList.toggle('select-hide');
      selectedDiv.classList.toggle('select-arrow-active');
    });
  });

  function closeAllSelect(currentSelect) {
    document.querySelectorAll('.select-items').forEach((itemsDiv) => {
      if (itemsDiv !== currentSelect.nextElementSibling) {
        itemsDiv.classList.add('select-hide');
      }
    });
    document.querySelectorAll('.select-selected').forEach((selectedDiv) => {
      if (selectedDiv !== currentSelect) {
        selectedDiv.classList.remove('select-arrow-active');
      }
    });
  }

  document.addEventListener('click', () => closeAllSelect(null));
});
