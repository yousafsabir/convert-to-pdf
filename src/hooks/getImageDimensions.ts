import empty from 'is-empty'

const getImageDimensions = (dataURL: string) => new Promise<{ height: number; width: number }>(resolve => {
    if (empty(dataURL)) throw new Error(`dataURL is ${typeof dataURL} `);
    const img = new Image()
    img.onload = () => {
        resolve({
            height: img.height,
            width: img.width
        })
    }
    img.src = dataURL
})

export default getImageDimensions