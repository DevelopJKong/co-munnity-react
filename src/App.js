// src/App.js
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Homework from './pages/Homework';
import Layout from './components/shared/Layout';

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/homework" element={<Homework/>} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;