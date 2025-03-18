import React from "react";
import { generateContent } from "../../services/generativeIa";
import {
  SkeletonThemeSelection,
  SkeletonDropdownList,
  SkeletonGenderSelection,
  SkeletonNameSelection,
  SkeletonSubmitButton,
} from "./components/LoadingForm";
import {
  ThemeSelection,
  DropdownList,
  GenderSelection,
  NameSelection,
  SubmitButton,
} from "./components/FormFields";
import { GenNickFormProps } from "./Home.types";
import { useNamesStore } from "../../store/names";
import { ListOfNames } from "./components/ListOfNames";

export const Home = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { items, addItem, clearItems } = useNamesStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget);

    const fieldNames = ["vNome", "vGenero", "vTema", "vDetalhes"];

    const promptData: GenNickFormProps = {
      vNome: "",
      vGenero: "",
      vTema: "",
      vDetalhes: "",
    };

    fieldNames.forEach((fieldName) => {
      const fieldValue = form.get(fieldName);
      if (fieldValue && fieldValue !== "undefined") {
        promptData[fieldName as keyof GenNickFormProps] = fieldValue as string;
      }
    });

    try {
      const result = await generateContent(promptData);
      console.log("🚀 ~ handleSubmit ~ result:", result);
      addItem(result);
    } catch (error) {
      console.error("��� ~ handleSubmit ~ error:", error);
      clearItems();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 flex items-center justify-center  ${
        items.length ? "min-h-screen" : "h-[calc(100dvh-64px)]"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full ${
          items.length ? "" : "max-w-md"
        }`}
      >
        <form onSubmit={handleSubmit}>
          {/* <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Selecione seu Gênero
          </h1> */}

          {isLoading && (
            <>
              <SkeletonThemeSelection />
              <SkeletonNameSelection />
              <SkeletonGenderSelection />
              <SkeletonDropdownList />
              <SkeletonSubmitButton />
            </>
          )}
          {!isLoading && !items.length && (
            <>
              <ThemeSelection />
              <NameSelection />
              <GenderSelection />
              <DropdownList />
              <SubmitButton />
            </>
          )}
        </form>
        {!isLoading && !!items.length && <ListOfNames items={items} />}
      </div>
    </div>
  );
};
