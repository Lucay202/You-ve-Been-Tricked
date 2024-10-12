fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const location = `${data.city}, ${data.region}`;
        document.getElementById('location').textContent = location;
    })
    .catch(error => {
        console.error('Error fetching location:', error);
        document.getElementById('location').textContent = 'Unable to retrieve location';
    });