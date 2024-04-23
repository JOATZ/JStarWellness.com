function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

const images = importAll(
    require.context('../../../app/assets/img/pm/', false, /.*\..*$/)
)

const pmImages = [
    {
        clientId: '1',
        headline: 'Stretch Mark Removal',
        author: 'Author 1',
        content: 'Content about transformation 1',
        src: images['pic12.webp']
    },
    {
        clientId: '2',
        headline: 'Transformation 2',
        author: 'Author 2',
        content: 'Content about transformation 2',
        src: images['pic10.webp']
    },
    {
        clientId: '3',
        headline: 'Transformation 3',
        author: 'Author 3',
        content: 'Content about transformation 3',
        src: images['pic11.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic13.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic14.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic16.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic17.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic19.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic20.webp']
    }
]

export default pmImages
