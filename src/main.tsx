import ReactDOM from 'react-dom/client';
import '@alancleyton67/awesome-ui/dist/index.css';

import App from '@/app';

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app!);
root.render(<App />);
