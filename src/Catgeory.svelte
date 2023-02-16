<script>
  import axios from 'axios';
  import Home from './Home.svelte';
  import { push, pop, replace } from 'svelte-spa-router';

  function go_home() {
    replace(Home);
  }

  let name = '';

  const fetch = async () => {
    var res = await axios({
      method: 'post',
      url: 'http://localhost:3003/categories',
      data: {
        name: name,
      },
    });
    console.log(res.data);
  };
</script>

<form action="submit" method="post">
  <label for="HeadLines">Category</label>
  <input type="text" placeholder="Enter the category" bind:value={name} /><br
  /><br />
  <input type="text" value="Submit" on:click={fetch} />
</form>
