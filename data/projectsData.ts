interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Survey Application',
    description: `Company based full stack MERN (MongoDB, Express, React, Node) survey application, that gives ability to admin of creating forms and these survey forms can be distributed to employees or group of users. Responses from users are recorded and shown in graphical form, that also emails the report based on responses to users.`,
    imgSrc: '/static/blogs/survey.png',
    href: '/blog/survey-application',
  },
  {
    title: 'Widgets in a dashboard',
    description: `Using the 3rd party web-services, created widgets that can be added to the dashboard and can be customized to show different information. The dashboard is built using React and TailwindCSS`,
    imgSrc: '/static/blogs/widget.png',
    href: '/blog/widget-dashboard',
  },
  {
    title: 'Rollup Application',
    description: `Using the 3rd party web-services, created a rollup full stack MERN (MongoDB, Express, React, Node) application that was in integration with a CAD based application that calculated mass of parts and created a bill of materials for rolled up mass`,
    imgSrc: '/static/blogs/rollup.png',
    href: '/blog/rollup-application',
  },
  {
    title: 'PersonAI',
    description: `An AI based full stack next.js application using python and langchain for chatbot and Spring Boot as micro service architechture to store data. Application lets you integrate your data from different platforms such as Confluence, JIRA, PDFs, Word docs, URLs, etc. and use it to create chatbots. The application also has a chatbot builder that lets you create chatbots using a drag and drop interface.`,
    imgSrc: '/static/blogs/personai.png',
    href: '/blog/personai',
  },
]

export default projectsData
