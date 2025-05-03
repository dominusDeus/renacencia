import React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
}

const ResourceCard = ({ title, description }: ResourceCardProps) => {
  return (
    <div className="rounded-md bg-white opacity-100 p-4 md:p-[18px] relative z-30 md:w-[250px] col-span-1">
      <h3 className="font-montserrat font-bold pb-2 md:text-[22px]">{title}</h3>
      <p className="font-opensans text-[13px] md:text-[14px] leading-5">
        {description}
      </p>
    </div>
  );
};
export default ResourceCard;
