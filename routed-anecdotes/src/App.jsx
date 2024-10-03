import Notification from "./components/Notification";
import AnecdoteList from "./components/AnecdoteList/AnecdoteList";
import CreateNew from "./components/CreateNew";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Anecdote from "./components/AnecdoteList/Anecdote";
import About from "./components/About";
import { useState } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";

const App = () => {
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const match = useMatch("/:id");
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const anecdote = match && anecdotes.find((a) => a.id === Number(match.params.id));

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const handleCreate = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`A new anecdote ${anecdote.content} created!`);
    navigate("/");
  };

  const handleCloseNotification = () => setNotification(null);

  return (
    <div className="wrapper">
      <Menu />

      {notification && (
        <Notification onClose={handleCloseNotification} message={notification} />
      )}

      <main>
        <Routes>
          <Route path="/create" element={<CreateNew onCreate={handleCreate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/:id" element={<Anecdote anecdote={anecdote} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
