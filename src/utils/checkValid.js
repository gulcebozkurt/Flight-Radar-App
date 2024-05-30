// Değer tanımsızsa bilinmiyor tanımlıysa değeri döndüren fonksiyon
const checkValid = (value) => {
    return !value ? 'Bilinmiyor' : value;
};

export default checkValid;