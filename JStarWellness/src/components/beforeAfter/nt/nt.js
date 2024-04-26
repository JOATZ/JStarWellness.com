function importAll(r) {
    let images = {}
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

const images = importAll(
    require.context('../../../app/assets/img/nt/', false, /.*\..*$/)
)
const ntImages = [
    {
        clientId: '1',
        headline: 'Transformation 1',
        author: 'Author 1',
        content: 'Content about transformation 1',
        src: images['ClientComp1.webp']
    },
    {
        clientId: '2',
        headline: 'Transformation 2',
        author: 'Author 2',
        content: 'Content about transformation 2',
        src: images['ClientComp2.webp']
    },
    {
        clientId: '3',
        headline: 'Transformation 3',
        author: 'Author 3',
        content: 'Content about transformation 3',
        src: images['ClientComp3.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['ClientComp4.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['JennComp1.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['JennComp2.webp']
    },
    {
        clientId: '4',
        headline: 'Transformation 4',
        author: 'Author 4',
        content: 'Content about transformation 4',
        src: images['pic9.webp']
    }
]

export default ntImages
