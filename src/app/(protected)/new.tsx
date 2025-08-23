import { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewPostScreen() {

    const [text, setText] = useState('');

    return (
        <SafeAreaView className={'p-4 flex-1'}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                className="flex-1"
                keyboardVerticalOffset= {Platform.OS === 'ios' ? 140 : 0}
                >
                <Text className = 'text-white text-2xl font-bold'>PSYCHOBIOMACHINE</Text>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="What's on your mind?"
                    className="text-white text-lg"
                    multiline
                    numberOfLines={4}
                
                />
                <View className="mt-auto">
                    <Pressable onPress={()=>{console.log("post: ", text)}} className = "bg-white p-3 px-6 self-end rounded-full" >
                        <Text className = "text-black font-bold">Post</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}