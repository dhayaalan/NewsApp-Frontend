<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { push, pop, replace } from 'svelte-spa-router';
  import EditNews from './EditNews.svelte';

  const go_edit = () => {
    push("/editnews");
  };

  let news = [];

  onMount(async () => {
    var res = await axios({
      method: 'get',
      url: 'http://localhost:3003/news/',
      responseType: 'json',
    });
    news = res.data;
    console.log(news);
  });
</script>

<div class="grid text-center">
  <div class="row">
    {#each news as newses}
      <div class="col-6">
        <div>{newses.headlines}</div>
        <div>{newses.image}</div>
        <div>{newses.description}</div>
        <button
          type="button"
          class="btn btn-primary"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 12px"
          on:click={go_edit}>Edit</button
        >
      </div>
    {/each}
  </div>
</div>
