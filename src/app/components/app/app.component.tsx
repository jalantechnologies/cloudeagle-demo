import * as React from "react";

import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeComponent } from "@components/home/home.component";

import "antd/dist/antd.css";
import "@components/app/app.style.css";

export const AppComponent = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <img src="https://landen.imgix.net/z8jx00rl4yb9/assets/cldw8yci.jpg?w=200" />
        </Header>
        <Content className="content">
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={HomeComponent} />\
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>© 2020 Cloudeagle.ai</Footer>
      </Layout>
    </Router>
  );
};
