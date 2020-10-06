import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./components/DemoStateless";
import DemoStateful from "./components/DemoStateful";
import BaiTapLayout from "./components/BaiTapLayoutComponents/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import BaiTapThucHanhLayout from "./components/BaiTapBuoi1/BaiTapThucHanhLayout";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapDoiMauXe from "./BaiTapDoiMauXe";
import DemoLitsAndKeys from "./ListAndKeys/DemoLitsAndKeys";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHang from "./components/BaiTapGioHang_Buoi3";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless /> */}

      {/* <DemoStateful /> */}
      {/* <BaiTapLayout /> */}

      {/* <DataBinding /> */}

      {/* <HandleEvent /> */}

      <BaiTapThucHanhLayout />

      {/* <DemoConditionalAndState /> */}

      {/* <BaiTapDoiMauXe /> */}

      {/* <DemoLitsAndKeys /> */}

      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
    </div>
  );
}

export default App;
