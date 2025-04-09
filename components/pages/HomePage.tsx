import { Box } from '@mui/material';
import HeroSection from '@/components/sections/HeroSection';
import NewsPage from '@/components/pages/NewsPage';

export default function HomePage() {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#FEF2F3',
				}}
			>
				<HeroSection />
			</Box>
			<NewsPage />
		</>
	);
}
