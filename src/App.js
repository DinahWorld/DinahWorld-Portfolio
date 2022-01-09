import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/AboutMe' element={<AboutMe />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
