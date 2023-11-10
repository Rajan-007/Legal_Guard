import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import Connect from "./connect";

export default function Page() {
  return (
    <View className='max-w-screen-md '>
      <LinearGradient  className='h-full w-screen' colors={[ '#3B0169','#8E7AA7']}
       start={{ x: 2 , y: 1 }}
       end={{ x: 1, y: 0 }}>
        <View className='bg-[#411d6c] h-28 flex flex-row'>
          <View className='flex flex-row justify-start pt-6'>
          <Image className='pr-3 h-[50] w-[40]' source={require('../assets/logo.png')} />
          <Text className='text-[#ac4ff9] pl-2 pt-2 font-bold text-xl'>Legal</Text>
          <Text className='text-[#fff] pt-2 font-bold text-xl'> Guard</Text>
          </View>
          <View className='flex flex-row justify-center ml-20 mt-8 '>
          <Connect />
          </View>
        </View>
        <View className=''>
          <Text className='text-center  text-white font-bold text-2xl py-2 bg-[#411d6cc2]'>Your Documents</Text>
        </View>
        <View className='flex flex-row justify-center'>
          <Link href='Upload'>
          <Text className='text-center text-white underline text-lg'> click here </Text>
          </Link>
          <Text className='text-center text-white  text-lg'> to upload new Document </Text>
        </View>
        <View className='flex flex-row justify-center items-center mt-4 border'>
          <ScrollView className='w-full px-8 mb-40'>
            <Image source={require('../assets/about.png')} />
            <Image source={require('../assets/about.png')} />
            <Image source={require('../assets/about.png')} />
            <Image source={require('../assets/about.png')} />
          </ScrollView>
        </View>
        <View></View>
      </LinearGradient>
    </View>
  );
}

