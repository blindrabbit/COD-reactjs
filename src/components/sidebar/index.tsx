//import useState hook to create menu collapse state
import React, { useState } from "react";
import logo from "../../assets/img/COD_LOGOvs2.png";
import foto from "../../assets/img/foto.png";
import { FaHeart } from "react-icons/fa";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiEdit3,
  FiMonitor,
  FiWifi,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";
import { Link } from "react-router-dom";

export const Barrinha = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>
                {menuCollapse ? (
                  <img className="img_test" src={foto} />
                ) : (
                  <img className="img_test" src={foto} />
                )}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}>
                Home
                <Link to="#" />
              </MenuItem>
              <SubMenu title="Salas de Aula" icon={<FiEdit3 />}>
                {/* you can have more nested submenus ... */}
                <MenuItem icon={<RiPencilLine />}>Adicionar Sala</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Minhas Salas</MenuItem>
              </SubMenu>
              <SubMenu title="VM's" icon={<FiMonitor />}>
                <MenuItem icon={<RiPencilLine />}>Solicitar VM</MenuItem>
                <MenuItem icon={<RiPencilLine />}>MInhas VM's</MenuItem>
              </SubMenu>
              <SubMenu title="Redes" icon={<FiWifi />}>
                <MenuItem icon={<RiPencilLine />}>Criar rede</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Minhas redes</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Criar Políticas</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Minhas Políticas</MenuItem>
              </SubMenu>
              <SubMenu title="Perfil" icon={<BiCog />}>
                <MenuItem icon={<RiPencilLine />}>Alterar Senha</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

// export default Barrinha;

// payload = {14’username ’: ’test123 ’,15’laboratory_name ’: ’projeto_test70 ’,16’t
