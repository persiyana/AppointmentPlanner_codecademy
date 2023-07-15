import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
      </select>
    </>
  );
};