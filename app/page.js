

import Navbar from './navbar'
import Header from './header'
import CompanyServices from './companyServices'
import Benefits from './benefits'
import CompletedProjects from './completedProjects'
import CompanyLeaders from './companyLeaders'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <CompanyServices></CompanyServices>
      <Benefits></Benefits>
      <CompletedProjects></CompletedProjects>
      <CompanyLeaders></CompanyLeaders>
    </main>
  )
}
