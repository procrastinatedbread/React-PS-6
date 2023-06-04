import { useState, useEffect } from "react";
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/getvideo") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: {
              title: "The Power of Habit",
              thumbnail: "https://picsum.photos/250/130",
              views: 1000000,
              likes: 50000
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Video not found."
        });
      }
    }, 2000);
  });
};

const NinthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [visible, setVisible] = useState(false);
  const url = "https://example.com/api/getvideo";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.videos);
    };
    innerFunction();
  }, []);
  const handleClick = () => {
    setVisible(true);
    setUsersData((prev) => ({ ...prev, label: "self motivational" }));
  };

  return (
    <>
      <img src={usersData.thumbnail} alt="tasveer" />
      <h1>{usersData.title}</h1>
      <p>Views: {usersData.views}</p>
      <p>Likes: {usersData.likes}</p>
      {visible && <p>Label: {usersData.label}</p>}
      <button onClick={handleClick}>Add Label</button>
    </>
  );
};
export default NinthComponent;
