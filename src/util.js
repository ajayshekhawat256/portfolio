export const newImageUrl=(path)=>{
    const imagee = new URL(`/Assets/${path}`,import.meta.url).href;
    console.log(imagee);
    return imagee;
}