import { TemplateName, TemplateSetting } from "@/config/template/interface"
import {
  TABLE_APP_CONFIG,
  TABLE_TEMPLATE_ACTIONS,
  TABLE_TEMPLATE_RESOURCES,
} from "@/config/template/table"
import {
  VIDEO_APP_CONFIG,
  VIDEO_RESOURCES_CONFIG,
} from "@/config/template/video"

export const templateConfig = {
  Video: {
    appConfig: VIDEO_APP_CONFIG,
    resources: VIDEO_RESOURCES_CONFIG,
    actions: [],
  },
  Table: {
    appConfig: TABLE_APP_CONFIG,
    resources: TABLE_TEMPLATE_RESOURCES,
    actions: TABLE_TEMPLATE_ACTIONS,
  },
}

export const Templates: TemplateSetting[] = [
  {
    name: "Video",
    desc: "A template designed to show off visualization capabilities",
  },
  {
    name: "Table",
    desc: "A template designed to show off visualization capabilities",
  },
]

export const getTemplateConfig = (templateName: TemplateName) => {
  return templateConfig[templateName]
}

export const getTemplateAppConfig = (templateName: TemplateName) => {
  return templateConfig[templateName]?.appConfig
}

export const getTemplateResources = (templateName: TemplateName) => {
  return templateConfig[templateName]?.resources ?? []
}
