import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//pages
import SelectPlan from './features/forms/SelectPlan';
import PersonalForm from './features/forms/PersonalForm';
import AddOnsForm from './features/forms/AddOnsForm';
import Summary from './features/forms/Summary';

//layout
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PersonalForm />} />
      <Route path='select-plan' element={<SelectPlan />} />
      <Route path='add-ons' element={<AddOnsForm />} />
      <Route path='summary' element={<Summary />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
