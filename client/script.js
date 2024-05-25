//to show message ater registration 
function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.color = 'red'

    const messageContainer = document.getElementById('message-container');

    // Append message element to the body
    messageContainer.appendChild(messageElement);

    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

//handle form submit
async function handleSubmit(event) {
    event.preventDefault();

    // Accessing value from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const vaccinationSpot = document.getElementById('spots').value;

    // Accessing value from the radio button
    const vaccineType = document.querySelector('input[name="type"]:checked').value;

    console.log(name, age, address, date, vaccinationSpot, vaccineType);

    // Constructing the payload object
    const payload = {
        name,
        age,
        address,
        date,
        vaccinationSpot,
        vaccineType
    };

    try {
        // Making the fetch request
        const response = await fetch('http://localhost:5000/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // Checking the response status
        if (!response.ok) {
            // throw new Error('Failed to register');
            throw new Error(error);
        }

        // Parsing the response JSON
        const data = await response.json();
        console.log('Registration successful:', data);
        showMessage('Registration successful', );
    } catch (error) {
        console.error('Error registering:', error.message);
        showMessage('Registration could not  succed', );

    }
}
