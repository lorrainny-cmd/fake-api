import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios';
import { Layout, Menu, Button as ButtonAntd } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function active() {
  axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets`)
    .then(res => {
      const active = res.data;
      return console.log(active)

    })
}
function companies() {
  axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies`)
    .then(res => {
      const companies = res.data;
      return console.log(companies)

    })
}
function units() {
  axios.get(`https://my-json-server.typicode.com/tractian/fake-api/units`)
    .then(res => {
      const units = res.data;
      return console.log(units)

    })
}
function users() {
  axios.get(`https://my-json-server.typicode.com/tractian/fake-api/users`)
    .then(res => {
      const users = res.data;
      return console.log(users)

    })
}
ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

        <Menu.Item key="1" icon={<UserOutlined />}>
          <ButtonAntd
            title=''
            size='small'
            onClick={active()}
            style={{ fontSize: "11px", width: "20px", height: "20px" }}
          >
          </ButtonAntd>
        </Menu.Item>

        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <ButtonAntd
            title=''
            size='small'
            onClick={companies()}
            style={{ fontSize: "11px", width: "20px", height: "20px" }}
          >
          </ButtonAntd>
        </Menu.Item>

        <Menu.Item key="3" icon={<UploadOutlined />}>
          <ButtonAntd
            title=''
            size='small'
            onClick={units()}
            style={{ fontSize: "11px", width: "20px", height: "20px" }}
          >
          </ButtonAntd>
        </Menu.Item>

        <Menu.Item key="4" icon={<UserOutlined />}>
          <ButtonAntd
            title=''
            size='small'
            onClick={users()}
            style={{ fontSize: "11px", width: "20px", height: "20px" }}
          >
          </ButtonAntd>
        </Menu.Item>

      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>,
  document.getElementById('container'),
);