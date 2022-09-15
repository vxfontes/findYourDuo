import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface TextProps extends ViewProps {
    title: string;
    subtitle: string,
}

export function Heading({ title, subtitle, ...rest }: TextProps) {
  return (
    <View style={styles.container} {...rest} >
        <Text style={styles.title}>
            {title}
        </Text>

        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}