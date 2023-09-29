

import Navbar from './navbar'
import Header from './header'
import CompanyServices from './companyServices'
import Benefits from './benefits'
import CompletedProjects from './completedProjects'
import CompanyTeam from './companyTeam'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <CompanyServices></CompanyServices>
      <Benefits></Benefits>
      <CompletedProjects></CompletedProjects>
      <CompanyTeam></CompanyTeam>
    </main>
  )
}
