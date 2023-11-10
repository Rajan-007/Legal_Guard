import { StyleSheet, Text, View,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
        
        <View className='mt-8'>
            <Text className='text-center mt-2 text-[#3B0169] font-semibold text-3xl'>The Future of Data</Text>
            <Text className='text-center mt-2 text-[#FFFFFF] font-semibold text-3xl '>Your Digital Sanctuary</Text>
            <Image className='flex flex-1 mx-8 h-68 w-80' source={require('../assets/page1.png')} />
            <Text className=' text-center text-[#FFFAFA] mx-8 text-md font-bold  '>Embrace the future of document storage in Web 3, where your files are safeguarded by blockchain for unbreakable authenticity and ironclad security</Text>
            <View className='flex flex-row justify-around mt-16 '>
            <Link className=' ' href='Upload'>
            <LinearGradient className="h-12 w-36 text-md flex flex-row justify-center items-center rounded-xl  border border-pure-100 " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 2 ,z:1 }}
              end={{ x: 2 , y: 1 ,z:0}}>
               <Text className='text-md text-[#ffffff] justify-center font-bold'>Get started</Text>
            </LinearGradient>
          </Link>
          <Link className='' href='About'>
            <LinearGradient className="h-12 w-36 text-md flex flex-row justify-center items-center rounded-xl  border border-pure-100 " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 2 ,z:1 }}
              end={{ x: 2 , y: 1 ,z:0}}>
               <Text className='text-md text-[#ffffff] justify-center font-bold'>Learn more</Text>
            </LinearGradient>
          </Link>
            </View>
        </View>
      </LinearGradient>
    </View>
  );
}
