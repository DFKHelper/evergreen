import { groq } from 'next-sanity'

// Settings
export const settingsQuery = groq`*[_type == "settings"][0]`

// Pages
export const pagesQuery = groq`*[_type == "page"] | order(title asc)`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    seo
  }
`

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc)`

export const featuredServicesQuery = groq`
  *[_type == "service" && featuredOnHome == true] | order(order asc)
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    seo
  }
`

// Blog Posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    ...,
    author->,
    categories[]->
  }
`

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    ...,
    author->,
    categories[]->
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
    seo
  }
`

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) {
    ...,
    author->,
    categories[]->
  }
`

export const blogPostsByAuthorQuery = groq`
  *[_type == "blogPost" && author._ref == $authorId] | order(publishedAt desc) {
    ...,
    author->,
    categories[]->
  }
`

// Authors
export const authorsQuery = groq`*[_type == "author"] | order(name asc)`

export const authorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug][0]
`

// Categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc)`

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0]
`
