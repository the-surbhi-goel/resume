const COMPANY_LIST = [
  {
    id: 1,
    text: "Momentum Metropolitan Services Private Limited",
    text2:
      "Technology: ReactJs, Angular, Angular Material, Angular Flex Layout, Bootstrap, Typescript, SCSS, HTML, Rest API, JIRA, Lens, GIT",
    date: "July 22 - current",
    category: {
      tag: "Software Developer",
      color: "#018f69",
    },
    link: {
      readMore: false,
    },
    list: [
      "Designing and developing PWA(insurance), website in angular.",
      "Working on mono-repo architecture",
      "Wrote test cases on mono-repo architecture",
      "Working in Agile methodology",
      "Participated in architecture meetings",
    ],
    projects: [
      {
        name: "Ayo",
        desc: "It's SA insurance PWA. Users can get Hospital and Life Cover through different products like Recharge with Care, Family Cover. In Family Cover, the user can cover his/her family-member.",
      },
    ],
  },
  {
    id: 2,
    text: "Nagarro",
    text2: "Technology: Angular, Bootstrap, Typescript, AWS, SCSS, HTML, Rest API, GIT",
    date: "Oct 21 - Jul 22",
    category: {
      tag: "Senior Engineer",
      color: "red",
    },
    link: {
      readMore: false,
    },
    list: ["Designed and developed Admin Dashboard in angular.", "Worked in Agile methodology"],
  },
  {
    id: 3,
    text: "Zeno Health (Formly Generico)",
    text2:
      "Technology: Angular, Bootstrap, Typescript, SCSS, Javascript, JQuery, HTML, Rest API, GIT",
    date: "Sep 19- Oct 21",
    category: {
      tag: "Front-End Lead",
      color: "orange",
    },
    link: {
      readMore: false,
    },
    list: [
      "Designing and developing Admin Dashboard, Analytics dashboard, ops-oracle dashboard, generico website, dexter etc",
      "Developed PWA(zeno-app)",
    ],
    projects: [
      {
        name: "Retail-Ninja",
        desc: "We can create messages, segments, and campaigns. Segments can be created  based on users’ purchase history, lifetime activity(bill count, bill interval) etc. Campaigns are created based on segments to target users (targets depend on purchase value, transaction etc).",
      },
      {
        name: "Ops Oracle Dashboard",
        desc: "This dashboard is used  to create short-book requests, auto-generate short-book requests, deletion of short-book requests, handle customers orders",
      },
      {
        name: "Zeno App(PWA)",
        desc: "Customers can place their order through this app. They can directly place their order by uploading prescription only.",
      },
      {
        name: "Generico website",
        desc: "Used to place orders during lockdown. Used to run campaigns, used by customers for feedback.",
      },
    ],
  },
  {
    id: 4,
    text: "Shoclef India Pvt. Ltd",
    text2: "Technology: AngularJS, Bootstrap, SCSS, Javascript, JQuery, HTML, Rest API, GIT",
    date: "Jun 19 - Sep 19",
    category: {
      tag: "Sr. Software Engineer",
      color: "black",
    },
    link: {
      readMore: false,
    },
    list: [
      "Responsible for front-end team management.",
      "Designed and developed Admin Dashboard, Website etc.",
    ],
  },
  {
    id: 5,
    text: "Flyrobe - Fashion Rental Website",
    text2:
      "Technology: AngularJS, Angular, Angular Material, Bootstrap, Typescript, SCSS, Javascript, JQuery, HTML, CSS, Rest API, GIT",
    date: "Jul 16 - Feb 19",
    category: {
      tag: "Senior Software Developer",
      color: "purple",
    },
    link: {
      readMore: false,
    },
    list: [
      "Designed and developed Admin Dashboard, Flyrobe Analytics dashboard, Store Dashboard, Access Control System, Merchant Management System, Dexter’s lab, amazon, amazon-vendor etc.",
      "Implemented user, customer care and order management functionality, status change through barcode etc.",
      "Responsible for responsive designs",
      "Translated UX wireframes and mockups into responsive, interactive features using HTML/CSS.",
      "Created custom directives, filters, services etc for internal dashboards.",
      "Developed critical components of website and dashboards",
      "Landing pages in the dashboard.",
      "Integration of third party tools like socket.io, razorpay etc.",
    ],
    projects: [
      {
        name: "Order Management dashboard",
        desc: "This dashboard is responsible for the life cycle of products(rent, confirm, shipping,laundry, refund etc). It has audit functionality. Orders can be placed with this dashboard. Products can be added through this dashboard. Merchants can be added through this dashboard",
      },
      {
        name: "Store dashboard and Store-Interface",
        desc: "Store dashboard is responsible for customer care, order-management  at store-level. Orders can be placed at the store using the store interface on demand of customers. Store dashboard is used to view store-collections. Products can be searched by their warehouse id.",
      },
      {
        name: "Merchant Management System",
        desc: "This dashboard is used by vendors to check orders, to block or unblock dates for their products, frequency of product on rent, to view lists of their products. Pick-up and drop-off facilities can be checked by this dashboard.",
      },
      {
        name: "Access Control System",
        desc: "This dashboard is used to assign access (read, write) to employees to access other dashboards.",
      },
      {
        name: "Dexter Lab",
        desc: "This dashboard is used to view live events, to create, modify, delete sms, email-template, segments, campaigns.",
      },
    ],
  },
  {
    id: 6,
    text: "Click Labs Pvt Ltd",
    text2: "Technology: AngularJS, Bootstrap, Javascript, JQuery, HTML, CSS, Rest API, GIT",
    date: "Jul 14 - Dec 15",
    category: {
      tag: "Front-end Developer",
      color: "blue",
    },
    link: {
      readMore: false,
    },
    list: [
      "Managed and developed 10+ Admin Dashboards and Websites for Taxi Based Products.",
      "Integration of third party tools like Stripe, Braintree, socket.io etc",
    ],
    projects: [
      {
        name: "Products",
        desc: "Njoy Cabs, PediCabs, KidCar, Taxi Must, CabIT, ScribeLink etc.",
      },
      {
        name: "Taxi Admin Dashboards and Websites",
        desc: "It provides features like managing “users, rides, fares, bookings referral code & promo code”, providing “earning reports” and tracking driver & its related data. Websites providing a platform for users to register, subscribe and send related queries to the admin.",
      },
      {
        name: "ScribeLink",
        desc: "Interconnect scribe with physician. With one touch of a button on the mobile device, the physician in the US shall be able to connect/disconnect to the remote desktop computer.",
      },
      {
        name: "A2Z waste management",
        desc: "It’s an on demand app for home services, carpentry services etc."
      }
    ],
  },
];

export default COMPANY_LIST;
