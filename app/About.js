import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Font } from 'expo';

export default function Page() {
  return (
    <View className='max-w-screen-md '>
      <LinearGradient  className='h-full w-screen' colors={[ '#3B0169','#8E7AA7']}
       start={{ x: 2 , y: 1 }}
       end={{ x: 1, y: 0 }}>
        <View className='bg-[#371b59] h-28 border flex flex-row'>
          <View className='flex flex-row justify-start pt-6'>
          <Image className='pr-3 h-[50] w-[40]' source={require('../assets/logo.png')} />
          <Text className='text-[#ac4ff9] pl-2 pt-2 font-bold text-xl'>Legal</Text>
          <Text className='text-[#fff] pt-2 font-bold text-xl'> Guard</Text>
          </View>
          <View className='flex flex-row justify-center ml-20 mt-8 '>
          <TouchableOpacity className=''>
            <LinearGradient className="h-10 w-32 text-sm flex flex-row justify-center items-center rounded-lg  border  " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 3 }}
              end={{ x: 2 , y: 0 }}>
               <Text className='text-md text-[#ffffff] justify-center font-bold p-1'>Connect Wallet</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
        <View className='mt-4'>
            <Text className=' text-start mt-2 ml-2 text-[#3B0169] font-semibold text-2xl underline'>About us</Text>
            <Text className=' mt-2 ml-8 text-[#FFFFFF] text-md mb-5  font-semibold' >Legal Guard is a groundbreaking web3 digital locker
 designed to provide users with the 
atmost security and control over their digital assets, personal information, and sensitive documents. </Text>
            <Image className='flex flex-1 h-60 w-68 justify-center mx-10  ' source={require('../assets/about.png')} />
            <View className='flex flex-1 '>
              <Text className=' text-center text-purple-200 mx-4 text-3xl mt-8 font-bold shadow shadow-black underline' > Features </Text>
              <View className='flex flex-row justify-around mt-16 '>
            <Link className=' ' href='Upload'>
            <LinearGradient className="h-12 w-36 text-md flex flex-row justify-center items-center rounded-xl  border  " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 2 ,z:1 }}
              end={{ x: 2 , y: 1 ,z:0}}>
               <Text className='text-lg text-[#ffffff] justify-center font-bold '>Upload</Text>
            </LinearGradient>
          </Link>
          <View className='bg-white h-2 w-8 mt-5 rounded'></View>
            <Link className='' href='Docs'>
            <LinearGradient className="h-12 w-36 text-lg flex flex-row justify-center items-center rounded-xl  border  " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 2 ,z:1 }}
              end={{ x: 2 , y: 1 ,z:0}}>
               <Text className='text-lg text-[#ffffff] justify-center font-bold'>View Docs</Text>
            </LinearGradient>
          </Link>
            </View>
            </View>
        </View>
      </LinearGradient>
    </View>

  );
}

