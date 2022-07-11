import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import PostPage from "./PostPage";
import Card from "./components/Card";
import { Business, Group, Social } from "./components/image";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// POSTS IMAGES
const Images = {
  Social,
  Group,
  Business,
};

// INITIALIZED ARRAY OF OBJECTS
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

  // TEXT DISPLAYED ON THE SUBMIT BUTTON
  const [buttonValue, setButtonValue] = useState("Add New post");

  // INITIALIZED OBJECT TO PASS EACH CARD DATA TO OTHER SCREENS
  const [pageValue, setPageValue] = useState({});

  // INITIALIZED OBJECT TO MANAGE FORM INPUTS/DATA
  const [cardValue, setCardValue] = useState({});

  // FUNCTION TO EDIT A POST
  const handleEdit = (id) => {
    const copiedPost = posts;

    copiedPost.forEach((post) => {
      if (post.id === id) {
        setCardValue({ ...post });
      }
    });
    setButtonValue("Update Post");
  };

  // FUNCTION TO DELETE A POST
  const handleDelete = (id) => {
    const postCopied = posts;

    setPosts(postCopied.filter((post) => post.id !== id));
  };

  // FUNCTION TO SUBMIT ALL FORM INPUTS/DATA TO CREATE A NEW POST
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
    // SETTING ALL INPUT FIELD TO BLANK AFTER SUBMIT BUTTON HAS BEEN CLICKED.
    console.log(posts);
    setCardValue({
      title: "",
      id: null,
      category: "",
      days: "",
      body: "",
      image: "",
      bgc: "",
    });
    setButtonValue("Add New Post");
  };

  // FUNCTION TO MANAGE ALL FORM INPUTS STATES
  const handleState = (key, e) => {
    e.preventDefault();
    const newState = { ...cardValue };
    newState[key] = e.target.value;
    setCardValue(newState);
  };

  // FUNCTION TO PASS DATA TO OTHER SCREENS
  const handlePassData = (id) => {
    const pageData = posts;

    pageData.forEach((post) => {
      if (post.id === id) {
        setPageValue({ ...post });
      }
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {posts.map((post) => (
                  <div className="app-content" key={post.id}>
                    <Card
                      onEdit={() => handleEdit(post.id)}
                      onDelete={() => handleDelete(post.id)}
                      passData={() => handlePassData(post.id)}
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
                <div className="add-form">
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
                      type="date"
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

                    <button onClick={handleSubmit}>{buttonValue}</button>
                  </form>
                </div>
              </>
            }
          />
          <Route
            path="/page/:id"
            element={<PostPage pageValue={pageValue} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
