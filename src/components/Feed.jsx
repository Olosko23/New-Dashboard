import React, { useState, useEffect } from "react";
import dotenv from 'dotenv';

const Feed = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  dotenv.config();

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.articles)
        console.log(data.articles)
        setLoading(false)
      });
  }, [url]);

  return (
    <div className="gap-2 py-4 px-4 mb-10">
      {loading ? (
        <div>
          <span>Loading....</span>
          <span>Loading....</span>
          <span>Loading....</span>
          <span>Loading....</span>
          <span>Loading....</span>
          <span>Loading....</span>
        </div>
      ) : (
        <div className="py-3 px-2">
          {items > 0 && (
            <ul className="w-full h-fit">
              {items.map((item) => (
                <li key={item.id} className="rounded-md border shadow-md px-1 py-1">
                  <div>
                    <div>
                      <img src={item.urlToImage} alt={item.title} />
                    </div>
                    <div>
                      <div>
                        <span>{item.souce.name}</span>
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                      <div>
                        <p>{item.description}</p>
                      </div>
                      <div>
                        <small>
                          {" "}
                          Published at: {item.publishedAt.toLocal()}
                        </small>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
