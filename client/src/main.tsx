import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import '../assets/normalize.css'
import '../assets/main.css'

createRoot(document.getElementById('root')!).render(<App />);
