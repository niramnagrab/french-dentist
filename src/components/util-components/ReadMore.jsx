import React, { useState } from "react";

function ReadMore({ text, readMore, minWords = 500 }) {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div>
      <p className="p-text text-justify">
        {viewMore ? text[0] : text[0].substring(0, minWords)}
        <br></br>
        <br />
        {viewMore && text[1]}
      </p>
      <div className="webbtn " onClick={() => setViewMore(!viewMore)}>
        {readMore}
      </div>
    </div>
  );
}

export default ReadMore;
