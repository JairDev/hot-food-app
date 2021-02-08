import React from "react";

const SelectOption = ({ onChange, value }) => {
  return (
    <div className="content-qty ml-2">
      <form action="">
        <select className="bg-bgSelect font-semibold" onChange={onChange} name="" id="" value={value}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    </div>
  );
};

export default SelectOption;
