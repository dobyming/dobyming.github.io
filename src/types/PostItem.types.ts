import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
    headings: Array<{
      value: string
      depth: number
    }>
  }
}

export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type ResumeType = {
  node: {
    id: string
    html: string
  }
}
