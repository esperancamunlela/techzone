import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-700 via-cyan-800 to-blue-950 flex flex-col gap-2 items-center justify-center h-screen text-white">
      <h1 className="font-bold text-2xl">Ops... Parece que você se perdeu.</h1>
      <Link
        to="/"
        className="px-2 py-1 bg-white text-cyan-800 runded-md text-sm"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};
