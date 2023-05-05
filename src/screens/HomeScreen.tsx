import React, { useContext, useState } from "react";
import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";
import { StyleContext } from "../store/StyleContext";
import DataContainer from "../components/HomeScreen/DataContainer";
import ShowRecipesBtn from "../components/HomeScreen/ShowRecipesBtn";
import Recipes from "../components/HomeScreen/Recipes";
import PrintRecipe from "../components/HomeScreen/PrintRecipe";

const HomeScreen = () => {
  const { isPhone } = useContext(StyleContext);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((current) => !current);
  };

  return (
    <RootContainer>
      <InnerContainer>
        <DataContainer>
          {isPhone && <ShowRecipesBtn showModal={modalHandler} />}
          <Recipes status={modal} closeModal={modalHandler} />
          <PrintRecipe />
        </DataContainer>
      </InnerContainer>
    </RootContainer>
  );
};

export default HomeScreen;
