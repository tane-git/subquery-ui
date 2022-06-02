import './src/style.less'

// * there are a few different ways we can export stuff from the library

// * Just export our modified components
// export * from './src/components'

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
export * from 'antd'

// * override exports with modified components
export {
  Button,
  // Typography,
  Text,
  // Slider,
  // Popover,
} from './src/components'