import React from 'react'
import { DatedNewsContainer, DatedNewsGrid } from './datedNewsStyles'
import NewsList from './NewsList'
import NewsDetails from './NewsDetails'
import { NewsListContainer } from './NewsListContainer'
import { NewsDetailsContainer } from './NewsDetailsContainer'

const DatedNews = () => {
  return (
    <DatedNewsGrid>
      <NewsListContainer>
        <NewsList/>
      </NewsListContainer>
      <NewsDetailsContainer>
        <NewsDetails/>
      </NewsDetailsContainer>
    </DatedNewsGrid>
  )
}

export default DatedNews