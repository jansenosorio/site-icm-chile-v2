import { Container, Grid, Typography } from '@mui/material';
import NewsCard from '../cards/NewsCard';
import { NewsData } from '@/types/news.types';

const newsData: NewsData[] = [
	{
		id: 0,
		img: 'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg',
		title: 'Ceia Mundial - 2025',
		type: 'Institucional',
	},
	{
		id: 0,
		img: 'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg',
		title: 'Ceia Mundial - 2025',
		type: 'Institucional',
	},
	{
		id: 0,
		img: 'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg',
		title: 'Ceia Mundial - 2025',
		type: 'Institucional',
	},
	{
		id: 0,
		img: 'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg',
		title: 'Ceia Mundial - 2025',
		type: 'Institucional',
	},
	{
		id: 0,
		img: 'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg',
		title: 'Ceia Mundial - 2025',
		type: 'Institucional',
	},
];

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
				paddingBottom={5}
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
			<Grid
				container
				gap={4}
			>
				{newsData?.map((news, index) => (
					<NewsCard
						key={index}
						newsId={news?.id}
						newsImg={news?.img}
						newsTitle={news?.title}
						newsType={news?.type}
					/>
				))}
			</Grid>
		</Container>
	);
}
