import ReactDOM from 'react-dom/client';
import './lib/tailwind.scss';

import App from '@/App';

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app!);
root.render(<App />);
