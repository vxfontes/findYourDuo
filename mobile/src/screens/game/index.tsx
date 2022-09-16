import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/heading';
import { DuoCard, DuoCardProps } from '../../components/duoCard';
import { useEffect, useState } from 'react';


export function Game() {

    const [duos, setDuos] = useState<DuoCardProps[]>([]); 
    const navitation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navitation.goBack();
    }

    useEffect(() => {
        fetch(`https://3547-179-54-104-139.sa.ngrok.io/games/${game.id}/ads`)
            .then(res => res.json())
            .then((data) => setDuos(data))
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />

                    <View style={styles.right} />
                </View>

                <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode='cover' />

                <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

                <FlatList data={duos} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <DuoCard data={item} />
                )} />
            </SafeAreaView>
        </Background>
    );
}