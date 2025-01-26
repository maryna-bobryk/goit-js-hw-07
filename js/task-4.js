const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  const formData = { email, password };

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  } else {
    console.log(formData);
  }

  formElem.reset();
}
