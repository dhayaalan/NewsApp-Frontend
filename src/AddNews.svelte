<script>
  import axios from 'axios';
  import Home from './Home.svelte';
  import { push, pop, replace } from 'svelte-spa-router';

  function go_home() {
    replace(Home);
  }

  let headlines = '';
  let image = '';
  let description = '';
  let category = '';

  const fetch = async () => {
    var res = await axios({
      method: 'post',
      url: 'http://localhost:3003/news/',
      data: {
        headlines: headlines,
        image: image,
        description: description,
        category: category,
      },
    });
    console.log(res.data);
  };
</script>

<form action="submit" method="post">
  <label for="HeadLines">Headlines</label>
  <input
    type="text"
    placeholder="Enter the Headlines"
    bind:value={headlines}
  /><br /><br />
  <label for="image">Image</label>
  <input type="text" placeholder="Enter the image url" bind:value={image} /><br
  /><br />
  <label for="Description">Description</label>
  <input
    type="text"
    placeholder="Enter the description"
    bind:value={description}
  /><br /><br />
  <input type="text" value="Submit" on:click={fetch} />
</form>
