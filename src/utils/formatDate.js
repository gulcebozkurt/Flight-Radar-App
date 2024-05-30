import moment from 'moment/moment';
import 'moment/locale/tr';
// unix formatındaki veriyi normal tarihe çeviren fonksiyon
const formatDate = (unix_time) => {
    // new Date methodu milisaniye üzerinden işlem yapar ama unix time  geçen süreyi saniye cinsinden verir. Bu yüzden new Date'i kullanbilmek için saniyeyi 100 ile çarpıp milisaniyeye çevirdik
    const formatted = new Date(unix_time * 1000);

    return moment(formatted).calendar();
};

export default formatDate;