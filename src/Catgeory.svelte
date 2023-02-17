<script>
  import axios from 'axios';
  import Home from './Home.svelte';

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

<div class="form-floating mb-3">
  <label for="floatingInput">Category</label>
  <input
    type="text"
    class="form-control"
    id="floatingInput"
    placeholder="Enter Category"
    bind:value={name}
  />
</div>
<button type="button" class="btn btn-primary" on:click={fetch}>Submit</button>

<style>
  div {
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 75%;
    align-items: center;
  }
</style>
