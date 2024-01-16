import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
  FileUnknownOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from "react-router-dom";
import Linegraph from '../components/graphs/Linegraph';
import Piechart from '../components/graphs/Piechart';
import Tablegraph from '../components/graphs/Tablegraph';
import Pagenation from '../components/pagenation/Pagenation';
import Profilecard from '../components/profile/Profilecard';
import brefcase from "../Assets/Briefcase.png";
import statboard from "../Assets/StatBoard.png";
import headerimage from "../Assets/Rectangle 10.png";
import logout from "../Assets/Shutdown.png";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <div className='lg-logo'>
            <div>
              <img src={brefcase} />
            </div>
            <div>
              <img src={statboard} />
            </div>
          </div>
          <div className='sm-logo'>
            <span>S B</span>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              icon: <SettingOutlined />,
              label: "Support",
            },
            {
              icon: <PlusOutlined />,
              label: "Plugin",
            },
            {
              icon: <FileUnknownOutlined />,
              label: "Help",
            },
          ]}
        />
       <div className='div-logout lg-logo'>
          <button className='btn-logout'><img src={logout}/>Logout</button>
       </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
      
          
          <div className='row'>
            <div className='col-6'style={{display:"flex"}}>
            <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
            </div>
            <div className='col-6 header-card' >
                <div className='profile-card'>
                <span>Jhon deo jhondeo@gmail.com</span>
                <img src={headerimage}/>
                </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <div className="row row-div">
              <div className="col-7 line-graph">
                <Linegraph />
              </div>
              <div className="col-4 pie-chart">
                <Piechart />
              </div>
            </div>
          </div>
          <div>
            <div className="row row-div">
              <div className="col-7 bd-dark">
                <Tablegraph />
              </div>
              <div className="col-4">
                <Profilecard />
              </div>
            </div>
          </div>
          <div className="row div-pagnation">
            <div
              className="col-12"
              style={{ justifyContent: "center", paddingLeft: "250px" }}
            >
              <Pagenation />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
