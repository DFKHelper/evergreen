// Document types
import page from './documents/page'
import blogPost from './documents/blogPost'
import service from './documents/service'
import author from './documents/author'
import category from './documents/category'
import settings from './documents/settings'

// Object types
import seo from './objects/seo'
import businessHours from './objects/businessHours'

export const schemaTypes = [
  // Documents
  page,
  blogPost,
  service,
  author,
  category,
  settings,

  // Objects
  seo,
  businessHours,
]
