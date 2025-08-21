import { Slot, Stack } from 'expo-router';
import  { ThemeProvider, DarkTheme } from '@react-navigation/native';
import '../../global.css';

//this is the root layout file for the app

const myTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#ff0000ff',
    },
};

export default function RootLayout() {
    console.log('Root layout rendered');
    return (
    <ThemeProvider value={myTheme}>
        <Slot/>
    </ThemeProvider>
)
}