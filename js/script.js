const menuBtn = document.getElementById('menu-btn');
const errorMsg = document.getElementById('error-msg');
const linkForm = document.getElementById('link-form');
const linkInput = document.getElementById('link-input');
const menu = document.getElementById('menu');

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

const onMenuBtnClick = () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  menuBtn.classList.toggle('open');
};

const resizeObserver = new ResizeObserver((entries) => {
  const [bodyEntry] = entries;
  if (bodyEntry.target.clientWidth >= 1024) {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    menuBtn.classList.remove('open');
  }
});

resizeObserver.observe(document.body);

linkForm.addEventListener('submit', onLinkFormSubmit);
menuBtn.addEventListener('click', onMenuBtnClick);
