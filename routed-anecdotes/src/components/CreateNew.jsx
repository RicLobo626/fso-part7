const CreateNew = ({ onCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const values = Object.fromEntries(formData.entries());

    onCreate({ ...values, votes: 0 });

    e.target.reset();
  };

  return (
    <>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">content</label>
          <input id="content" name="content" />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input id="author" name="author" />
        </div>
        <div>
          <label htmlFor="info">url for more info</label>
          <input id="info" name="info" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default CreateNew;
