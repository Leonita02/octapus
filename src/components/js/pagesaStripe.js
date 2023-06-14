export function handleButtonClick() {
  console.log("HI");
    fetch('http://localhost:8081/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 }, 
        ],
      }),
    })
      .then(res => {
     
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
        
      })
      .then(({ url }) => {
        console.log("Hi");
      
        window.location = url;
      })
      .catch(e => {
        console.error(e.error);
      });
  }


  

