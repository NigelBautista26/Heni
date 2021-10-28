import React, { useRef, useEffect, useState } from "react";
import NoImages from "./NoImages";
import Image from "./Image";

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const Gallery = props => {
  const results = props.data;
  const [noImagesBool, setNoImagesBool] = useState(false);
  const previousNoImagesBool = usePrevious(noImagesBool);
  let images;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    if (noImagesBool) {
      setNoImagesBool(false);
    }
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } 
  if (results.length === 0) {
    if (!noImagesBool) {
      setNoImagesBool(true);
    }
  }
  return (
    <div>
      <ul>{images}</ul>
      {(results.length === 0 || previousNoImagesBool) && <NoImages />}
    </div>
  );
};

export default Gallery;
