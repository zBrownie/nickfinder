import React from "react";
import { Item, useNamesStore } from "../../../store/names";
import { RiResetLeftFill } from "react-icons/ri";
import { useTheme } from "../../../hooks";
export const ListOfNames = ({ items }: { items: Item[] }) => {
  const { darkMode } = useTheme();
  const { clearItems } = useNamesStore();
  const [notification, setNotification] = React.useState<{
    message: string;
    visible: boolean;
  }>({
    message: "",
    visible: false,
  });
  const handleCopyApelido = async (apelido: string) => {
    try {
      await navigator.clipboard.writeText(apelido);
      setNotification({
        message: `"${apelido}" copiado para a área de transferência!`,
        visible: true,
      });

      setTimeout(() => {
        setNotification({ message: "", visible: false });
      }, 3000);
    } catch (error) {
      console.error("Erro ao copiar:", error);
      setNotification({ message: "Erro ao copiar o apelido.", visible: true });

      setTimeout(() => {
        setNotification({ message: "", visible: false });
      }, 3000);
    }
  };

  const handleReset = () => {
    clearItems();
  };
  return (
    <div className="max-w-4xl mx-auto">
      {notification.visible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            {notification.message}
          </div>
        </div>
      )}

      <button
        name="reset"
        aria-label="Reset List of Items"
        onClick={handleReset}
        className="fixed bottom-4 right-4 p-4 text-white rounded-full shadow-lg hover:opacity-70 transition-colors cursor-pointer"
      >
        <RiResetLeftFill size={24} color={darkMode ? "#fafafa" : "#333333"} />
      </button>
      {/* <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Apelidos Sugeridos
      </h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCopyApelido(item.apelido)}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {item.apelido}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {item.explicação}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
