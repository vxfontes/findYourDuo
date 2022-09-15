import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// local
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/gameCard';
import { Heading } from '../../components/heading';
import { styles } from './styles';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('https://0814-179-54-104-139.sa.ngrok.io/games')
      .then(res => res.json())
      .then((data) => setGames(data))

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

      <FlatList horizontal contentContainerStyle={styles.contentList} showsHorizontalScrollIndicator={false}
        data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
          <GameCard data={item} />
        )} />
    </SafeAreaView>
  );
}