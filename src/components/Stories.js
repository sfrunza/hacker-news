import React from "react";
import Story from "./Story";

const Stories = ({ hits }) => {
  return (
    <div className="results">
      {hits.map((story) => (
        <Story story={story} key={story.objectID} />
      ))}
    </div>
  );
};

export default Stories;
