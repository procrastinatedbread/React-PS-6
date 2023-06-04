import { useState, useEffect } from "react";
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profile: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer",
              followers: 450,
              followedBy: 400
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Profile not found."
        });
      }
    }, 2000);
  });
};

const TenthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const url = "https://example.com/api/profile";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.profile);
    };
    innerFunction();
  }, []);
  const handleClick = () => {
    setButtonDisabled(true);
    setUsersData((prev) => ({ ...prev, followers: prev.followers + 1 }));
  };

  return (
    <>
      <h1>{usersData.name}</h1>
      <p>Age: {usersData.age}</p>
      <p>Gender: {usersData.gender}</p>
      <p>Email: {usersData.email}</p>
      <p>Occupation: {usersData.occupation}</p>
      <p>Followers: {usersData.followers}</p>
      <p>Followed By: {usersData.followedBy}</p>
      <button onClick={handleClick} disabled={buttonDisabled}>
        Follow John
      </button>
    </>
  );
};
export default TenthComponent;
