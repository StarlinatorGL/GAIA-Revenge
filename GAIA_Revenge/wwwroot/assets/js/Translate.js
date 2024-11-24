function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en', // Idioma original de la página (cambia 'en' si es diferente)
            includedLanguages: 'es,en,fr,de,zh-CN', // Idiomas permitidos (puedes agregar más)
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
}