import {  createI18n } from 'vue-i18n';
import en from '../locales/en.json'
import es from '../locales/es.json'

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        es,
    }
})

export default i18n;