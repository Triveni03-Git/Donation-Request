// reset-password.js
document.getElementById('resetPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  fetch('reset-pwd.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${encodeURIComponent(email)}`
  })
  .then(response => response.json())
  .then(data => {
      const messageDiv = document.getElementById('message');
      if (data.error) {
          messageDiv.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
      } else {
          messageDiv.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
      }
  })
  .catch(error => console.error('Error:', error));
});
