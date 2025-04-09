import Header from '@/components/header/Header';
import HomePage from '@/components/pages/HomePage';
import { Box, Divider } from '@mui/material';

export default function Home() {
	return (
		<Box sx={{ width: '100%', backgroundColor: '#FAFBFC' }}>
			<Header />
			<Divider color="#BB1625" />
			<HomePage />
		</Box>
	);
}
