export const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-sm text-white flex justify-between px-10 py-10">
      <p>
        &copy; {new Date().getFullYear()} Plataforma de Cursos. Todos os
        direitos reservados.
      </p>
      <p>Desenvolvido por B4F TechZone</p>
    </footer>
  );
};
