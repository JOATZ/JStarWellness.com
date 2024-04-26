import { useEffect } from 'react'

function usePreloadImage(imageUrl) {
    useEffect(() => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = imageUrl
        document.head.appendChild(link)

        return () => {
            document.head.removeChild(link)
        }
    }, [imageUrl])
}

export default usePreloadImage
