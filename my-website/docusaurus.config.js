// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to my digital notebooks! 📚',
  tagline: 'Still under construction though 🏗️',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://macropy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Notebooks_Courses/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'milindv26', // Usually your GitHub org/user name.
  projectName: 'Notebooks_Courses', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      navbar: {
        /*title: "Milind's Homepage",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
      
        items: [
          {
            to: 'https://macropy.com/',
            label: "Milind's Homepage",
            position: 'left',
            target: '_self',
            className: 'custom-homepage-link', 
            
          },

          {
            to: '/Notebooks_Courses/',
            label: '📚',
            position: 'left',
            className: 'custom-notebook-nav',
          },

          
          { type: 'docSidebar',
            sidebarId: 'jnbSidebar',
            label: "Jupyter Notebooks",
            position: 'left',
                      
          },
          {
            type: 'docSidebar',
            sidebarId: 'ecotrixSidebar',
            position: 'left',
            label: 'Econometrics',
          },/*
          {
            type: 'docSidebar',
            sidebarId: 'mlSidebar',
            position: 'left',
            label: 'Machine Learning',
            
          },*/
          {
            type: 'docSidebar',
            sidebarId: 'empiricalio',
            position: 'left',
            label: 'Empirical IO',
            
          },/*

          {
            type: 'docSidebar',
            sidebarId: 'linearalgebraSidebar',
            position: 'left',
            label: 'Linear Algebra',
            
          },*/

          {
            type: 'docSidebar',
            sidebarId: 'math_statSidebar',
            position: 'left',
            label: 'Maths/Stats',
            
          },

          {
            type: 'docSidebar',
            sidebarId: 'mlSidebar',
            position: 'left',
            label: 'ML',
            
          },

          {
            type: 'docSidebar',
            sidebarId: 'fqcmdSidebar',
            position: 'left',
            label: 'Commands',
            
          },

         


          /*{
            type: 'docSidebar',
            sidebarId: 'testSidebar',
            position: 'left',
            label: 'Test',
            
          },*/
          /*{to: '/blog', label: 'Blog', position: 'left'},*/

          
          
          {
            to: 'https://github.com/milindv26',
            label: 'GitHub',
            position: 'right',
          },
          
          {
            to: 'https://www.linkedin.com/in/milindv26/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        
        
        copyright: `Copyright © ${new Date().getFullYear()} Milind Milind.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
