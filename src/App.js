import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { Business, Group, Social } from "./components/image";

const Images = {
  Social,
  Group,
  Business,
};

const App = () => {
  const [posts, setPosts] = useState([
    {
      title: "7 Skills of Highly Effective Programmers",
      category: "PRODUCTIVITY",
      days: "3 days ago",
      body: " Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...",
      image: Images.Group,
      bgc: "#bcd1ff",
      id: 1,
    },
    {
      title: "SMM starter pack, part 2: content promotion",
      category: "MEDIA",
      days: "17 days ago",
      body: "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.",
      image: Images.Social,
      bgc: "linear-gradient(135deg, #F395BA 0%, #FED182 100%)",
      id: 2,
    },
    {
      title: " 11 Things I Wish I Knew When I Started My Business",
      category: "BUSINESS",
      days: "1 month ago",
      body: "Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent...",
      image: Images.Business,
      bgc: "#D2EBF7",
      id: 3,
    },
  ]);

  const [cardValue, setCardValue] = useState({
    title: "",
    category: "",
    days: "",
    body: "",
    image: "",
    bgc: "",
    id: null,
  });

  const handleDelete = (id) => {
    const copiedPost = posts;

    copiedPost.forEach((post) => {
      if (post.id === id) {
        const newCardValue = { ...post };
        setCardValue(newCardValue);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardValue.id !== null) {
      setPosts(
        posts.map((post) => (post.id !== cardValue.id ? post : cardValue))
      );
    } else if (cardValue.id === null) {
      setPosts([
        ...posts,
        {
          ...cardValue,
          id: posts.length + Math.random() * 1000,
          image: Images[cardValue.image],
        },
      ]);
    }

    console.log(posts);
  };

  const handleState = (key, e) => {
    e.preventDefault();
    const newState = { ...cardValue };
    newState[key] = e.target.value;
    setCardValue(newState);
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
            value={cardValue.title}
            onChange={(e) => handleState("title", e)}
          />

          <label>Category:</label>
          <input
            type="text"
            required
            value={cardValue.category}
            onChange={(e) => handleState("category", e)}
          />

          <label>Days:</label>
          <input
            type="text"
            required
            value={cardValue.days}
            onChange={(e) => handleState("days", e)}
          />

          <label>Body:</label>
          <textarea
            type="text"
            required
            value={cardValue.body}
            onChange={(e) => handleState("body", e)}
          />

          <label>Image:</label>
          <input
            type="text"
            value={cardValue.image}
            onChange={(e) => handleState("image", e)}
          />

          <label>Background:</label>
          <input
            type="text"
            required
            value={cardValue.bgc}
            onChange={(e) => handleState("bgc", e)}
          />

          <button onClick={handleSubmit}>Add New Post</button>
        </form>
      </div>
    </div>
  );
};

export default App;
