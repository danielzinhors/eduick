import Dashboard, { DashboardProps } from 'templates/Dashboard'
import cursesMock from 'components/Card/mock'

export default function Dashbord(props: DashboardProps) {
  return <Dashboard {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      curses: cursesMock
    }
  }
}
