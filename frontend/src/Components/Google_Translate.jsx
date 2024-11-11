import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Check if the script is already present
        if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
            // Create the script element
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.type = 'text/javascript';
            script.async = true;

            // Append the script to the document body
            document.body.appendChild(script);
        }

        // Cleanup function to remove the script if necessary (not strictly required)
        return () => {
            const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Define the callback function for the Google Translate element
    window.googleTranslateElementInit = () => {
        if (!document.getElementById('google_translate_element').hasChildNodes()) {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.VERTICAL },
                'google_translate_element'
            );
        }
    };

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
