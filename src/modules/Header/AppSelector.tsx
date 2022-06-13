import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Dropdown as AntdDropdown, DropDownProps, Menu } from "antd";
import { useState } from "react";
import "./AppSelector.less";
import { ReactComponent as NewTab } from "./img/newTab.svg";
import { ReactComponent as Apps } from "./img/apps.svg";
import styles from "./AppSelector.module.less";

export type MenuItem = {
  text: string;
  code?: JSX.Element;
  link: string;
  icon?: boolean;
};

export interface IDropdown {
  text?: string;
  icon?: string;
  items: MenuItem[];
  overlayClassName?: string;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "apps":
      return <Apps className={styles.icon} />;
    default:
      return <Apps className={styles.icon} />;
  }
};

export const AppSelector: React.FC<IDropdown> = ({
  text,
  icon,
  items,
  overlayClassName = "headerDropdown",
}) => {
  // * state and handleChange function to allow us to apply styles to the 'Application' text
  const [visible, setVisible] = useState(false);
  const handleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const menu = (
    <Menu>
      {items.map((item, index) => (
        <Menu.Item key={index}>
          {!!item.code ? (
            item.code
          ) : (
            <a href={item.link} target="_blank">
              {item.text}
              {!!item.icon && <NewTab className={styles.newTabIcon} />}
            </a>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <AntdDropdown
      overlay={menu}
      onVisibleChange={handleChange}
      // for dev:
      visible={visible}
      overlayClassName={overlayClassName}
    >
      <div className={styles[overlayClassName]}>
        {/* <div className={visible ? styles.hover : styles.normal}> */}
        <div
          className={[
            styles.dropdownButton,
            visible ? styles.hover : styles.normal,
          ].join(" ")}
        >
          {!!icon ? (
            <>
              {getIcon(icon)} <CaretDownOutlined />
            </>
          ) : (
            <>
              {text} <DownOutlined />
            </>
          )}
          {/* {text} <DownOutlined /> */}
        </div>
      </div>
    </AntdDropdown>
  );
};
