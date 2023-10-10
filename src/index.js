import  React from "react";
import ReactDom from 
'react-dom/client';

import App from  "./App";
import { LightProvider } from "./context/Context";

ReactDom.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <LightProvider>
  <App/>
  </LightProvider>
</React.StrictMode>
);

