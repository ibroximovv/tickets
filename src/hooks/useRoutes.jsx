import { AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, OverviewIcon, SettingsIcon, SubscriptionIcon, TicketsIcon } from '../assets/icons/index'
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, TicketCreate, Tickets } from '../pages'
import TicketsMore from '../pages/TicketsMore'

export const paths = {
    overview: '/',
    tickets: '/tickets',
    ideas: '/ideas',
    contacts: '/contacts',
    agents: '/agents',
    articles: '/articles',
    settings: '/settings',
    subscription: '/subscription',
    ticketCreate: '/tickets/create',
    ticketsEdit: "/tickets/:id/edit",
    ticketsMore:"/tickets/:id"
}

export const navList = [
    {
        id: 1,
        title: 'Overview',
        path: paths.overview,
        icon: <OverviewIcon />
    },
    {
        id: 2,
        title: 'Tickets',
        path: paths.tickets,
        icon: <TicketsIcon />
    },
    {
        id: 3,
        title: 'Ideas',
        path: paths.ideas,
        icon: <IdeasIcon />
    },
    {
        id: 4,
        title: 'Contacts',
        path: paths.contacts,
        icon: <ContactsIcon />
    },
    {
        id: 5,
        title: 'Agents',
        path: paths.agents,
        icon: <AgentsIcon />
    },
    {
        id: 6,
        title: 'Articles',
        path: paths.articles,
        icon: <ArticlesIcon />
    },
]

export const PageRoutesList = [
    {
        id: 1,
        path: paths.overview,
        element: <Overview />
    },
    {
        id: 2,
        path: paths.tickets,
        element: <Tickets />
    },
    {
        id: 3,
        path: paths.ideas,
        element: <Ideas />
    },
    {
        id: 4,
        path: paths.contacts,
        element: <Contacts />
    },
    {
        id: 5,
        path: paths.agents,
        element: <Agents />
    },
    {
        id: 6,
        path: paths.articles,
        element: <Articles />
    },
    {
        id: 7,
        path: paths.ticketCreate,
        element: <TicketCreate />
    },
    {
        id: 8,
        path: paths.ticketsMore,
        element: <TicketsMore />
    },
    {
        id: 9,
        path: paths.ticketsEdit,
        element: <TicketCreate />
    }

]

// const nimadir = [
//     {
//         id: 7, 
//         title: 'Settings',
//         path: paths.settings,
//         icon: <SettingsIcon />
//     },
//     {
//         id: 1, 
//         title: 'Subscription',
//         path: paths.subscription,
//         icon: <SubscriptionIcon />
//     },
// ]

// {
//     id: 7,
//         path: paths.settings,
//             element: <Settings />
// },
// {
//     id: 8,
//         path: paths.subscription,
//             element: <Subscription />
// },