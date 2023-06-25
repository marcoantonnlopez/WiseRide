
function InputBusqueda() {
    return (
      <div className="flex items-center border border-gray-300 rounded-md formsContainer">
        
        <form action="result.tsx" method="post" className="inpContainer">
        {/* <form onSubmit={handleSubmit} className="inpContainer"> */}
            
        <input 
          className="w-full py-2 pl-2 pr-10 inp btnSpecial1" 
          type="text" 
          placeholder="Where are you leaving from?"
          style={{color: 'black', zIndex: 0}} // Aquí es donde se añade 'color: 'black''
        />
        <br />
        <input 
          className="w-full py-2 pl-2 pr-10 inp btnSpecial2" 
          type="text" 
          placeholder="Where do you want to go?"
          style={{color: 'black', zIndex: 0}} // Aquí es donde se añade 'color: 'black''
        />
        <br />
        {/* <input type="submit" value="Enviar"> */}

        <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 main_boton btnSpecial3" style={{zIndex: 1}}>
          Go
        </button>
        {/* </input> */}

        </form>
      </div>
    )
  }
  
  export default InputBusqueda;
  