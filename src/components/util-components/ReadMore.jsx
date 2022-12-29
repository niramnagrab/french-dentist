import React, { useState } from "react";

function ReadMore({
  text,
  readMore,
  seeLess,
  isDrLouis = false,
  minWords = 500
}) {
  let indexOfDotAfter500 = text[0].substring(minWords).indexOf(".");
  const [viewMore, setViewMore] = useState(false);
  return (
    <div>
      <p className="p-text text-justify">
        {viewMore
          ? text[0]
          : `${text[0].substring(
              0,
              minWords + (isDrLouis ? indexOfDotAfter500 : 0)
            )}...`}
        <br></br>
        <br />
        {viewMore && text[1] && text[1]}
      </p>
      <div className="read-more" onClick={() => setViewMore(!viewMore)}>
        {viewMore ? seeLess : readMore}
      </div>
    </div>
  );
}

export default ReadMore;
