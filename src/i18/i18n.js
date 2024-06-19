import i18next from "i18next"
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            home: "Home"
        }
    },

    az: {
        translation: {
            home: "Ana səifə"
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        lng: 'en'
    })

export default i18n