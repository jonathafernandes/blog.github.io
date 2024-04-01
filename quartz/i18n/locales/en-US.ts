import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Links de saída",
      noBacklinksFound: "Nenhum link encontrado",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    explorer: {
      title: "Explorer",
    },
    footer: {
      createdWith: "Criado com",
    },
    graph: {
      title: "Vizualização em gráfico",
    },
    recentNotes: {
      title: "Posts recentes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "Pesquisa",
      searchBarPlaceholder: "Pesquise por algo",
    },
    tableOfContents: {
      title: "Table of Contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min de leitura`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Not Found",
      notFound: "Esta página não existe ou foi removida.",
    },
    folderContent: {
      folder: "Pasta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item nesta pasta." : `${count} items nesta pasta.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
