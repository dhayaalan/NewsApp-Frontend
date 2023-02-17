<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import news from './Home.svelte';

  let headline = '';
  let image = '';
  let description = '';

  const get_data = () => {
    push(fetch);
  };

  const fetch = async () => {
    const id = document.querySelector('select').value;
    var res = await axios({
      method: 'get',
      url: 'http://localhost:3003/news',
      data: {
        headline: req.body.headline,
        image: req.body.image,
        description: req.body.description,
      },
    });
    console.log(res.data);
  };

  onMount(async () => {
    var res = await axios({
      method: 'put',
      url: 'http://localhost:3003/news/:id',
      data: {
        headline: headline,
        description: description,
      },
    });
    console.log(res.data);
  });
</script>

<div class="form-floating mb-3">
  <label for="floatingInput">HeadLines</label>
  <input
    type="text"
    class="form-control"
    id="floatingInput"
    placeholder="Change news HeadLines"
    bind:value={headline}
  />
</div>

<div class="form-floating mb-3">
  <label for="floatingInput">Description</label>
  <input
    type="text"
    class="form-control"
    id="floatingInput"
    placeholder="Change Description"
    bind:value={description}
  />
</div>
<button type="button" class="btn btn-primary" on:click={get_data}>Submit</button
>

<style>
  div {
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 75%;
    align-items: center;
  }
  label {
    padding-left: 35px;
  }
</style>
