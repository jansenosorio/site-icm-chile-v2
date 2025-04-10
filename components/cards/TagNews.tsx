import { Box, Typography } from '@mui/material';

export default function TagNews({ tagName }: { tagName: string }) {
	return (
		<Box sx={{ width: 'fit-content', backgroundColor: '#FEF2F3', paddingX: 1, paddingY: 0.5, borderRadius: 1 }}>
			<Typography
				variant={'h6'}
				fontFamily={'Roboto'}
				color={'#BB1626'}
				sx={{ fontSize: 14, fontWeight: 400 }}
			>
				{tagName}
			</Typography>
		</Box>
	);
}
