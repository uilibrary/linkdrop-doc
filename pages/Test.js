import React from "react";
import { Collapse } from "react-collapse";

const Test = () => {
  return (
    <div>
      <Collapse isOpened={true}>
        <div>Random content</div>
      </Collapse>
    </div>
  );
};

export default Test;
