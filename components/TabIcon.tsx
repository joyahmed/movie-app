import { images } from '@/constants/images';
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

export default TabIcon;
