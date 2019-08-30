import React, { useState, useEffect } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://aomine-petgram-api.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed, fadeIn) => (
    <List className={`${fadeIn ? 'fadeIn' : 'fadeOut'} ${fixed ? 'fixed' : ''}`}>
      {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true, showFixed)}
    </>
  )
}
