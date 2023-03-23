const linkForm = document.getElementById('link-form');
const linkInput = document.getElementById('link-input');
const errorMsg = document.getElementById('error-msg');

const isURLValid = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
};

const onLinkFormSubmit = (e) => {
  e.preventDefault();

  const linkInputValue = linkInput.value;
  const linkIsValid = isURLValid(linkInputValue);

  if (!linkInputValue || !linkIsValid) linkInput.classList.add('border-red');
  else linkInput.classList.remove('border-red');

  if (!linkInputValue) {
    errorMsg.innerHTML = 'Please enter something';
  } else if (!linkIsValid) {
    errorMsg.innerHTML = 'Please enter a valid URL';
  } else {
    errorMsg.innerHTML = '';
    alert('Success');
  }
};

linkForm.addEventListener('submit', onLinkFormSubmit);
