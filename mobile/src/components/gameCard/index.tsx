import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
    id: string;
    title: string;
    _count: {
        ads: number;
    };
    bannerUrl: string; //enquanto não puxamos da própria url
}

interface GameProps extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: GameProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground style={styles.cover} source={{uri: data.bannerUrl}}>
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{data.title}</Text>
                    <Text style={styles.anuncio}>{data._count.ads} anúncios</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}