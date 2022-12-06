import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height, width, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

interface BoxFormInterface {
  id?: string;
  width: string | number;
  height: string | number;
  backgroundColor: string;
}

function NewBoxForm({ createBox }: { createBox: Function; }) {
  const [formData, setFormData] = useState<BoxFormInterface>({
    height: "",
    width: "",
    backgroundColor: "",
  });

  console.log("NewBoxForm", formData)
  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value }: { name: string; value: string; } = evt.target;
    setFormData((formData: BoxFormInterface) : BoxFormInterface => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newBox-height">Height</label>
            <input
                id="newBox-height"
                onChange={handleChange}
                name="height"
                value={formData.height}
            />
          </div>
          <div>
            <label htmlFor="newBox-width">Width</label>
            <input
                id="newBox-width"
                onChange={handleChange}
                name="width"
                value={formData.width}
            />
          </div>
          <div>
            <label htmlFor="newBox-backgroundColor">Background Color</label>
            <input
                id="newBox-backgroundColor"
                onChange={handleChange}
                name="backgroundColor"
                value={formData.backgroundColor}
            />
          </div>
          <button className="NewBoxForm-addBtn">Add a new box!</button>
        </form>
      </div>
  );
}

export default NewBoxForm;
