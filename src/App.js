import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeFooter from './components/HomeFooter';

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
