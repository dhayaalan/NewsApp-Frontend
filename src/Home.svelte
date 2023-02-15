<script>
  import Axios from 'axios';

  const fetch = () => {
    Axios.get('http://localhost:3003/news/').then((response) => {
      console.log(response);
    });
  };
</script>

<button on:click={fetch}>getUser</button>
