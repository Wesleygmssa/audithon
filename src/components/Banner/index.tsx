import React from "react";
import { Container } from "./styles";
import bannerPrincipalImg from '../../assets/BannerPrincipal2.png';

export const Banner = () => {
  return (
     <Container>
         <img src={bannerPrincipalImg} alt=""/>
         <div>
            <h1>AuditHom soluções auditivas</h1>
            <h3> Com você em todos os tons da vida</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, rem delectus. 
            Quasi sed delectus exercitationem sapiente unde voluptatem saepe consectetur totam assumenda rem corrupti odit, 
            ex culpa corporis. Non, voluptatibus.</p> 
            */}
         </div>
     </Container>
  );
};
