import { defineConfig, presetUno } from "unocss";
import presetTheme from 'unocss-preset-theme'

export default defineConfig({
  presets: [
    presetUno(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: {
            'my-color-token': 'rgba(0, 255, 0, 0.2)'
          },
        },
      },
    }),
  ],
  theme: {
    colors: {
      'my-color-token': 'rgba(255, 0, 0, 0.6)'
    },
  },
});
