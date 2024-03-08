import { useState } from "react"

const useLocaleContext = () => {
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id')

    const toggleLocale = () => {
        const newLocale = locale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale)
    }

    return { locale, toggleLocale };
}

export default useLocaleContext;
