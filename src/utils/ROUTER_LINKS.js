export const ROUTER_LINKS = {
    home: {
        home: '/'
    },
    schedule: {
        schedule : '/schedule',
        sessions: '/schedule/sessions',
        workshops: '/schedule/workshops',
        special_destinations: '/schedule/special-destinations',
        speakers: '/schedule/speakers'
    },
    book_a_stand: {
        book_a_stand: '/book-a-stand',
        stand_form: '/book-a-stand/stand-form'
    },
    exhibit : {
        exhibit: '/exhibit',
        exhibitors_info: '/exhibit/exhibitors-info',
        exhibitors_brochure: '/exhibit/exhibitors-brochure',
        venue_and_travel_info: '/exhibit/venue-and-travel-info',
        exhibitors_list: '/exhibit/exhibitors-list',
    },
    sponsors: {
        sponsors: '/sponsors',
        be_a_sponsor: '/sponsors/be-a-sponsor',
        download_brochure: '/sponsors/download-brochure'
    },
    sponsor: {
        sponsor: '/sponsor',
        be_a_sponsor: '/sponsor/be-a-sponsor'
    },
    attend: {
        attend: '/attend',
        register_to_attend: '/attend/register-to-attend',
        attendees_info: '/attend/attendees-info',
        venue_and_travel_info: '/attend/venue-and-travel-info',
        invitation_letter : '/attend/invitation-letter',
        visa_application: '/attend/visa-application',
        terms_and_conditions: '/attend/terms-and-conditions',
    },
    contact: {
        contact: '/contact',
        contact_information: '/contact/contact-info'
    },
    faq: {
        faq: '/faq',
        list_of_faq: '/faq/list-of-faq'
    }
}

export const ROUTER_LINKS_ARRAY = {
    schedule : [
        {sessions: ROUTER_LINKS.schedule.sessions},
        {workshops: ROUTER_LINKS.schedule.workshops},
        {special_destinations: ROUTER_LINKS.schedule.special_destinations},
        {speakers: ROUTER_LINKS.schedule.speakers}
    ],
    exhibit : [
        {exhibitors_info: '/exhibit/exhibitors-info'},
        {exhibitors_brochure: '/exhibit/exhibitors-brochure'},
       { venue_and_travel_info: '/exhibit/venue-and-travel-info'},
        {exhibitors_list: '/exhibit/exhibitors-list'},
    ],
    attend: [
        {register_to_attend: '/attend/register-to-attend'},
        {attendees_info: '/attend/attendees-info'},
        {venue_and_travel_info: '/attend/venue-and-travel-info'},
        {invitation_letter : '/attend/invitation-letter'},
        {visa_application: '/attend/visa-application'},
        {terms_and_conditions: '/attend/terms-and-conditions'},
    ],
}