import { useField } from "../hooks";

const CreateNew = ({ onCreate }) => {
  const content = useField();
  const author = useField();
  const info = useField();

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      content: content.attrs.value,
      author: author.attrs.value,
      info: info.attrs.value,
    };

    onCreate(values);
  };

  const handleReset = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">content</label>
          <input id="content" {...content.attrs} />
        </div>

        <div>
          <label htmlFor="author">author</label>
          <input id="author" {...author.attrs} />
        </div>

        <div>
          <label htmlFor="info">url for more info</label>
          <input id="info" {...info.attrs} />
        </div>

        <button>create</button>
        <button onClick={handleReset} type="button">
          reset
        </button>
      </form>
    </>
  );
};

export default CreateNew;
