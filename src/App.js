
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Route/Routes';


function App() {
  return (
    <div className="max-w-[1980px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }} >

      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
