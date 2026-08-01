function App() {
  return (
    <div className="min-h-screen bg-stone-800 items-center justify-center">

      <div className="">
          <div className="px-2 py-1 flex">
            <img src="/logo.png" alt="" className="w-14 h-14"/>
            <button className="ml-auto">
                <img src="/more.png" alt="" className="w-10 h-10 mr-2"/>
              </button>
          </div>
      </div>



      <div className="px-6 py-4">
          <h1 className="text-4xl font-semibold text-olive-300 mb-2 ">
            Lockers Club Atlas
          </h1>
          <p className="text-sm text-gray-400">Revisa la disponibilidad desde un solo lugar</p>
      </div>



      <div className="w-11/12 mx-auto py-2 mb-8 text-olive-400 font-bold">
        <div className="flex gap-2 ">
            <h4 className="p-2">Area 1</h4>
            <h4 className="bg-yellow-700 py-2 px-3 rounded-xl text-olive-200">Area 2</h4>
            <h4 className="p-2">Area 3</h4>
            <img src="/search.png" alt="" className="h-8 w-8 ml-auto mt-1" />
        </div>
      </div>

<div className="bg-olive-400 rounded-xl shadow-2xl p-1 text-center">
        <div className="grid grid-cols-7 gap-1 bg-olive-300 mt-4 rounded-xl">
          {/*Filas*/}
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 1</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-teal-900/90 py-4 text-xl text-olive-200 rounded-xl">1</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">8</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">9</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 2</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-stone-500/50 py-4 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">3</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">4</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">8</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">9</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 3</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-teal-900/90 py-4 text-xl text-olive-200 rounded-xl">1</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">5</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">6</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 4</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-teal-900/90 py-4 text-xl text-olive-200 rounded-xl">1</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">2</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">3</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 5</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-stone-500/50 py-4 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 6</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-teal-900/90 py-4 text-xl text-olive-200 rounded-xl">1</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">6</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">7</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">8</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">9</p>
            </div>
          </div>
          <div>
            <h3 className="my-2 font-bold text-sm uppercase">Fila 7</h3>
            <div className="bg-olive-500/20 p-1 rounded-xl"> 
                  <p className="bg-stone-500/50 py-4 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">4</p>
                  <p className="bg-teal-900/90 p-4 my-2 text-xl text-olive-200 rounded-xl">5</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
                  <p className="bg-stone-500/50 p-4 my-2 text-xl text-olive-200 rounded-xl">-</p>
            </div>
          </div>


        </div>

      </div> 






        {/*       <div className="bg-olive-400 rounded-xl shadow-2xl p-10 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-olive-500 text-white rounded-lg p-5 text-center">
            <p className="text-sm">Lockers</p>
            <p className="text-3xl font-bold">250</p>
          </div>

          <div className="bg-emerald-700 text-white rounded-lg p-5 text-center">
            <p className="text-sm">Disponibles</p>
            <p className="text-3xl font-bold">80</p>
          </div>

          <div className="bg-amber-700 text-white rounded-lg p-5 text-center">
            <p className="text-sm">Ocupados</p>
            <p className="text-3xl font-bold">165</p>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg p-5 text-center">
            <p className="text-sm">Mantenimiento</p>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>

        <button className="mt-8 w-full border-green-800 border-2 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition">
          Comenzar
        </button>
      </div> */}








    </div>
  );
}

export default App;