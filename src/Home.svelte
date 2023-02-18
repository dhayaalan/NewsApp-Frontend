<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { pop, push, replace } from 'svelte-spa-router';
  import { newsId } from './store/news';

  let news = [];

  const go_edit = (id) => {
    newsId.update((existing) => id);
    push(`/editnews/${id}`);
  };

  onMount(async () => {
    var res = await axios({
      method: 'get',
      url: 'http://localhost:3003/news/',
      responseType: 'json',
    });
    news = res.data;
    console.log(news);
  });

  const go_delete = async (id) => {
    var res = await axios({
      method: 'delete',
      url: `http://localhost:3003/news/${id}`,
      responseType: 'json',
    });
    news = res.data.result;
    console.log(news);
  };
</script>

<div class="row row-cols-1 row-cols-md-3 g-4">
  {#each news as newses}
    <div class="col">
      <div class="card h-100">
        <img src={newses.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{newses.headlines}</h5>
          <p class="card-text">{newses.description}</p>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            class="btn btn-primary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size:15px"
            on:click={go_edit(newses._id)}>Edit</button
          >
          <button
            type="button"
            class="btn btn-primary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size:15px"
            on:click={go_delete(newses._id)}>Delete</button
          >
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  div {
    padding-top: 5px;
  }
</style>
