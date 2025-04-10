import { styled, Typography } from '@mui/material';

export const TitleNewsStyled = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto',
	lineHeight: '40px',
	color: theme.palette.primary.main,
}));
