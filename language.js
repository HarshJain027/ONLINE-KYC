let selfieCaptured = false;

function captureSelfie() {
    if (!selfieCaptured) {
        Webcam.set({
            width: 320,
            height: 240,
            dest_width: 640,
            dest_height: 480,
            image_format: 'jpeg',
            jpeg_quality: 90,
        });

        Webcam.attach('#selfie-preview');

        Webcam.on('live', function () {
            console.log('Webcam is live');
        });

        Webcam.on('error', function (err) {
            console.error('Webcam error:', err);
        });

        // Set selfieCaptured to true on the first click
        selfieCaptured = true;
    } else {
        // Display alert message on the second click
        window.alert('Image already captured');
    }
}



function takeSnapshot() {
    // Your existing JavaScript code for taking a snapshot
    Webcam.snap(function (data_uri) {
        document.getElementById('selfie-preview').innerHTML = '<img src="' + data_uri + '"/>';
        document.getElementById('selfie-input').value = data_uri;
        Webcam.reset();
    });
}


const translations = {
    en: {
        pageTitle: 'Online Video KYC',
        formTitle: 'Video KYC Form',
        languageLabel: 'Language:',
        nameLabel: 'Name:',
        selfieLabel: 'Selfie:',
        captureSelfieButton: 'Capture Selfie',
        dobLabel: 'Date of Birth:',
        addressLabel: 'Address:',
        panAadhaarLabel: 'PAN Card / Aadhaar:',
        signatureLabel: 'Signature:',
        incomeRangeLabel: 'Income Range:',
        employmentTypeLabel: 'Type of Employment:',
        submitButton: 'Submit Video KYC',
        footerText: '\u00A9 2024 Online Video KYC. All rights reserved.',
    },
    hi: {
        pageTitle: 'ऑनलाइन वीडियो KYC',
        formTitle: 'वीडियो KYC फॉर्म',
        languageLabel: 'भाषा:',
        nameLabel: 'नाम:',
        selfieLabel: 'सेल्फी:',
        captureSelfieButton: 'सेल्फी कैप्चर करें',
        dobLabel: 'जन्म की तारीख:',
        addressLabel: 'पता:',
        panAadhaarLabel: 'पैन कार्ड / आधार कार्ड:',
        signatureLabel: 'हस्ताक्षर:',
        incomeRangeLabel: 'आय सीमा:',
        employmentTypeLabel: 'रोजगार का प्रकार:',
        submitButton: 'वीडियो KYC सबमिट करें',
        footerText: '\u00A9 2024 ऑनलाइन वीडियो KYC. सभी अधिकार सुरक्षित हैं।',
    },
    ta: {
        pageTitle: 'ஆன்லைன் வீடியோ KYC',
        formTitle: 'வீடியோ KYC படிவம்',
        languageLabel: 'மொழி:',
        nameLabel: 'பெயர்:',
        selfieLabel: 'செல்ஃபி:',
        captureSelfieButton: 'செல்ஃபி பிடிக்கவும்',
        dobLabel: 'பிறந்த தேதி:',
        addressLabel: 'முகவரி:',
        panAadhaarLabel: 'பேன் கார்டு / ஆதார் கார்டு:',
        signatureLabel: 'கையொப்பம்:',
        incomeRangeLabel: 'வருமான வரம்பு:',
        employmentTypeLabel: 'உழைப்பின் வகை:',
        submitButton: 'வீடியோ KYC சமர்ப்பிக்கவும்',
        footerText: '\u00A9 2024 ஆன்லைன் வீடியோ KYC. அனைத்து உரிமைகளும் பாதுகாத்திரமாகிவிட்டன.',
    },
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function changeLanguage(lang) {
    setLanguage(lang);
}

function speakLabel(labelKey) {
    const language = document.getElementById('language-select').value;
    const label = translations[language][labelKey];
    speak(label, language);
}

function speak(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.2; // Adjust the rate as needed (1 is the default)
    utterance.lang = lang; // Set the language for text-to-speech

    speechSynthesis.speak(utterance);
}