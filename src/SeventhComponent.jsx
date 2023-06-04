import { useState, useEffect } from "react";
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/projects") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            projects: [
              {
                title: "E-commerce Website",
                description:
                  "A fully functional e-commerce website with shopping cart and checkout functionality.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                completed: "false"
              },
              {
                title: "Weather App",
                description:
                  "A web application that displays the current weather and forecast for a given location.",
                technologies: ["React", "Node.js", "OpenWeatherMap API"],
                completed: "true"
              },
              {
                title: "Task Manager",
                description:
                  "A web application that allows users to create, manage and track tasks.",
                technologies: ["Vue.js", "Firebase"],
                completed: "false"
              },
              {
                title: "Blog Website",
                description:
                  "A blog website that allows users to create, read, update and delete blog posts.",
                technologies: ["React JS", "MongoDB"],
                completed: "true"
              },
              {
                title: "Mobile Game",
                description:
                  "A mobile game developed for iOS and Android platforms.",
                technologies: ["Unity", "C#"],
                completed: "false"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Projects not found."
        });
      }
    }, 2000);
  });
};

const SeventhComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [selected, setSelected] = useState(null);
  const url = "https://example.com/api/projects";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.projects);
    };
    innerFunction();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      {usersData.map((item, index) => {
        return (
          <>
            <p>
              <b>Name:</b>
              {item.title}
            </p>
            <p>
              <b>Description:</b>
              {item.description}
            </p>
            <button
              onClick={() => {
                setSelected(item);
              }}
            >
              Show Details
            </button>
          </>
        );
      })}
      {selected && (
        <>
          <h1>Project Details</h1>
          <p>
            <b>Name:</b>
            {selected.title}
          </p>
          <p>
            <b>Description:</b>
            {selected.description}
          </p>
          <p>
            <b>Technologies:</b>
            {selected.technologies}
          </p>
          <p>
            <b>Completed:</b>
            {selected.completed}
          </p>
        </>
      )}
    </>
  );
};
export default SeventhComponent;
