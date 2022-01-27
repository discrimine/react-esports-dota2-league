import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEng from './translations/en.json'
import translationRus from './translations/ru.json'

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: translationEng
        },
        ru: {
            translations: translationRus
        }
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        useSuspense: false
    }
});

export default i18n;