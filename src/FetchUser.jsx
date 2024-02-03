import React from 'react'
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import github from './assets/icons8-github-24.png'
import Header from "./components/Header";

const FetchUser = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(`https://api.github.com/users/${userId}`);

  const handleFetch = () => {
    if (userId) {
      setLoading(true);
      setError(null);

      const headers = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "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",
      };

      fetch(url, { headers })
        .then((response) => {
          if (!response.ok && !userId) {
            throw new Error("Error fetching data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setUserId('')
        })
        .catch((err) => {
          setError("Error fetching data...");
          setLoading(false);
          console.error(err);
        });
    }
  };

  useEffect(() => {
    handleFetch();
  }, [url]);

  const handleInputChange = (e) => {
    setUserId(e.target.value);
    // console.log(e.target.placeholder);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://api.github.com/users/${userId}`);
  };

  const sliceName = (info, maxLength)=>{
    if(info.length <= maxLength){
        return info
    }
    return `${info.slice(0, maxLength)}...`;
  }

  return (
    <>
    <div className="main shadow col-12 col-md-6 offset-md-3">
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          className="form-control p-3"
          type="text"
          value={userId}
          onChange={handleInputChange}
          placeholder="Search GitHub user..."
        />

        <button className="btn btn-info text-light" type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : error ? (
        <p className="text-light">{error}</p>
      ) : data ? (
        <div className="card shadow-lg">
          <div className="card-header">
            <h2>{sliceName(data.login, 10)}</h2>
          {/* <h2>{data.login}...</h2> */}
            <img className="img-fluid " src={data.avatar_url} alt="avatar" />
          </div>
          <div className="card-content">
            <p className="">
              Followers:
              <span className="text-secondary ms-md-2">{data.followers}</span>
            </p>
            <p className="ms-md-4">
              Following:
              <span className="text-secondary ms-s-2">{data.following}</span>
            </p>
            <p className="ms-md-4">
              Repos:
              <span className="text-secondary ms-s-2">{data.public_repos}</span>
            </p>
            <p>
              <a href={data.html_url} target="_blank">
                <img src={github} alt="" />
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
};

export default FetchUser