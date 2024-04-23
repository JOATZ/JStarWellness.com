const SERVICES = [
    {
        id: 1,
        name: 'Color Match Patch Test',
        description:
            'Needed for what? Paramedical Artistry? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: 40,
        highPrice: null,
        serviceType: 'PA',
        src: '/colorMatch.jpg'
    },
    {
        id: 2,
        name: 'Acne Scars Inkless and or Camouflage',
        description:
            'Please send pictures or schedule a free consultation. Discount given for more than 1 body part. Contact for pricing. Needles produce micro traumas in the skin that causes your body to heal itself. It produces collagen and repairs the site causing skin lightening, tightening, circulation, reduced appearance, and texture improvement.',
        lowPrice: 125,
        highPrice: 500,
        serviceType: 'PA',
        src: '/acneScar.png'
    },
    {
        id: 3,
        name: 'Scar Reduction & Revision',
        description:
            'Please send pictures or schedule a free consultation. Discount given for more than 1 body part. Contact for pricing. This price range includes ink and inkless services. Needles produce micro traumas in the skin that causes your body to heal itself. It produces collagen and repairs the site causing skin lightening, tightening, circulation, reduced appearance, and texture improvement.',
        lowPrice: 120,
        highPrice: 1200,
        serviceType: 'PA',
        src: '/logo.webp'
    },
    {
        id: 5,
        name: 'Stretch Mark Collagen Induction Inkless Camouflage 1 Body part',
        description:
            'Please send pictures or schedule a free consultation. Discount given for more than 1 body part. Contact for pricing. Needles produce micro traumas in the skin that causes your body to heal itself. It produces collagen and repairs the site causing skin lightening, tightening, circulation, reduced appearance, and texture improvement',
        lowPrice: 300,
        highPrice: 900,
        serviceType: 'PA',
        src: '/logo.webp'
    },
    {
        id: 4,
        name: 'Bodybuilding Competitor  nutrition, training, peak week Plans',
        description:
            'Detailed description... Price is per month, minimum two months prior to competition required.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: '240 per month (minimum 2 months)',
        highPrice: null,
        serviceType: 'NT',
        src: '/weightLift.png'
    },
    {
        id: 5,
        name: '12-14 week online nutrition & training plan (non competitor)',
        description:
            'Detailed description... Price is per month, minimum two months prior to competition required.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: 249,
        highPrice: null,
        serviceType: 'NT',
        src: '/logo.webp'
    },
    {
        id: 6,
        name: 'Nutrition Lifestyle Plan 12-14 Weeks',
        description:
            'Detailed description... Price is per month, minimum two months prior to competition required.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: 155,
        highPrice: null,
        serviceType: 'NT',
        src: '/logo.webp'
    },
    {
        id: 7,
        name: 'Sports Specific Athlete nutrition & training plan 12-14 weeks',
        description:
            'Detailed description... Price is per month, minimum two months prior to competition required.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: 289,
        highPrice: null,
        serviceType: 'NT',
        src: '/logo.webp'
    },
    {
        id: 8,
        name: 'Online 12-14 week training plan',
        description:
            'Detailed description... Price is per month, minimum two months prior to competition required.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lowPrice: 155,
        highPrice: null,
        serviceType: 'NT',
        src: '/logo.webp'
    },
    {
        id: 9,
        name: 'Hair Tissue Mineral Analysis',
        description:
            'Uncover the raw data of whats happening inside your body through Hair Tissue Mineral Analysis Testing. This revealing service provides insights into heavy metals, food oxidation, mineral ratios, and their connections to hormones. A must-have resource that goes beyond traditional tests. Includes a 1 hour consultation and a detox plan as pertains to results.',
        lowPrice: 479,
        highPrice: null,
        serviceType: 'HTA',
        src: '/logo.webp'
    },
    {
        id: 10,
        name: 'Transition Life Style Plan',
        description:
            'maybe somehting like this to indicate a bundle? This comprehensive package includes a Hair Tissue Mineral Analysis to assess your body’s mineral composition and detect any imbalances or deficiencies. Based on the results, a personalized detox plan is formulated to address these issues. Additionally, the package offers a 1-hour personal consultation to discuss your results and plan in detail, ensuring a tailored approach to your transition lifestyle plan.',
        lowPrice: 687,
        highPrice: null,
        serviceType: ['NT', 'HTA'],
        src: '/logo.webp'
    }
]

export default SERVICES
