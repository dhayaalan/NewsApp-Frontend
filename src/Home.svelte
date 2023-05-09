<script>

  let searchQuery = '';
  let searchResults = [];

  // onMount(async () => {
  //   var res = await axios({
  //     method: 'get',
  //     url: 'http://localhost:3003/news/',
  //     responseType: 'json',
  //   });
  //   news = res.data;
  //   console.log(news);
  // });
  async function handleSearch() {
    const response = await fetch(
      `https://dnsdumpster.com/static/map/${searchQuery}.png`
    );
    if (response.ok) {
      searchResults = [
        {
          name: searchQuery,
          image: URL.createObjectURL(await response.blob()),
        },
      ];
    } else {
      searchResults = [];
    }
  }
</script>

<div class="search-container">
  <label for="Search" class="search">Search:</label>
  <input
    class="search-input"
    type="text"
    placeholder="Enter domain name"
    bind:value={searchQuery}
  />

  <button class="search-button" on:click={handleSearch}>Search</button>
</div>

{#if searchResults}
  <ul class="search-results">
    <!-- {#each searchResults as result} -->
    <li>Youtube</li>
    <li>google</li>
    <li>Yahoo</li>
    <li>Hotmail</li>
    <!-- {/each} -->
  </ul>
{/if}

<style>
  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .search-input {
    padding: 8px;
    margin-right: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .search-button {
    padding: 8px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #007aff;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .search-button:hover {
    background-color: #0062cc;
  }

  .search-results {
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .search-results li {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
</style>
