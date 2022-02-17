import React, { Suspense } from "react";
// import CustomerList from 'customerList_app/CustomerList';
// import Registration from './components/registration';

const CustomerList = React.lazy(() => import("customerList_app/CustomerList"));

const RegistrationForm = React.lazy(() =>
  import("registration_app/registrationForm")
);

const TestApp = React.lazy(() => import("registration_app/testApp"));

import ErrorBoundary from "./components/error-boundary";

const App = (props) => {
  console.log("props::", props);
  const parentCallback = () => {
      alert('parent callback')
  }
  return (
    <div>
      Main Application loaded : {props.name}
      Customer
      {/* <div>
                <Registration/>
            </div> */}
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <CustomerList name={"Arjun Ram"} />
        </Suspense>
        {/* <Suspense fallback={<div>Registration Loading...</div>}>
<RegistrationForm name={"Registration"}/>
</Suspense> */}
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<div>Registration Loading...</div>}>
          <RegistrationForm name={"Registration"} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<div>Test App Loading...</div>}>
          <TestApp parentCallback={parentCallback}/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
