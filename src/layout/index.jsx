import React, {Component} from 'react';
import './index.css'
import {Layout} from 'antd';
const {Header, Footer, Content} = Layout
export default class LayoutContainer extends Component {
  render() {
    return(
      <Layout className="layout">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}