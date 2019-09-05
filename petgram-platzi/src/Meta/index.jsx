import React from 'react'
import { Helmet } from 'react-helmet'

export const Meta = ({ children, title, description }) => (
  <>
    <Helmet>
      {title && <title>Petgram | {title}</title>}
      {description && <meta name='description' content={description} />}
    </Helmet>
    {children}
  </>
)
