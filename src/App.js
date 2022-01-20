import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import FieldOfExp from './pages/FieldOfExp';
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/DinahWorld-Portfolio' element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
