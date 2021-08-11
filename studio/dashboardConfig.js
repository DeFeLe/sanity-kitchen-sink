export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6113ed21fa901c12904ec435',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h5s1ab5g',
                  apiId: '565ff161-7fc3-40e3-9ad4-3330f2949142'
                },
                {
                  buildHookId: '6113ed216d8b130ee2f238d8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v5e9mjeb',
                  apiId: '462329de-65c5-4b4b-b3c5-f3b290ebddd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeFeLe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v5e9mjeb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
