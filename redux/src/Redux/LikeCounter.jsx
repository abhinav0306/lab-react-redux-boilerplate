import React, { useState, useEffect } from "react";
import { incrementLike, decrementLike } from "./Actions";
import { createStore } from "redux";
import reducer from "./Reducer";

const store = createStore(reducer);

const LikeCounter = () => {
  const [likes, setLikes] = useState(store.getState().likes);

  useEffect(() => {
    const subscribe = store.subscribe(() => {
      setLikes(store.getState().likes);
    });
    return subscribe;
  }, []);

  function handleLike() {
    store.dispatch(incrementLike());
  }

  function handleUnlike() {
    store.dispatch(decrementLike());
  }

  return (
    <>
      <h1>{likes}</h1>
      <button onClick={handleLike}>Increment</button>{" "}
      <button onClick={handleUnlike}>Decrement</button>
    </>
  );
};

export default LikeCounter;
