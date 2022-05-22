import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../api/config";
import { getPosts } from "../api/post";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import UploadForm from "./UploadForm";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const res = await getPosts();
    setData(res?.data.data);
  }

  const onSubmit = (v) => {
    setData([v, ...data]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <UploadForm onSubmit={(v) => onSubmit(v)} />
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <PostCard
                key={index}
                image={item.image}
                caption={item.content}
                username={item.author?.name}
                userId={item.id}
                date={item.createdAt}
                liked={item.liked}
                disliked={item.disliked}
                likeCount={item.likeCount}
                dislikeCount={item.dislikeCount}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
