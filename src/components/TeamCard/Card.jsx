/* eslint-disable react/prop-types */
import { TeamCard } from './index';

export const Card = ({ src = '', Name, Subtitle }) => (
  <TeamCard.Container>
    <TeamCard.ContainerImage>
      <TeamCard.Image src={src} alt='imagen do integrante da equipe' />
    </TeamCard.ContainerImage>

    <TeamCard.ContainerInfos>
      <TeamCard.Title>{Name}</TeamCard.Title>

      <TeamCard.Subtitle>{Subtitle}</TeamCard.Subtitle>
    </TeamCard.ContainerInfos>
  </TeamCard.Container>
);
