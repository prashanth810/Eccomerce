import './App.css'
import Approuter from './routes/AppRouter';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Approuter />
      <Toaster
        position="top-right"   // 👈 shows toast in center top
        reverseOrder={false}
      />
    </>
  )
}

export default App
