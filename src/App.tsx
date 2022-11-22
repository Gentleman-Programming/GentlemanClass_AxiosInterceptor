import { SnackbarProvider } from 'notistack';
import { useEffect, useState } from 'react';
import './App.css';
import { testingService } from './services/testing.service';
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager';

function App() {
  const [morty, setMorty] = useState({} as any);
  const fetchMorty = async () => {
    const { data } = await testingService();
    setMorty(data);
  };

  useEffect(() => {
    fetchMorty();
  }, []);
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <div className="App">{JSON.stringify(morty)}</div>
    </SnackbarProvider>
  );
}

export default App;
