import { lazy } from 'react'
import Overview from './Overview'
const Tickets = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Tickets")), 2000)
}))
import Ideas from './Ideas'
import Contacts from './Contacts'
import Settings from './Settings'
import Agents from './Agents'
import Articles from './Articles'

// const Agents = lazy(() => new Promise((res) => {
//     return setTimeout(() => {
//         res(import('./Agents'))
//         console.log('lazy ishlayapti');
//     }, 2000);
// }))

import Subscription from './Subscription'
import TicketCreate from './TicketCreate'

export { Overview, Tickets, Ideas, Contacts, Settings, Agents, Articles, Subscription, TicketCreate }