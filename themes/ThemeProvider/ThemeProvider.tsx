'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Tema claro
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#192A3D',
		},
		secondary: {
			main: '#19857b',
		},
		background: {
			default: '#f5f5f5',
			paper: '#ffffff',
		},
	},
});

// // Tema escuro
// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#90caf9',
//         },
//         secondary: {
//             main: '#4db6ac',
//         },
//         background: {
//             default: '#121212',
//             paper: '#1e1e1e',
//         },
//     },
// });

interface ThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	// Efeito para atualizar a cor de fundo do body
	useEffect(() => {
		document.body.style.backgroundColor = lightTheme.palette.background.default;
	}, [lightTheme]);

	return (
		<MuiThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
};
