'use client';

import Image from 'next/image';
import { ButtonMenuDefault, HeaderContainer } from './header.style';
import logo from '@/public/logo-icm.svg';
import { Box, Grid, Zoom } from '@mui/material';
import React, { useState } from 'react';
import { Close, Menu } from '@mui/icons-material';

export default function Header() {
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	return (
		<HeaderContainer>
			<Grid
				maxWidth={'lg'}
				container
				size={12}
				spacing={2}
				justifyContent={'space-between'}
				alignItems="center"
				sx={{
					width: '100%',
					flexDirection: { xs: 'column', md: 'row' },
					paddingX: 2,
				}}
			>
				<Grid
					container
					justifyContent={'space-between'}
					size={{ xs: 12, md: 4 }}
					alignItems={'center'}
				>
					<Image
						src={logo}
						alt="Logo Iglesia Cristiana Maranata"
						width={240}
					/>
					<Box
						onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
						sx={{ position: 'relative', display: { xs: 'flex', md: 'none' } }}
					>
						<Zoom in={isOpenMobileMenu}>
							<Menu sx={{ position: 'absolute', right: 0, top: -15, width: 35, height: 35, color: '#BB1625' }} />
						</Zoom>

						<Zoom in={!isOpenMobileMenu}>
							<Close sx={{ position: 'absolute', right: 0, top: -15, width: 35, height: 35, color: '#BB1625' }} />
						</Zoom>
					</Box>
				</Grid>
				<Grid
					container
					size={{ xs: 12, md: 8 }}
					display={{ xs: 'none', md: 'flex' }}
					justifyContent="end"
					alignItems="center"
					gap={2}
				>
					<ButtonMenuDefault
						variant="text"
						color="primary"
						sx={{ paddingX: 3 }}
					>
						Quiénes Somos
					</ButtonMenuDefault>
					<ButtonMenuDefault
						variant="text"
						color="primary"
						sx={{ paddingX: 3 }}
					>
						Nuestra Doctrina
					</ButtonMenuDefault>
					<ButtonMenuDefault
						variant="text"
						color="primary"
						sx={{ paddingX: 3 }}
					>
						Dónde Estamos
					</ButtonMenuDefault>
					<div>
						<ButtonMenuDefault
							variant="contained"
							color="primary"
							onClick={() => {}}
						>
							Contáctenos
						</ButtonMenuDefault>
					</div>
				</Grid>
			</Grid>
		</HeaderContainer>
	);
}
