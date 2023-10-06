"use client";

import { useState } from "react";

  

const Post = ({ name, image, summary }) => {

// set isLiked state to false

// first value is name of state want to track, 2nd arg is function to update that state

// these are extracted from useState from next.js

const [isLiked, setIsLiked] = useState(false);

return (

<div className="flex flex-col gap-4 p-4 w-96">

<h1>{name}</h1>

<img src={image} alt={name} />

<p>{summary}</p>

<button

// change it to opposite of what it is

// use arrow function as a block so not to call it on render.

onClick={() => setIsLiked(!isLiked)}

className={`${isLiked ? "bg-red-500" : "bg-blue-500"}`}

>

{isLiked ? "Unlike" : "Like"}

</button>

{!isLiked ? <p>NOT LIKED</p> : <p>LIKED</p>}

</div>

);

};
export default Post;