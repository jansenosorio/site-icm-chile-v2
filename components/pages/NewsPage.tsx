import { Container, Grid, Typography } from '@mui/material';
import NewsCard from '../cards/NewsCard';

export default function NewsPage() {
	return (
		<Container
			maxWidth="lg"
			sx={{ paddingY: 4 }}
		>
			<Grid
				container
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Typography
					variant={'h1'}
					fontFamily={'Roboto'}
					fontWeight={500}
					fontSize={{ xs: 24, md: 32 }}
					color={'#820F1B'}
				>
					Noticias
				</Typography>
				<Typography
					variant="h6"
					fontFamily={'Roboto'}
					fontWeight={400}
					fontSize={16}
				>
					{'Ver todo >'}
				</Typography>
			</Grid>
			<Grid container>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Grid>
		</Container>
	);
}
