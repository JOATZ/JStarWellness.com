function importAll(r) {
    let images = {}
    try {
        r.keys().forEach((item, index) => {
            images[item.replace('./', '')] = r(item)
        })
    } catch (error) {
        console.error('Error importing images:', error)
    }
    return images
}

const images = importAll(
    require.context('app/assets/img/gallery', false, /.*\..*$/)
)

const galleryImages = [
    {
        id: 'gal1',
        headline: '[ISSUE] improved in only [TIME] ',
        service: 'Service Type Client had Done',
        content:
            'So and so did not like, or wanted to, with this and that they achieved somehting in just etc etc etc ',
        src: images['ClientComp1.webp']
    },
    {
        id: 'gal2',
        headline: 'Transformation 2',
        service: 'service 2',
        content: 'Content about transformation 2',
        src: images['ClientComp2.webp']
    },
    {
        id: 'gal3',
        headline: 'Transformation 3',
        service: 'service 3',
        content: 'Content about transformation 3',
        src: images['ClientComp3.webp']
    },
    {
        id: 'gal4',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['ClientComp4.webp']
    },
    {
        id: 'gal5',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['JennComp1.webp']
    },
    {
        id: 'gal6',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['JennComp2.webp']
    },
    {
        id: 'gal7',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic9.webp']
    },
    {
        id: 'gal8',
        headline: 'Stretch Mark Removal',
        service: 'service 1',
        content: 'Content about transformation 1',
        src: images['pic12.webp']
    },
    {
        id: 'gal9',
        headline: 'Transformation 2',
        service: 'service 2',
        content: 'Content about transformation 2',
        src: images['pic10.webp']
    },
    {
        id: 'gal10',
        headline: 'Transformation 3',
        service: 'service 3',
        content: 'Content about transformation 3',
        src: images['pic11.webp']
    },
    {
        id: 'gal11',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic13.webp']
    },
    {
        id: 'gal12',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic14.webp']
    },
    {
        id: 'gal13',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic16.webp']
    },
    {
        id: 'gal14',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic17.webp']
    },
    {
        id: 'gal15',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic19.webp']
    },
    {
        id: 'gal16',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic20.webp']
    }
]

export default galleryImages
