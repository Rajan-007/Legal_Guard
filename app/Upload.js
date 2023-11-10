import { StyleSheet, Text, View,TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as DocumentPicker from 'expo-document-picker';

export default function Page() {
  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    
    if (typeof result != undefined) {
      alert(result.assets.map(item => item.uri));
      console.log(result.assets.map(item => item.uri));
    } else {
        console.log(result)
      // Handle the case when the user cancels or there's an error
      alert('Document picking canceled or failed.');
    }
  };
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
       <View className=''>
          <View className='mt-8 flex flex-1 '>
              <Text className='text-2xl color-[#3B0169] font-semibold ml-4 underline'>Upload your Document </Text>
              <Text className='text-lg color-[#fffbfb] ml-8 mt-4 '>Securely upload and manage your important documents </Text>
          </View>
          <View className='flex flex-1 justify-center mb-28 mt-6'>
            <View className='w-88 h-96 bg-[#28213A] mx-8 py-10 px-5 rounded-xl '>
              <Text className='font-bold text-lg ml-2 text-white mt-4'>File name :</Text>
              <TextInput className='w-64 bg-[#918e8eea] text-white h-10 font-semibold rounded-lg ml-4 p-2 mt-2'></TextInput>
              <Text className=' font-bold text-white text-lg ml-2 mt-4'> File type:</Text>
              <TextInput className='w-64 bg-[#918e8eea] text-white h-10 rounded-lg ml-4 p-2 mt-2'></TextInput>
              <View className='mt-10 '>
              <TouchableOpacity className=''>
                <LinearGradient className="h-12 w-40  flex flex-row justify-center items-center rounded-full  border ml-16" colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 3 }}
                  end={{ x: 2 , y: 0 }}>
                  <Text className='text-xl text-[#ffffff] font-bold p-1 ' onPress={_pickDocument} > Upload </Text>
                </LinearGradient>
              </TouchableOpacity>
              </View>
            </View>
            <View className='mt-10 ml-20 '>
              <Link href='Docs'>
                <LinearGradient className="h-12 w-60  flex flex-row justify-center items-center rounded-2xl  border ml-20" colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 3 }}
                  end={{ x: 2 , y: 0 }}>
                  <Text className='text-lg text-[#ffffff] font-semibold p-1 '> Find your Documents </Text>
                </LinearGradient>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>

      <StatusBar style="auto" />
    </View>
  );
}

