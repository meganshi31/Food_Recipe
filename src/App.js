import logo from './logo.svg';
import './App.css';
import Meal from './Components/Meal';
import './Components/Style.css';
import Mealitem from './Components/Mealitem';
import { Route,Routes,BrowserRouter,Link } from 'react-router-dom';
import Recipeindex from './Components/Recipeindex';
import Recipeinfo from './Components/Recipeinfo';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Meal/>}/>
    <Route path='/:  info' element={<Recipeinfo/>}/>
    </Routes>
    </>
  );
}

export default App;
