import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

interface BoxInterface {
  id: string;
  width: string | number;
  height: string | number;
  backgroundColor: string;
}

function BoxList() {
  const [boxes, setBoxes] = useState<Array<BoxInterface>>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface): void {
    setBoxes((boxes: Array<BoxInterface>): Array<BoxInterface> => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string): void {
    setBoxes((boxes: Array<BoxInterface>): Array<BoxInterface> => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }: BoxInterface) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
