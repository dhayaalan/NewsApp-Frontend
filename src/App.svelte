<script>
  import Router from 'svelte-spa-router';
  import AddNews from './AddNews.svelte';

  import Catgeory from './Catgeory.svelte';
  import EditNews from './EditNews.svelte';
  import Home from './Home.svelte';
  import NotFound from './NotFound.svelte';

  let routes = {
    '/': Home,
    '/addnews': AddNews,
    '/editnews/:id': EditNews,
    '/addcategory': Catgeory,

    '*': NotFound,
  };
</script>

<nav class="navbar bg-primary navbar navbar-expand-lg" data-bs-theme="dark">
  <div class="container-fluid nav justify-content-end">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/addnews">AddNews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/addcategory">AddCategory</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main>
  <Router {routes} />
</main>
