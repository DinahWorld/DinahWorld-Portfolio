import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
