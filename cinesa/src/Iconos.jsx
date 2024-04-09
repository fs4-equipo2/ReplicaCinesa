import React from "react";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronUp } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { mdiFilterVariant } from "@mdi/js";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";


function Iconos() {
  return (
    <div>
      <h3>Flechas</h3>
      <div>
        <Icon path={mdiChevronUp} size={5} />
        <Icon path={mdiChevronRight} size={5} />
        <Icon path={mdiChevronLeft} size={5} />
      </div>
      <hr />
      <h3>Filter</h3>
      <Icon path={mdiFilterVariant} size={5} />
      <hr />
      <div>
        <h3>Ubicacion y Buscador</h3>
        <GrLocation style={{ fontSize: "65px" }} />
        <FaSearch style={{ fontSize: "65px" }} />
      </div>
      <hr />
      <div>
        <h3>Redes Sociales</h3>
        <SocialIcon
          url="https://facebook.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />
        <SocialIcon
          url="https://twitter.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />
        <SocialIcon
          url="https://instagram.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />
        <SocialIcon
          url="https://linkedin.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />
        <SocialIcon
          url="https://tiktok.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />
        <SocialIcon
          url="https://youtube.com"
          bgColor="white"
          fgColor="transparent"
          style={{ width: "70px", height: "70px" }}
        />

      </div>
    </div>
  );
}

export default Iconos;
