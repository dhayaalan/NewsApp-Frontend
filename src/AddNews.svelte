<script>
  import axios from 'axios';
  import { bind } from 'svelte/internal';
  import Home from './Home.svelte';
  import { push, pop, replace } from 'svelte-spa-router';

  function go_home() {
    pop(Home);
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
  <label for="HeadLines" placeholder="Enter the Headlines">headlines:</label>
  <input type="text" id="fname" />{headlines}<br /><br />
  <label for="image" placeholder="paste the image link">Image:</label>
  <input type="text" id="lname" />{image}<br /><br />
  <label for="Description" placeholder="Enter the description"
    >Description:</label
  >
  <input type="text" id="lname" />{description}<br /><br />
  <input type ="text" value="Submit" on:click={go_home} />
</form>
