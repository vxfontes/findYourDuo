import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

// local
import { Background } from '../../components/background';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/gameCard';
import { Heading } from '../../components/heading';
import { styles } from './styles';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation()

  useEffect(() => {
    fetch('http://192.168.0.103:3333/games')
      .then(res => res.json())
      .then((data) => setGames(data))
  }, []);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

        <FlatList horizontal contentContainerStyle={styles.contentList} showsHorizontalScrollIndicator={false}
          data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )} />
      </SafeAreaView>
    </Background>
  );
}