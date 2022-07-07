import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Hello World!</h2>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
