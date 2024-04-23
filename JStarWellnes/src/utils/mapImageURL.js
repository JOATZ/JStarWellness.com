//map image sources to DB file
import { baseUrl } from '../app/shared/baseUrl'

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        }
    })
}
