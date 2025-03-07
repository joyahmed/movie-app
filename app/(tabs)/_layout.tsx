import TabIcon from '@/components/TabIcon';
import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
const tabs = [
	{ name: 'index', title: 'Home', icon: icons.home },
	{ name: 'search', title: 'Search', icon: icons.search },
	{ name: 'saved', title: 'Saved', icon: icons.save },
	{ name: 'profile', title: 'Profile', icon: icons.person }
];

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
			{/* Map through tabs array to generate Tabs.Screen components */}
			{tabs.map(tab => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						headerShown: false,
						tabBarIcon: ({ focused }) => (
							<TabIcon
								focused={focused}
								icon={tab.icon}
								title={tab.title}
							/>
						)
					}}
				/>
			))}
		</Tabs>
	);
};

export default _layout;
