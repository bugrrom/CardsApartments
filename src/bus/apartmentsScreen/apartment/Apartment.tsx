import React, { FC, useState } from "react";
import { InfoBlock } from "../../../elements/Title/InfoBlock";
import {
  Container,
  Images,
  InfoCard,
  Like,
  UnLike,
  Wrapper,
} from "./ApartmentStyle";

type typeProps = {
  attr: any;
  rel: any;
};

export const Apartment: FC<typeProps> = ({ attr, rel }: typeProps) => {
  const [like, setLike] = useState(false);
  const likes = () => {
    setLike(!like);
  };
  return (
    <Container>
      <Wrapper>
        <Images></Images>
        {like ? (
          <Like onClick={likes}>Like</Like>
        ) : (
          <UnLike onClick={likes}>Like</UnLike>
        )}
      </Wrapper>
      <InfoCard>
        <InfoBlock name="title" text={attr.title} />
        <InfoBlock name="default" text={attr.rooms} title="Комнат:" />
        <InfoBlock
          name="default"
          text={`${attr.address.city} ${attr.address.street} ${attr.address.house} ${attr.address.room}`}
          title="Адрес:"
        />
        <InfoBlock
          name="default"
          text={`${attr.area} ${attr.unit}`}
          title="Площадь:"
        />
        <InfoBlock
          name="default"
          text={`${rel.attributes.first_name} ${rel.attributes.last_name} ${rel.attributes.middle_name}`}
        />
        <InfoBlock name="default" text="$220" title="Цена:" />
      </InfoCard>
    </Container>
  );
};
