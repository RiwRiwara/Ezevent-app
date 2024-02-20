import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { th, en } from "./translations";

const resources = {
    en: {
        translation: en,
    },
    th:{
        translation: th,
    }
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    // interpolation: {
    //     escapeValue: false,
    // },
    resources,

})

export default i18next;