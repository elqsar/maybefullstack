import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`node.js`, `aws`, `talent`, `vue`, `react`]} />
    <div style={{ flex: 0, color: '#fff', fontSize: '3rem' }}>
      maybefullstack
    </div>
  </Layout>
)

export default IndexPage
