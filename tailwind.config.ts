import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
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
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			wiggle: {
  				'0%, 100%': {
  					transform: 'rotate(0deg) scale(1)'
  				},
  				'15%': {
  					transform: 'rotate(6deg) scale(1.1)'
  				},
  				'30%': {
  					transform: 'rotate(-6deg) scale(1.1)'
  				},
  				'45%': {
  					transform: 'rotate(4deg) scale(1.1)'
  				},
  				'60%': {
  					transform: 'rotate(-4deg) scale(1.1)'
  				},
  				'75%': {
  					transform: 'rotate(2deg) scale(1.03)'
  				},
  				'90%': {
  					transform: 'rotate(-2deg) scale(1.03)'
  				}
  			},
  			'bounce-in': {
  				'0%': {
  					transform: 'scale(0)',
  					opacity: '0'
  				},
  				'60%': {
  					transform: 'scale(1.2)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			'bounce-out': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(0.8)',
  					opacity: '0'
  				}
  			},
  			'slide-down-fade': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-out': {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 5px #3b82f6'
  				},
  				'50%': {
  					boxShadow: '0 0 10px #3b82f6'
  				}
  			},
  			'letter-glow': {
  				'0%': {
  					color: '#ffffff',
  					textShadow: '0 0 0px #3b82f6'
  				},
  				'50%': {
  					color: '#3b82f6',
  					textShadow: '0 0 8px #3b82f6'
  				},
  				'100%': {
  					color: '#ffffff',
  					textShadow: '0 0 0px #3b82f6'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			wiggle: 'wiggle 0.8s ease-in-out',
  			'bounce-in': 'bounce-in 1s ease-out',
  			'fade-out': 'fade-out 0.5s ease-in forwards',
  			'bounce-out': 'bounce-out 0.8s ease-in forwards',
  			'slide-down-fade': 'slide-down-fade 0.8s ease-out',
  			'pulse-glow': 'pulse-glow 0.5s ease-in-out',
  			'letter-glow': 'letter-glow 0.3s ease forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
