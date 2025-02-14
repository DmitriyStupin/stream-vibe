import getIdFromTitle from "@/utils/getIdFromTitle"

const getTabsElementsFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tabpanel`,
  }
}

export default getTabsElementsFromTitle