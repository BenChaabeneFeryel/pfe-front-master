import React from "react";
import { BsFillCalendarDateFill, BsTrashFill, BsTools } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaMapMarkedAlt} from "react-icons/fa";

export const LinkResponsableEtablissement = [
    {id: 1, name: "Dashboard",path:"/responsable-etablissement", icon: <ImStatsDots/>},
    {id: 2, name: "Map",path:"/responsable-etablissement/map", icon: <FaMapMarkedAlt/>},
    {id: 3, name: "Poubelles",path:"/responsable-etablissement/poubelle", icon: <BsTrashFill/>},
    {id: 4, name: "Pannes Poubelles",path:"/responsable-etablissement/panne-poubelle", icon: <BsTools/>},  
  ];