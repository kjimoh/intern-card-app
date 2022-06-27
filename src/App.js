import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { Business, Group, Social } from "./components/image";

const App = () => {
  const [posts, setPosts] = useState([
    {
      title: "7 Skills of Highly Effective Programmers",
      category: "PRODUCTIVITY",
      days: "3 days ago",
      body: " Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...",
      bgc: "#bcd1ff",
      image: Group,
      id: 1,
    },
    {
      title: "SMM starter pack, part 2: content promotion",
      category: "MEDIA",
      days: "17 days ago",
      body: "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.",
      bgc: "linear-gradient(135deg, #F395BA 0%, #FED182 100%)",
      image: Social,
      id: 2,
    },
    {
      title: " 11 Things I Wish I Knew When I Started My Business",
      category: "BUSINESS",
      days: "1 month ago",
      body: "Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent...",
      image: Business,
      bgc: "#D2EBF7",
      id: 3,
    },
  ]);

  const [title, setTitle] = useState("");
  const [days, setDays] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();
  const [bgc, setBgc] = useState("");

  const handleDelete = (id) => {
    const copiedPost = posts;
    setPosts(copiedPost.filter((post) => post.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, days, body, author, category, image, bgc };

    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);

    console.log(newPost);
  };

  return (
    <div className="app">
      {posts.map((post) => (
        <div className="app-content">
          <Card
            onDelete={() => handleDelete(post.id)}
            title={post.title}
            category={post.category}
            days={post.days}
            body={post.body}
            image={post.image}
            bgc={post.bgc}
            id={post.id}
          />
        </div>
      ))}
      <div className="add-form" onSubmit={handleSubmit}>
        <form>
          <label>title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Body:</label>
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Days:</label>
          <input
            type="text"
            required
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <label>Category:</label>
          <input
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label>Author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label>Background:</label>
          <input
            type="text"
            required
            value={bgc}
            onChange={(e) => setBgc(e.target.value)}
          />

          <label>Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleSubmit}>Add New Post</button>
        </form>
      </div>
    </div>
  );
};

export default App;
