import { useTranslation } from "react-i18next";
import EnglishIcon from "/src/assets/icons/ic_flag_en.svg?url";
import FrenchIcon from "/src/assets/icons/ic_flag_fr.svg?url";
// assets

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    icon: EnglishIcon,
  },
  {
    label: "French",
    value: "fr",
    icon: FrenchIcon,
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem("i18nextLng");
  const currentLang =
    LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
