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

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Category</label>
  <input
    type="text"
    class="form-control"
    id="exampleFormControlInput1"
    placeholder="Enter Category"
    bind:value={name}
  />
</div>
<button type="button" class="btn btn-primary" on:click={fetch}>Submit</button>
