import { Grid, Grow, Paper, Link } from '@mui/material';
import TagNews from '@/components/cards/TagNews';
import TitleNews from '@/components/typography/TitleNews';

type NewsCardProps = {
	newsId: number;
	newsTitle: string;
	newsImg: string;
	newsType: 'Institucional' | 'Evangelização';
};

export default function NewsCard({ newsId, newsTitle, newsImg, newsType }: NewsCardProps) {
	console.log(newsId, newsTitle, newsImg, newsType);

	return (
		<Grow in={true}>
			<Paper
				elevation={4}
				sx={{ overflow: 'hidden', cursor: 'pointer' }}
			>
				<Link
					href={'#'}
					underline={'none'}
				>
					<Grid
						container
						size={{ xs: 12, md: 4 }}
						sx={{
							flexDirection: 'column',
						}}
					>
						<Grid>
							<img
								src={'https://www.igrejacristamaranata.org.br/wp-content/uploads/2025/03/ceia-mundial-2025-1.jpg'}
								style={{ maxWidth: '350px' }}
							/>
						</Grid>
						<Grid
							container
							sx={{
								flexDirection: 'column',
								gap: '20px',
								padding: 2,
								minHeight: '100px',
								maxHeight: '200px',
							}}
						>
							<TagNews tagName={'Institucional'} />
							<TitleNews title={'Ceia Mundial - 2025'} />
						</Grid>
					</Grid>
				</Link>
			</Paper>
		</Grow>
	);
}
