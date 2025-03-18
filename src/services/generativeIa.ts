import { GoogleGenerativeAI } from "@google/generative-ai";
import { GenNickFormProps } from "../pages/Home/Home.types";

const apiKey = import.meta.env.VITE_GEN_IA_KEY;
const genModel = import.meta.env.VITE_GEN_IA_MODEL;
const envPrompt = atob(import.meta.env.VITE_GEN_IA_PROMPT as string);
const genAI = new GoogleGenerativeAI(apiKey);

export async function generateContent(nickProps: GenNickFormProps) {
  try {
    const model = genAI.getGenerativeModel({ model: genModel });

    envPrompt
      .replace("vTema", nickProps.vTema)
      .replace("vNome", nickProps?.vNome || "")
      .replace("vDetalhes", nickProps?.vDetalhes || "")
      .replace("vGenero", nickProps.vGenero || "Masculino e Feminino");

    const result = await model.generateContent(envPrompt);

    const response = await result.response;
    const text = response.text();

    const jsonRegex = /```json([\s\S]*?)```/;
    const jsonMatch = text.match(jsonRegex);

    if (jsonMatch && jsonMatch[1]) {
      const jsonString = jsonMatch[1].trim();
      const jsonData = JSON.parse(jsonString);
      return jsonData.apelidos;
    }

    return [];
  } catch (error) {
    console.error("Erro ao gerar conteúdo:", error);
    throw error;
  }
}
