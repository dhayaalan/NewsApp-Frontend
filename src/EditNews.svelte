<script>
  import axios from 'axios';
  import Home from './Home.svelte';
  import { push, pop, replace } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  function go_home() {
    replace(Home);
  }

  export let id = '';
  let name = '';

  onMount( async () => {
    var res = await axios({
      method: 'put',
      url: 'http://localhost:3003/news/'`${req.params.id}`,
      data: {
        id: id,
        name: name,
      },
    });
    console.log(res.data);
  });
</script>

<form action="submit" method="post">
  <label for="HeadLines">Title</label>
  <input type="text" placeholder="Edit the title" bind:value={name} /><br /><br
  />
  <input type="text" value="Submit" on:click|preventDefault={fetch} />
</form>
