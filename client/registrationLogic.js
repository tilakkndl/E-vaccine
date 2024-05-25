async function fetchingData(){
    let listOfData;
    try {
        // Making the fetch request
        const response = await fetch('http://localhost:5000/api/v1/register');

        // Checking the response status
        if (!response.ok) {
            // throw new Error('Failed to register');
            throw new Error(error);
        }

        // Parsing the response JSON
        const data = await response.json();
        // listOfData = data.data;
        creatingRows(data.data);
        console.log('Registration successful:', listOfData);
        // showMessage('Registration successful', );
    } catch (error) {
        console.error('Error registering:', error.message);
        // showMessage('Registration could not  succed', );

    }
}

fetchingData()

function creatingRows(listOfData){
const tableBody = document.querySelector('#dataTable tbody');
const tableRowsString = listOfData.map((data, index) => (
    `
    <tr>
    <td>${index+1}</td>

    <td>${data.name}</td>
    <td>${data.vaccinationSpot}</td>
    <td>${data.date}</td>
    <td>${data.vaccineType}</td>
    <td>${data.time}</td>
    <td>${data._id}</td>
  </tr>
    `
))
const tableRows = tableRowsString.join('');

tableBody.innerHTML = tableRows
}