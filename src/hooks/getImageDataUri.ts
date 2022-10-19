import empty from 'is-empty'

const getImageDataUri = (file: File) => new Promise<string>(resolve => {
    if (empty(file)) throw new Error(`file is ${typeof file}`);
    const reader = new FileReader();
    reader.onload = () => {
        resolve(`${reader.result}`)
    };
    reader.readAsDataURL(file)
})

export default getImageDataUri