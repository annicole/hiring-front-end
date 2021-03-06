import React from "react";
import Tag from "../utils/Tag";

export default function RowLanguage({
  language,
  value,
  selectedTrack,
  onTrackChange,
  icon,
  slug,
}) {
  return (
    <li key={language}>
      <button
        className={`${
          selectedTrack === slug ? "bg-slate-100" : ""
        } flex flex-row justify-between items-center w-full px-3 py-2 hover:bg-gray-100`}
        onClick={() => onTrackChange(slug)}
      >
        <input
          id="country-option-1"
          type="radio"
          name="countries"
          value="USA"
          checked={selectedTrack === slug}
          readOnly={true}
          className="w-6 h-6 m-3 p-2 bg-gray-100 rounded-full border-gray-300 checked:bg-black "
        ></input>
        <span className="flex flex-row items-center w-full">
          <img className="mx-3 w-8 h-8" src={icon} />
          <span className="text-base font-medium not-italic">{language} </span>
        </span>
        <Tag number={value} />
      </button>
    </li>
  );
}
