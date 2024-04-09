import React from "react";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronUp } from "@mdi/js";
import { mdiFilterVariant } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { GrLocation } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";
import { FaLinkedin } from "react-icons/fa";

function Iconos() {
  return (
    <div>
      <h3>Flechas</h3>
      <div>
        <Icon path={mdiChevronUp} size={5} />
        <Icon path={mdiChevronRight} size={5} />
        <Icon path={mdiChevronLeft} size={5} />
      </div>
      <hr></hr>
      <h3>Filter</h3>
      <Icon path={mdiFilterVariant} size={5} />
      <hr></hr>
      <div>
        <h3>Ubicacion y Buscador</h3>
        <GrLocation style={{ fontSize: "65px" }} />
        <FaMagnifyingGlass style={{ fontSize: "65px" }} />
      </div>
      <hr></hr>
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
