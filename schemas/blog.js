export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'metadesc',
            type: 'string',
            title: 'Meta Description',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                {type: 'block'},
                {type: 'image'}
              ],
            title: 'Content',
        },
        {
            title: 'Created At',
            name: 'createdAt',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'Blog Image',
            name: 'blogimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },
          {
            name: 'author',
            type: 'object',
            fields:[
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{type: 'author'}]
                }
            ]
          },
    ]
}