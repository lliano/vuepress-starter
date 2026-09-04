import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/vuepress-starter/',
  bundler: viteBundler(),
  theme: defaultTheme(),
})
