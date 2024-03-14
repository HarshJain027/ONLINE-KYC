document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('kyc-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Serialize form data
        const formData = new FormData(form);

        // Send form data to server
        fetch('http://localhost:3000/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data stored successfully:', data);
            successMessage.textContent = '';
            form.reset();
        })
        .catch(error => {
            console.error('Error storing data:', error);
            successMessage.textContent = 'Data stored successfully!';
        });
    });
});
