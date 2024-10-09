const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce tu mensaje: ', (message) => {
    const data = { message: message };
  
    fetch('https://1e5c-186-166-142-157.ngrok-free.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
    readline.close();
  });
  