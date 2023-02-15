<script>
  let headlines = '';
  let image = '';
  let description = '';

  function handleSubmit() {
    const formData = {
      headlines: headlines,
      image: image,
      description: description,
    };

    fetch('https://localhost:3003/news', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Form submitted successfully');
        } else {
          alert('Error submitting form');
        }
      });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Headlines:
    <input
      type="text"
      class="forms"
      bind:value={headlines}
      placeholder="Type Headlines"
    />
  </label>
  <br />
  <label>
    Image:
    <input
      type="text"
      class="forms"
      bind:value={image}
      placeholder="Use image Link"
    />
  </label>
  <br />

  <label>
    Description
    <textarea
      class="forms"
      bind:value={description}
      placeholder="Type Description"
    />
  </label>
  <br />

  <button type="submit">Submit</button>
</form>

<style>
  form {
    width: auto;
    padding-top: 20px;
    margin: 20px;
  }
  .forms {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
