import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
    id: string;
    name: string;
    anuncio: string;
    cover: ImageSourcePropType; //enquanto não puxamos da própria url
}

interface GameProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: GameProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground style={styles.cover} source={data.cover}>
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.anuncio}>{data.anuncio} anúncios</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}