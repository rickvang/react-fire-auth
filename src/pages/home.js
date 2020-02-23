import React from 'react'

import { Content } from '../components/Content'
import { Link, Title } from '../components/Typograph'

const Home = () => (
  <Content columns>
    <Title style={{ fontSize: '10vw', textAlign: 'center', lineHeight: 1 }}>
      Authentication with React and Firebase.
    </Title>
    <Link to="/me">Dashboard</Link>
  </Content>
)

export default Home
