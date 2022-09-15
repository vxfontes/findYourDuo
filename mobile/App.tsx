import { View, Text, StatusBar } from 'react-native';
import { Background } from './src/components/background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Home } from './src/screens/home';
import { Loading } from './src/components/loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoader] = useFonts({
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_900Black
})

  return (
    <Background>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>

      {/* loading para carregar a fonte */}
      { fontsLoader ? 
        <Routes /> 
      : <Loading /> }
    </Background>
  );
}

