import axios from "axios"
// fetch("https://jsonplaceholder.org/users/1")
// .then((res) => res.json())
// .then((data) => console.log(`${data.firstname} ${data.lastname}`));

axios.get('https://jsonplaceholder.org/users/1')
  .then((data) => {
    console.log(data.data.firstname);
  })

