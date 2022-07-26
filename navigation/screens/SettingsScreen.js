import * as React from 'react';
import { View, Text } from 'react-native';
import render from 'react-native-web/dist/cjs/exports/render';

export default function SettingsScreen({ navigation }) {
    return (
        <View>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Setttings Screen</Text>
        </View>
    );
}