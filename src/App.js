import BirthdayReminder from './components/BirthdayReminder/BirthdayReminder';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from './components/Tasks/Task';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Task />} />           {/* "/" route */}
          <Route path="birthday-reminder" element={<BirthdayReminder />} />   {/* "/about" route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
