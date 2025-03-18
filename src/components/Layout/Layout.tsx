import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Helmet } from "react-helmet";

export const Layout = (): React.JSX.Element => {
  return (
    <div>
      <Helmet>
        <title>Gerador de Nick</title>
        <meta
          name="description"
          content="O Nickname Forge é um aplicativo inovador que utiliza o poder do Gemini, o modelo de linguagem avançado do Google, para gerar nicknames criativos e personalizados para jogos. Cansado de usar nomes genéricos ou ter dificuldade em encontrar um nickname único? O Nickname Forge te ajuda a criar nomes que refletem sua personalidade e estilo de jogo."
        />
      </Helmet>
      <Navbar />
      <Outlet />
    </div>
  );
};
