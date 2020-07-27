import emailjs from "emailjs-com";
import { user_id } from "./../personal_info";

var template_params = {
  from_name: "from_name_value",
  message_html: "message_html_value",
};

var service_id = "default_service";
var template_id = "template_bICmePU9";
emailjs.send(service_id, template_id, template_params, user_id);

const handleSubmit = (values) => {
  const templateId = "template_bICmePU9";
  sendFeedBack(templateId, {
    message_html: mensaje(values),
    from_name: values.name,
  });
};
const sendFeedback = (templateId, variables) => {
  window.EmailJS.send("gmail", templateId, variable)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
