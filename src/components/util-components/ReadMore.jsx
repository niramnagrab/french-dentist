import React, { useState } from "react";

function ReadMore({ text, readMore, seeLess, minWords = 400, paraNo ,viewMore}) {
  let x = minWords
  if (paraNo === '1st') {
    x = 569
  } else if (paraNo === '2nd') {
    x = 595
  } else if (paraNo === '3rd') {
    x = 524
  }

  return (
    <div className="parent-container-read-more">
      <p className="p-text text-justify">
        {viewMore ? text[0] : text[0].substring(0, x)}
        <br></br>
        <br />
        {viewMore && text[1] && text[1]}
      </p>
    </div>
  );
}

export default ReadMore;
