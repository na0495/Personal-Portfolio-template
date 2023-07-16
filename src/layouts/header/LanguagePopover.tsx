import { useRef, useState } from "react";
// @mui
// hooks
import useLocales from "src/hooks/useLocales";
// components

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLang = (value: string) => {
    onChangeLang(value);
    handleClose();
  };

  return (
    <>
      {/* <Menu
        sx={{ marginLeft: 10, marginRight: 15 }}
        control={<Image src={currentLang.icon} alt={currentLang.label} />}
      >
        {allLang.map((lang: any) => (
          <Menu.Item
            key={lang.value}
            onClick={() => handleChangeLang(lang.value)}
            icon={<Image src={lang.icon} alt={lang.label}></Image>}
          >
            {lang.label}
          </Menu.Item>
        ))}
      </Menu> */}
    </>
  );
}
