<script>
  import axios, { Axios } from 'axios';

  const fetch = () => {
    return axios({
      method: 'get',
      url: 'https://localhost:3003/news/',
      responseType: 'json',
    });
  };
  Promise.all(fetch()).then((response) => {
    console.log(response);
  });
</script>

<button on:click={fetch}>getUser</button>
