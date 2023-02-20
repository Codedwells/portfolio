import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar/>}>
					<Route index element={<Home/>} />
					<Route path='projects' element={<Projects/>} />
					<Route path='blog' element={<Blog/>} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
