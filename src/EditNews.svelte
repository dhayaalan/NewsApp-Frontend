<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { newsId } from './store/news';

  let headline = '';
  let image = '';
  let description = '';
  let id = '';

  newsId.subscribe((value) => {
    id = value
  });

  onMount(async () => {
    var res = await axios({
      method: 'get',
      url: `http://localhost:3003/news/${id}`,
    });
    console.log(res.data);
    headline = res.data.newses.headlines;
    image = res.data.newses.image;
    description = res.data.newses.description;
  });

  const handleUpdate = async () => {
    var res = await axios({
      method: 'put',
      url: `http://localhost:3003/news/${id}`,
      data: {
        headline: headline,
        description: description,
        image: image,
      },
    });
    console.log(res.data);
    push("/");
  };
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
<button type="button" class="btn btn-primary" on:click={handleUpdate}>Submit</button
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
