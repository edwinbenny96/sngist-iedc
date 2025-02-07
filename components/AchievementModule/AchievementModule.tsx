import React from "react";
import { MdDateRange } from "react-icons/md";

type Props = {
  name: string;
  description: string;
  date: string;
};

const AchievementModule = (props: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="card-actions border-t-2 w-full pt-5 justify-center flex items-center">
        <MdDateRange />{props.date}
        </div>
      </div>
    </div>
  );
};

export default AchievementModule;
