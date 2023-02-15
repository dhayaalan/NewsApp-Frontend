<script>
  import Router from 'svelte-spa-router';
  import AddNews from './AddNews.svelte';
  import EditNews from './EditNews.svelte';
  import Home from './Home.svelte';
  import NotFound from './NotFound.svelte';

  let routes = {
    '/': Home,
    '/addnews': AddNews,
    '/editnews/:id': EditNews,

    '*': NotFound,
  };
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/addnews">AddNews</a>
</nav>

<main>
  <Router {routes} />
</main>
