<script>
  import AddNews from '../routes/addNews.svelte';
</script>

<nav>
  <p>Daily News</p>
  <a href="/" class="home">Home</a>
  <a href="/add-news" class="add-news">Add News</a>
</nav>

<style>
  P{
    font-size: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 5px;
    margin: 0px;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #fff;
    color: #333;
  }
</style>
