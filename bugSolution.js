import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route key='*' path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>;}
function About() { return <div>About</div>;}
function NotFound() { return <div>Not Found</div>;} 
//Adding useLocation hook to trigger re-render
//This is an alternative solution, the key prop is generally preferred
//function NotFound() {
//  const location = useLocation();
//  return <div>Not Found {location.pathname}</div>;
//}