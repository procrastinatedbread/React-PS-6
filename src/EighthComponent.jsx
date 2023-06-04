import { useState, useEffect } from "react";
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profiles: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "User Profile not found."
        });
      }
    }, 2000);
  });
};

const EighthComponent = () => {
  const [usersData, setUsersData] = useState({});
  const url = "https://example.com/api/profile";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.profiles);
    };
    innerFunction();
  }, []);
  const handleClick = (name) => {
    const newName = "Nikhil";
    setUsersData((prev) => ({ ...prev, name: newName }));
  };

  return (
    <>
      <h1>Profiles</h1>
      {
        <>
          <p>
            <b>Name: </b>
            {usersData.name}
          </p>
          <p>
            <b>Age: </b>
            {usersData.age}
          </p>
          <p>
            <b>Gender: </b>
            {usersData.gender}
          </p>
          <p>
            <b>Email: </b>
            {usersData.email}
          </p>
          <p>
            <b>Occupation: </b>
            {usersData.occupation}
          </p>
          <button onClick={handleClick}>Update name</button>
        </>
      }
    </>
  );
};
export default EighthComponent;
