import React from "react";
import { useState } from "react";
import { Collapse } from "react-collapse";
import ArrowRight from "./icons/ArrowRight";

const FAQList = () => {
  const [collapse, setCollapse] = useState(null);

  const collapseHandler = (ind) => {
    if (collapse === ind) {
      setCollapse(null);
    } else {
      setCollapse(ind);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      {faqs.map((faq, ind) => (
        <div key={ind} className="rounded-md overflow-hidden shadow">
          <button
            onClick={() => collapseHandler(ind)}
            className="w-full p-4 text-start bg-blue-50 relative font-medium"
          >
            {faq.question}
            <ArrowRight
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 ${
                collapse === ind ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
          <Collapse isOpened={collapse === ind ? true : false}>
            <div className="border-t border-blue-500 bg-gray-100 p-4">
              <p>{faq.answer}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "Do you update it regularly?",
    answer:
      "Yes, we will update it regularly also we will fix user's issues and improve it day by day.",
  },
  {
    question: "Is multi-language available here?",
    answer:
      "Multi-language feature is available because have initially added multi-language for this app and we will improve it in the future.",
  },
  {
    question: "Can I translate the full page of the whole application?",
    answer:
      "Currently, full-page translation is not possible. We are working on this so definitely we will include this in the future update.",
  },
  {
    question: "How can I add my own language?",
    answer:
      "Currently, this option is not available. But we will add this option as soon as possible in the next update. After that, you can add your own language from the admin dashboard.",
  },
  {
    question: "Can I update the currency of pricing plans?",
    answer:
      "No, after creating a pricing plan you can't update the currency. Because when you create a plan in that case plan price will be USD for global calculation. But when your users want to get a subscription then this USD price will be converted depending on the payment gateway. Suppose I am the user of your app. Now I want to get a premium subscription and select a plan. The plan price is 10 USD. After selecting the plan I will go to the checkout page. From there, I have selected Paystack. Now 10 USD will convert here to Paystack currency like NGN.",
  },
  {
    question: "How can I get support?",
    answer:
      "We have two options to provide customer support. 01. Our support panel. 02. Our discord channel. If you want to get support from our support panel then you have to create a support ticket from here https://support.ui-lib.com/ But if you want to get support from our discord channel then you have to join our discord community. https://discord.gg/Gh2QdQt4hZ",
  },
  {
    question: "Do you provide app installation facility?",
    answer:
      "Yes, we are offering to install the app inside your server. However, this facility is applicable for the first time and a specific domain after purchasing this app.",
  },
  {
    question: "Is this fully customizable?",
    answer: "Yes, this application is fully customizable.",
  },
  {
    question: "Will I get future updates?",
    answer:
      "Definitely, you will get future updates. When we release a new version you can get it from the 'App Control page of your admin panel.",
  },
];

export default FAQList;
