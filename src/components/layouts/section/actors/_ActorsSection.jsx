import React from "react";
import { reactSlickSettings } from "../../../../helpers/helpes";
import Slider from "react-slick";
import Actors from "../../../actors/Actors";

const _ActorsSection = ({ Popularactors }) => {
  return (
    <>
      <Slider {...reactSlickSettings}>
        {Popularactors?.map((item) => (
          <Actors actor={item} />
        ))}
      </Slider>
    </>
  );
};

export default _ActorsSection;
