
import { createContext, useContext } from "react"; 



const lightContext =createContext();

const LightProvider=({children})=>{

return<lightContext.Provider value={{}}>{children}</lightContext.Provider>


};
const UseLightGlobalContext = () =>{
return useContext(lightContext);
}


export {lightContext,LightProvider,UseLightGlobalContext}