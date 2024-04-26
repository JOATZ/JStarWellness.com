function importAll(r) {
    let images = {}
    try {
        r.keys().forEach((item) => {
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
        id: '1',
        headline: 'Competition ready in X weeks!',
        service: 'Complete NT Plan',
        content:
            'Amazing reuslts can be achived by follwing a strategic plan. Sucha nd such plans are custom tialored, eays to follow, and complete...etc ect',
        src: images['ClientComp1.webp'],
        url: '/services'
    },
    {
        id: '8',
        headline: 'Stretch Marks Removed after X',
        service: 'Stretch Mark Removal',
        content:
            'Using ect stretch marks can be signficiantly reduced or elimanted using a technique etc ect',
        src: images['pic12.webp'],
        url: '/services'
    },
    {
        id: '2',
        headline: 'Transformation 2',
        service: 'service 2',
        content: 'Content about transformation 2',
        src: images['ClientComp2.webp'],
        url: '/services'
    },
    {
        id: '3',
        headline: 'Transformation 3',
        service: 'service 3',
        content: 'Content about transformation 3',
        src: images['ClientComp3.webp'],
        url: '/services'
    },
    {
        id: '4',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['ClientComp4.webp'],
        url: '/services'
    },
    {
        id: '5',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['JennComp1.webp'],
        url: '/services'
    },
    {
        id: '6',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['JennComp2.webp'],
        url: '/services'
    },
    {
        id: '7',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic9.webp'],
        url: '/services'
    },
    {
        id: '9',
        headline: 'Transformation 2',
        service: 'service 2',
        content: 'Content about transformation 2',
        src: images['pic10.webp'],
        url: '/services'
    },
    {
        id: '10',
        headline: 'Transformation 3',
        service: 'service 3',
        content: 'Content about transformation 3',
        src: images['pic11.webp'],
        url: '/services'
    },
    {
        id: '11',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic13.webp'],
        url: '/services'
    },
    {
        id: '12',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic14.webp'],
        url: '/services'
    },
    {
        id: '13',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic16.webp'],
        url: '/services'
    },
    {
        id: '14',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic17.webp'],
        url: '/services'
    },
    {
        id: '15',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic19.webp'],
        url: '/services'
    },
    {
        id: '16',
        headline: 'Transformation 4',
        service: 'service 4',
        content: 'Content about transformation 4',
        src: images['pic20.webp'],
        url: '/services'
    }
]

export default galleryImages
