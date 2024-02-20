import React from 'react'

import pmImages from '../app/assets/beforeAfter/pm/pm.js'
import BeforeAfterCard from '../components/BeforeAfterCard.js'

const BeforeAndAfterPM = () => {
    return (
        <div>
            {pmImages.map((image) => (
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

export default BeforeAndAfterPM
