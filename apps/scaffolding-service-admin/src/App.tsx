import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaterialList } from "./material/MaterialList";
import { MaterialCreate } from "./material/MaterialCreate";
import { MaterialEdit } from "./material/MaterialEdit";
import { MaterialShow } from "./material/MaterialShow";
import { ScaffoldingList } from "./scaffolding/ScaffoldingList";
import { ScaffoldingCreate } from "./scaffolding/ScaffoldingCreate";
import { ScaffoldingEdit } from "./scaffolding/ScaffoldingEdit";
import { ScaffoldingShow } from "./scaffolding/ScaffoldingShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
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
        title={"ScaffoldingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Material"
          list={MaterialList}
          edit={MaterialEdit}
          create={MaterialCreate}
          show={MaterialShow}
        />
        <Resource
          name="Scaffolding"
          list={ScaffoldingList}
          edit={ScaffoldingEdit}
          create={ScaffoldingCreate}
          show={ScaffoldingShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
