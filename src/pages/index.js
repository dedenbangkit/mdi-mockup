import Form from "./form";
import FormNew from "./form-new";

import Activity from "./activity";
import ActivityNew from "./activity-new";
import Dashboard from "./dashboard";
import OverView from "./overview";
import Notification from "./notification";
import Monitoring from "./monitoring";

const Page = ({ page, showNewButton }) => {
  switch (page) {
    case "notifications":
      showNewButton(false);
      return <Notification />;
    case "activities":
      showNewButton(true);
      return <Activity />;
    case "new-activities":
      showNewButton(false);
      return <ActivityNew />;
    case "forms":
      showNewButton(true);
      return <Form />;
    case "new-forms":
      showNewButton(false);
      return <FormNew />;
    case "monitoring":
      showNewButton(false);
      return <Monitoring />;
    default:
      showNewButton(false);
      return <OverView />;
  }
};

export {
  Activity,
  ActivityNew,
  Form,
  FormNew,
  Dashboard,
  OverView,
  Notification,
  Monitoring,
};

export default Page;
