import { BiMaleFemale } from "react-icons/bi";
import { FaFemale, FaMale } from "react-icons/fa";

export const GenderSelection = () => {
  return (
    <div className="flex justify-between space-x-4 mb-6">
      {/* Radio button para Masculino */}
      <label className="flex flex-col items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 text-white p-4 rounded-lg w-full transition duration-300 bg-blue-500 dark:bg-blue-600 cursor-pointer peer-checked:bg-blue-700">
        <input
          type="radio"
          name="vGenero"
          id="vGenero"
          value="male"
          className="hidden peer"
        />
        <FaMale size={32} className="text-white" />
        {/* <span className="mt-2 text-sm">Masculino</span> */}
      </label>

      {/* Radio button para Feminino */}
      <label className="flex flex-col items-center justify-center hover:bg-pink-600 dark:hover:bg-pink-700 text-white p-4 rounded-lg w-full transition duration-300 bg-pink-500 dark:bg-pink-600 cursor-pointer peer-checked:bg-pink-700">
        <input
          type="radio"
          name="vGenero"
          id="vGenero"
          value="female"
          className="hidden peer"
        />
        <FaFemale size={32} className="text-white" />
        {/* <span className="mt-2 text-sm">Feminino</span> */}
      </label>

      {/* Radio button para Outro */}
      <label className="flex flex-col items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-700 text-white p-4 rounded-lg w-full transition duration-300 bg-purple-500 dark:bg-purple-600 cursor-pointer peer-checked:bg-purple-700">
        <input
          type="radio"
          name="vGenero"
          id="vGenero"
          value="other"
          className="hidden peer"
        />
        <BiMaleFemale size={32} className="text-white" />
        {/* <span className="mt-2 text-sm">Outro</span> */}
      </label>
    </div>
  );
};

export const ThemeSelection = () => {
  return (
    <div className="mb-4">
      <label
        htmlFor="vTema"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Tema
      </label>
      <input
        required
        placeholder="Senhor dos aneis, Star Wars, Orc, Elf..."
        type="text"
        id="vTema"
        name="vTema"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export const NameSelection = () => {
  return (
    <div className="mb-4">
      <label
        htmlFor="vNome"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Seu Nome
      </label>
      <input
        type="text"
        id="vNome"
        name="vNome"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 cursor-pointer"
    >
      Gerar
    </button>
  );
};

export const DropdownList = () => {
  const optionsList = [
    {
      id: "undefined",
      value: "Escolha uma opção",
      description: "",
    },
    {
      id: "Misterioso",
      value: "Misterioso",
      description:
        "Quero um apelido que soe enigmático e sombrio. Algo que evoque suspense e segredos.",
    },
    {
      id: "Poderoso",
      value: "Poderoso",
      description:
        "Preciso de um apelido que transmita força e dominação. Um nome que inspire respeito e temor.",
    },
    {
      id: "Engraçado",
      value: "Engraçado",
      description:
        "Quero um apelido divertido e bem-humorado. Algo que faça as pessoas rirem.",
    },
    {
      id: "Épico",
      value: "Épico",
      description:
        "Quero um apelido grandioso e heroico. Um nome que soe como o de um lendário guerreiro.",
    },
    {
      id: "Sutil",
      value: "Sutil",
      description:
        "Quero um apelido discreto e elegante. Algo que seja simples, mas memorável.",
    },
    {
      id: "Ameaçador",
      value: "Ameaçador",
      description:
        "Quero um apelido que intimide meus adversários. Algo que demonstre perigo e poder.",
    },
    {
      id: "Mágico",
      value: "Mágico",
      description:
        "Quero um apelido que remeta a magia e fantasia. Algo que soe místico e encantado.",
    },
  ];
  return (
    <div className="mb-4">
      <label
        htmlFor="vDetalhes"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Selecione uma característica
      </label>
      <select
        id="vDetalhes"
        name="vDetalhes"
        defaultValue="undefined"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      >
        {optionsList.map((option) => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
