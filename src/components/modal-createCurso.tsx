
export const Modal=()=>{
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-cyan-700"> Criar Curso</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Título do Curso</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Digite o título do curso"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Descrição</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Digite a descrição do curso"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Duração</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Digite Duração do curso (em horas)"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nível</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Nível de dificuldade do curso (Iniciante, Intermediário, Avançado)"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Idioma</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Idioma do curso"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Regime do curso</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Regime do curso"
            ></input>
          </div>
          <div className="flex justify-end"></div>
          <div className="flex justify-end">
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
            >
              Criar Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

 
