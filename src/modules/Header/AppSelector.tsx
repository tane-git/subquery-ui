import { DownOutlined } from '@ant-design/icons';
import { Dropdown as AntdDropdown, DropDownProps, Menu } from 'antd';
import { useState } from 'react';
import './AppSelector.less';
import { ReactComponent as NewTab } from './img/newTab.svg';
import styles from './AppSelector.module.less';

// ? This component could be merged with the BuildDropdown component.

export interface IDropdown {
  text: string;
  items: {
    text: string,
    code?: JSX.Element,
    link: string,
    icon?: boolean,
  }[],
  overlayClassName?: string,
}

export const AppSelector: React.FC<IDropdown> = ({
  text,
  items,
  overlayClassName = 'headerDropdown'
}) => {
  // * state and handleChange function to allow us to apply styles to the 'Application' text
  const [visible, setVisible] = useState(false);
  const handleChange = (visible: boolean) => {
    setVisible(visible);
  }
  const menu = (
    <Menu>
      {items.map((item, index) => (
        <Menu.Item key={index}>
          {!!item.code ? item.code
          : <a href={item.link} target="_blank">
            {item.text}{!!item.icon && <NewTab className={styles.icon}/>}
          </a>}
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
        <div className={visible ? styles.hover : styles.normal}>
          {text} <DownOutlined />
        </div>
      </div>
    </AntdDropdown>
  )
}