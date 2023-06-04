import { useState, useEffect } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/posts") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            posts: [
              {
                caption: "Delicious chocolate cake recipe",
                src: "https://picsum.photos/300/301",
                views: 1000,
                likes: 100,
                category: "Bakery"
              },
              {
                caption: "5-minute breakfast ideas",
                src: "https://picsum.photos/300/300",
                views: 500,
                likes: 50,
                category: "Food"
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: "https://picsum.photos/300/302",
                views: 2000,
                likes: 200,
                category: "Bakery"
              },
              {
                caption: "10 DIY home decor ideas",
                src: "https://picsum.photos/300/303",
                views: 100,
                likes: 10,
                category: "DIY"
              },
              {
                caption: "Healthy snacks for work",
                src: "https://picsum.photos/300/304",
                views: 300,
                likes: 30,
                category: "Food"
              },
              {
                caption: "How to make sourdough bread at home",
                src: "https://picsum.photos/300/305",
                views: 1500,
                likes: 150,
                category: "Bakery"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Post not found."
        });
      }
    }, 2000);
  });
};

const FifthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const url = "https://example.com/api/posts";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.posts);
    };
    innerFunction();
  }, []);

  return (
    <>
      {usersData.map(({ caption, src, views, likes, category }) => {
        return (
          <>
            <img src={src} alt="tasveer" />
            <h3>{caption}</h3>
            <p>Views:{views}</p>
            <p>Likes:{likes}</p>
          </>
        );
      })}
      <button
        onClick={() => {
          setUsersData(
            usersData.filter(({ category }) => category === "Bakery")
          );
        }}
      >
        Show Bakery
      </button>
    </>
  );
};
export default FifthComponent;
