import { toast } from "react-toastify";

const getStoredData = (key) => {
    const booksData = localStorage.getItem(key);
    return booksData? JSON.parse(booksData) : [];
}
const addToLS = (key, id) => {
    const storedData = getStoredData(key);
    if(storedData.includes(id)){
        toast('this id already exist');
        return;
    }else{
        const newStoredData =  [...storedData, id];
        localStorage.setItem(key, JSON.stringify(newStoredData));
    }
}
const removeFromLS = (key, id) => {
    const storedData = getStoredData(key);
    // console.log('storedData', storedData);
    const updated = storedData.filter(item => item !== id);
    localStorage.setItem(key, JSON.stringify(updated));
    console.log('updated local Storage here', updated);
}
export {addToLS, getStoredData, removeFromLS}