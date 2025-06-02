import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const ContactPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <form>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-cyan-700">
                  Contacte-nos
                </h1>
                <p className="py-6">
                  Precisa de ajuda? Entre em contacto connosco e responderemos o
                  mais.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Nome</label>
                    <input type="text" className="input" placeholder="Nome" />
                    <label className="label">Assunto</label>
                    <input
                      type="texts"
                      className="input"
                      placeholder="Assunto"
                    />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Messagem</label>
                    <textarea
                      className="textarea"
                      placeholder="Mensagem"
                    ></textarea>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-cyan-900 text-white mt-4">
                      Enviar
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};
