const editFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#updatename').value.trim();
    const description = document.querySelector('#updatedescription').value.trim();
    const id = window.location.toString().split("/")[4]

    if (name && description) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post/'+ id);
      } else {
        alert('Failed to edit post');
      }
    }
  };
  
  document
  .querySelector('#editbtn')
  .addEventListener('click', editFormHandler);
