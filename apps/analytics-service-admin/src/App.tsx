import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EngagementList } from "./engagement/EngagementList";
import { EngagementCreate } from "./engagement/EngagementCreate";
import { EngagementEdit } from "./engagement/EngagementEdit";
import { EngagementShow } from "./engagement/EngagementShow";
import { ViewList } from "./view/ViewList";
import { ViewCreate } from "./view/ViewCreate";
import { ViewEdit } from "./view/ViewEdit";
import { ViewShow } from "./view/ViewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Engagement"
          list={EngagementList}
          edit={EngagementEdit}
          create={EngagementCreate}
          show={EngagementShow}
        />
        <Resource
          name="View"
          list={ViewList}
          edit={ViewEdit}
          create={ViewCreate}
          show={ViewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
