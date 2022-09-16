import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

// local
import { THEME } from '../../theme';
import { DuoInfo } from '../duoInfo';
import { styles } from './styles';

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    nickName: string;
    useVoiceChannel: boolean; 
    weekDays: string[];
    yearsPlaying: number;
}

interface DataDuoProps {
    data: DuoCardProps;
}

export function DuoCard({ data }: DataDuoProps) {
    return (
        <View style={styles.container}>
            <DuoInfo label='Nome' value={data.nickName} />
            <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} anos`} />
            <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
            <DuoInfo label='Chamada de áudio?' value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}/>

            <TouchableOpacity style={styles.button}>
                <GameController color={THEME.COLORS.TEXT} size={20}/>
                <Text style={styles.buttonTitle}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}