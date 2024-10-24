import { useField, useResource } from "./hooks";

const App = () => {
  const { reset: resetContent, ...content } = useField();
  const { reset: resetName, ...name } = useField();
  const { reset: resetNumber, ...number } = useField();

  const [notes, noteService] = useResource("http://localhost:3005/notes");
  const [persons, personService] = useResource("http://localhost:3005/persons");

  const handleNoteSubmit = async (e) => {
    try {
      e.preventDefault();
      await noteService.create({ content: content.value });
      resetContent();
      console.log("note created successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const handlePersonSubmit = async (e) => {
    try {
      e.preventDefault();
      await personService.create({ name: name.value, number: number.value });
      resetName();
      resetNumber();
      console.log("person created successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2>notes</h2>

      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>

      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}

      <h2>persons</h2>

      <form onSubmit={handlePersonSubmit}>
        <div>
          <label htmlFor="name">
            name <input id="name" {...name} />
          </label>
        </div>

        <div>
          <label htmlFor="number">
            number <input id="number" {...number} />
          </label>
        </div>

        <button>create</button>
      </form>

      {persons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </>
  );
};

export default App;
