import React from 'react'
import { StyleSheet, Text, View,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import {
	WalletConnectModal,
	useWalletConnectModal,
} from '@walletconnect/modal-react-native';

const projectId = '68b4d630268b2b1b25a65d39e395e202';

const providerMetadata = {
	name: 'rajan',
	description: 'YOUR_PROJECT_DESCRIPTION',
	url: 'https://your-project-website.com/',
	icons: ['https://your-project-logo.com/'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
};

export default function Connect() {
  const { open, isConnected, address, provider } = useWalletConnectModal();

	// Function to handle the
	const handleButtonPress = async () => {
		if (isConnected) {
			return provider?.disconnect();
		}
		return open();
	};

  return (
    <View>
        <TouchableOpacity className='' onPress={handleButtonPress}>
          <LinearGradient className="h-10 w-32 text-sm flex flex-row justify-center items-center rounded-lg  border  " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 3 }}
                  end={{ x: 2 , y: 0 }}>
              <Text className='text-md text-[#ffffff] justify-center font-bold p-1 '>{isConnected ? 'Disconnect' : 'Connect Wallet'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <WalletConnectModal
        explorerRecommendedWalletIds={[
          'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96','1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
        ]}
        explorerExcludedWalletIds={'ALL'}
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  )
}

