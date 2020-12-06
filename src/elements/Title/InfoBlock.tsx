import React, { FC } from "react";
import { PDefault, PTitle, Span, TitleD } from "./InfoBlockStyle";

type typeProps = {
  name: string;
  text: string;
  title?: string;
};

export const InfoBlock: FC<typeProps> = ({ name, text, title }: typeProps) => {
  if (name === "title") {
    return <PTitle>{text}</PTitle>;
  } else if (name === "default") {
    return (
      <Span>
        <TitleD>{title}</TitleD>
        <PDefault>{text}</PDefault>
      </Span>
    );
  }
  return <PDefault />;
};
