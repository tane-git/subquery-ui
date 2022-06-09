import './src/style.less'

// * there are a few different ways we can export stuff from the library

// * Just export our modified components and antd components imported and exported within component folders
// this method means we don't have to delete the types file, but we have to manually add each component we want to use in the library... not great
export * from './src/components'

// * export some components from antd and export them individually
// import { Typography, Form } from 'antd'
// export {
//   Typography,
//   Form,
//   Slider,
//   Input,
//   Popover,
//   Switch,
//   Row,
//   Col,
//   Collapse,
//   Layout
// } from 'antd'

// * export all from antd, then override exports with modified components (from components)
// ! this isn't working...
// * it does work if you delete the dist/index.d.ts file
// export * from 'antd'

// * override exports with modified components
// export {
  // Button,
  // Typography,
  // Text,
  // Slider,
  // Popover,
// } from './src/components'

// * and export the modules
export * from './src/modules'