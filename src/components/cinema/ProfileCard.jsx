import React from "react";
import "../../scss/ProfileCard.scss"; 
import { Title } from "../title/component";
import { Descriptions } from "../discriptions/descriptions";

const ProfileCard = ({ cinema }) => {
  const { title, description } = cinema;

  return (
    <div className="metal-card my-5">
      <Title title={title} />
      <Descriptions description={description} />
    </div>
  );
};

export default ProfileCard;
