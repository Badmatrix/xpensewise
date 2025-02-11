import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: '#FFFFFF',
  			beige: {
  				'100': '#F8F4F0',
  				'500': '#98908B'
  			},
  			grey: {
  				'100': '#F2F2F2',
  				'300': '#B3B3B3',
  				'500': '#696868',
  				'900': '#201F24'
  			},
  			secondary: {
  				red: '#C94736',
  				green: '#277C78',
  				yellow: '#F2CDA6',
  				cyan: '#B2C9D7',
  				navy: '#626070',
  				purple: '#826CB0'
  			},
  			others: {
  				purple: '#AF81B4',
  				torquise: '#597C7C',
  				brown: '#93674F',
  				magenta: '#934f65',
  				blue: '#3f82b2',
  				navyGray: '#97A0A6',
  				gold: '#CAB361',
  				armyGreen: '#7F9161',
  				orange: '#BE6C49'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
