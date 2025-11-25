export function handleDelete(
  idx: number,
  setImgArr: React.Dispatch<React.SetStateAction<File[]>>,
  setPreviewList: React.Dispatch<React.SetStateAction<string[]>>,
) {
  setImgArr((prev) => {
    const newArr = [...prev];
    return newArr.filter((_, idx2) => idx2 !== idx);
  });
  setPreviewList((prev) => {
    const newArr = [...prev];
    return newArr.filter((_, idx2) => idx2 !== idx);
  });
}
