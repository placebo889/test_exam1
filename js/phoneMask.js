/** @format */

function mask(event) {
  const keyCode = event.keyCode || event.which;
  const pos = this.selectionStart;

  if (pos < 3) event.preventDefault();

  const matrix = '+38(0__) ___-__-__';
  const def = matrix.replace(/\D/g, '');
  let val = this.value.replace(/\D/g, '');
  let i = 0;

  this.value = matrix.replace(/[_\d]/g, (a) => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));

  const firstUnderscore = this.value.indexOf('_');
  if (firstUnderscore !== -1) {
    this.value = this.value.slice(0, firstUnderscore < 6 ? 18 : firstUnderscore);
  }

  const reg = new RegExp(
    `^${matrix.substr(0, this.value.length)
      .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
      .replace(/[+()]/g, '\\$&')}$`
  );

  if (!reg.test(this.value) || this.value.length < 5 || (keyCode >= 48 && keyCode <= 57)) {
    this.value = this.value;
  }

  if (event.type === 'blur' && this.value.length < 5) {
    this.value = '';
  }
}

const input = document.querySelector('#phone');
['input', 'focus', 'blur', 'keydown'].forEach((event) => input.addEventListener(event, mask));
