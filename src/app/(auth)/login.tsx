// app/(auth)/login.tsx
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert('please enter an email and password')
        return;
    };
    
    try {
        setLoading(true);
      // TODO: call your auth API here
      // await signIn({ email, password });
        const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) Alert.alert(error.message)

    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <View className="flex-1 px-6 justify-center">
          {/* Brand / Title */}
          <View className="mb-10">
            <Text className="text-white text-3xl font-semibold">Welcome back.</Text>
            <Text className="text-neutral-400 mt-1">
              Log in to Threads.
            </Text>
          </View>

          {/* Inputs */}
          <View className="gap-4">
            <View className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4">
              <Text className="text-neutral-400 text-xs mt-3 mb-1">Email</Text>
              <TextInput
                className="text-white text-base pb-3"
                placeholder="you@example.com"
                placeholderTextColor="#6B7280"
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
              />
            </View>

            <View className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4">
              <Text className="text-neutral-400 text-xs mt-3 mb-1">
                Password
              </Text>
              <TextInput
                className="text-white text-base pb-3"
                placeholder="••••••••"
                placeholderTextColor="#6B7280"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"
              />
            </View>
          </View>

          {/* Login Button */}
          <Pressable
            onPress={handleLogin}
            disabled={loading || !email || !password}
            className="mt-6 rounded-2xl bg-white/90 disabled:bg-white/30"
            accessibilityRole="button"
            accessibilityLabel="Log in"
          >
            <View className="py-3 items-center">
              <Text className="text-black font-semibold">
                {loading ? "Logging in…" : "Log in"}
              </Text>
            </View>
          </Pressable>

          {/* Footer Link */}
          <View className="mt-6 flex-row justify-center">
            <Text className="text-neutral-400">Don’t have an account? </Text>
            <Link
              href="/(auth)/signup"
              className="text-white font-semibold underline"
            >
              Create one
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
