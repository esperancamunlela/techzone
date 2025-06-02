import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-5 bg-slate-100">
        <section className="flex h-[400px] overflow-hidden">
          <div className="w-2/5">
            <img src="/img/techzone-img.jpg" alt="" />
          </div>
          <div className="p-10">
            <p>Bem-vindo à nossa plataforma de cursos!</p>
            <p>Explore nossos cursos e aprenda algo novo hoje mesmo.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
