import React from 'react'

import ntImages from '../app/assets/beforeAfter/nt/nt.js'
import BeforeAfterCard from '../components/BeforeAfterCard.js'

const BeforeAndAfterNT = () => {
    return (
        <div>
            {ntImages.map((image) => (
                <BeforeAfterCard
                    key={image.clientId}
                    headline={image.headline}
                    author={image.author}
                    content={image.content}
                    src={image.src}
                />
            ))}
        </div>
    )
}

export default BeforeAndAfterNT
