import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListSubheader from "@material-ui/core/ListSubheader";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  fr: { label: "Français", dir: "ltr", active: false },
  chi: { label: "中文", dir: "ltr", active: false },
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);
 const handleBtnClick=(currentTarget)=>{
  setMenuAnchor(currentTarget)
  setOpen(!open)

 }
  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Button 
      // onClick={(e)=>handleBtnClick}
      onClick={({ currentTarget }) => handleBtnClick(currentTarget)}
      >
        {languageMap[selected].label}
        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={open}
        anchorEl={menuAnchor}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            {/* <ListSubheader>{t("select_language")}</ListSubheader> */}
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setOpen(false);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
