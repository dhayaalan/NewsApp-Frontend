<script>
  import axios from 'axios';
  import Home from './Home.svelte';
  import { push, pop, replace } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  function go_home() {
    replace(Home);
  }

  let headlines = '';
  let image = '';
  let description = '';
  let categories = [];

  const fetch = async () => {
    const id = document.querySelector('select').value;
    var res = await axios({
      method: 'post',
      url: 'http://localhost:3003/news/',
      data: {
        categoriesId: id,
        headlines: headlines,
        image: image,
        description: description,
        categories: categories,
      },
    });
    console.log(res.data);
  };

  onMount(async () => {
    var res = await axios({
      method: 'get',
      url: 'http://localhost:3003/categories',
    });
    categories = res.data;
  });
</script>

<div class="form-floating mb-3">
  <label for="floatingInput">HeadLines</label>
  <input
    type="text"
    class="form-control"
    id="floatingInput"
    placeholder="Enter HeadLines"
    bind:value={headlines}
  />
</div>
<div class="form-floating mb-3">
  <label for="floatingInput">Image</label>
  <input
    type="text"
    class="form-control"
    id="floatingInput"
    placeholder="Image Link"
    bind:value={image}
  />
</div>
<div class="form-floating mb-3">
  <label for="floatingInput">Description</label>
  <textarea
    class="form-control"
    id="floatingInput"
    rows="3"
    bind:value={description}
  />
</div>
<label for="category">category</label>
<select
  name="Category"
  class="form-select"
  aria-label="Disabled select example"
>
  {#each categories as category}
    <option value={category._id}>{category.name}</option>
  {/each}
</select>
<button type="button" class="btn btn-primary" on:click={fetch}>Submit</button>

<style>
  div {
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 75%;
    align-items: center;
  }
  select {
    margin-right: 75%;
    padding-right: 75%;
  }
</style>
