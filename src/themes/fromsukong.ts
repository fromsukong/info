import {defineTheme} from '@astryxdesign/core/theme';
import {gothicTheme} from '@astryxdesign/theme-gothic';

export const fromsukongTheme = defineTheme({
  name: 'fromsukong',
  extends: gothicTheme,
  tokens: {
    '--color-background-body': ['#000000', '#000000'],
    '--color-background-surface': ['#000000', '#000000'],
    '--color-background-card': ['#141414', '#141414'],
    '--color-background-muted': ['#1a1a1a', '#1a1a1a'],
    '--color-background-inverted': ['#f5f6f7', '#f5f6f7'],
    '--color-text-primary': ['#f5f6f7', '#f5f6f7'],
    '--color-text-secondary': ['rgba(245, 246, 247, 0.72)', 'rgba(245, 246, 247, 0.72)'],
    '--color-icon-primary': ['#f5f6f7', '#f5f6f7'],
    '--color-icon-secondary': ['rgba(245, 246, 247, 0.72)', 'rgba(245, 246, 247, 0.72)'],
    '--color-border': ['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.15)'],
    '--color-border-emphasized': ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],
  },
  components: {
    card: {
      base: {borderRadius: '16px'},
    },
    'clickable-card': {
      base: {
        borderRadius: '16px',
        borderWidth: 0,
        boxShadow: 'none',
      },
    },
  },
});
