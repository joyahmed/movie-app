import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({
	focused,
	icon,
	title
}: {
	focused: boolean;
	icon: any;
	title: string;
}) => {
	return (
		<>
			{focused ? (
				<ImageBackground
					source={images.highlight}
					className='flex flex-row items-center justify-center w-full flex-1 min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden'
				>
					<Image
						source={icon}
						tintColor='#151312'
						className='size-5'
					/>
					<Text className='text-secondary text-base font-semibold ml-2'>
						{title}
					</Text>
				</ImageBackground>
			) : (
				<View className='size-full items-center justify-center mt-4 rounded-full'>
					<Image
						source={icon}
						tintColor='#A8B5DB'
						className='size-5'
					/>
				</View>
			)}
		</>
	);
};

const _layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				},
				tabBarStyle: {
					backgroundColor: '#0F0D23',
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: '#0F0D23'
				}
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							{...{ focused, icon: icons.home, title: 'Home' }}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							{...{ focused, icon: icons.search, title: 'Search' }}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='saved'
				options={{
					title: 'Saved',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							{...{ focused, icon: icons.save, title: 'Saved' }}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							{...{ focused, icon: icons.person, title: 'Profile' }}
						/>
					)
				}}
			/>
		</Tabs>
	);
};

export default _layout;
