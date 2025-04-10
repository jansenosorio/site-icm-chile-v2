'use client';
import { TitleNewsStyled } from '@/components/typography/titleNews.style';

type TitleNewsProps = {
	title: string;
};

export default function TitleNews({ title }: TitleNewsProps) {
	return (
		<TitleNewsStyled
			sx={{
				fontSize: 20,
				fontWeight: 600,
			}}
		>
			{title}
		</TitleNewsStyled>
	);
}
