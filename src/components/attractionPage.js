import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/CardView';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AttractionPage() {
    let {lang} = useParams();
    const {t,i18n} = useTranslation();
    i18n.changeLanguage(lang)
  return (

    <div>
        <Navbar />
        <Cards />
    </div>
  )
}
