import 'antd/dist/antd.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const items1 = [
    {
        key: 0,
        label: 'add',
        onClick: function () {
          console.log('1', )
        }
      },
      {
        key: 1,
        label: 'edit',
        onClick: function () {
          console.log('2', )
        }
      },
    {
  key: 2,
  label: 'delete',
  onClick: function () {
    console.log('3')
  }
}
];
const items2 = [
    {
    key: 1,
    label: 'task',
    onClick: function () {
        console.log('===>', )
      }
    }
]
const SideBar = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    </Footer>
  </Layout>
);
export default SideBar;