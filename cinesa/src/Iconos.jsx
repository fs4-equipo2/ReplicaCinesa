import React from "react";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronUp } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { mdiFilterVariant } from "@mdi/js";
import { GrLocation } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";
import { mdiChevronDown } from '@mdi/js';


function Iconos() {
  return (
    <div>
<img src={"https://www.cinesa.es/media/rynf4t5q/logo-cinesa-blanco.png"} alt="Logo Cinesa" style={{ width: "597px", height: "126px" }}/>
<hr />
      <h3>Flechas</h3>
      <div>
        <Icon path={mdiChevronUp} size={5} />
        <Icon path={mdiChevronDown} size={5} color="#2bb1ff" />
        <Icon path={mdiChevronRight} size={5} color="#2bb1ff"  />
        <Icon path={mdiChevronLeft} size={5} />
      </div>
      <hr />
      <h3>Filter</h3>
      <Icon path={mdiFilterVariant} size={5} />
      <hr />
      <div>
        <h3>Ubicacion y Buscador</h3>
        <GrLocation style={{ fontSize: "65px" }} />
        < HiMagnifyingGlass style={{ fontSize: "65px" }} />
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
