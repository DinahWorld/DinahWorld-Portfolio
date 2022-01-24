import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeFooter from './components/HomeFooter';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import FieldOfExp from './pages/FieldOfExp';
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<HomeFooter />
			</Router>
		</div>
	);
}

export default App;
