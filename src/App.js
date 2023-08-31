import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Route';

function App() {
  return (
    <div>
      {/* style={{ backgroundColor: 'rgb(212,175,55)' }} */}
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  );
}

export default App;
