"use client";

import React, { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery } from "react-photoswipe-gallery";
import axios from "axios";
import Meme from "./Meme";
import Loader from "./Loader";
import Navbar from "./Navbar";

export default function MemeGallery() {
  // State variables for managing memes, parameter, loading state, and load count
  const [memes, setMemes] = useState([]);
  const [afterParameter, setAfterParameter] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  // useEffect to fetch memes on component mount and add scroll event listener
  useEffect(() => {
    fetchPosts(); // Initial fetch
    console.log("useEffect has run");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup function
  }, [loadCount]); // Dependency array ensures re-run when loadCount changes

  // Function to fetch memes from Reddit API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.reddit.com/r/memes.json?after=${afterParameter}&limit=100`
      );
      const responseData = res.data;

      // Update required state
      setMemes((prevMemes) => [...prevMemes, ...responseData.data.children]);
      setAfterParameter(responseData.data.after);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle scroll events and trigger additional meme loading
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 400
    ) {
      setLoading(true); 
      setLoadCount((prev) => prev + 1); 
    }
  };

  // JSX rendering of the component
  return (
    <>
      <Navbar />
      {loading && <Loader />}{" "}
      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-64 lg:my-20">
          {memes &&
            memes.map((meme, index) => {
              if (
                meme.data.is_reddit_media_domain &&
                meme.data.secure_media === null
              )
                return <Meme meme={meme} key={index} />;
            })}
        </div>
      </Gallery>
    </>
  );
}
