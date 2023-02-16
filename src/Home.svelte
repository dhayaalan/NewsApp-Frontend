<script>
  import axios from 'axios';

  let news = [];

  const fetch = async () => {
    var res = await axios({
      method: 'get',
      url: 'http://localhost:3003/news/',
      responseType: 'json',
    });
    news = res.data;
    console.log(news);
  };
</script>

<button on:click={fetch}>getUser</button>

<div>
  <h1>News List</h1>
</div>
<ul>
  {#each news as news}
    <li>{JSON.stringify(news)}</li>
  {/each}
</ul>
