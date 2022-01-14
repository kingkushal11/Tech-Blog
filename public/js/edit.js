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

  const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#addcomment').value.trim();
    const post_id = window.location.toString().split("/")[4]

    if (comment_text) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post/'+ id);
      } else {
        alert('Failed to comment post');
      }
    }
  };
  
  document
  .querySelector('#btncomment')
  .addEventListener('click', editFormHandler);