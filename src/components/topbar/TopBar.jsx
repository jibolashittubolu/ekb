import React, {useEffect, useRef, useState} from 'react'
import { Facebook, Instagram,  ContactMail, NotificationAdd, ArrowDropDown, WhatsApp, ListAltOutlined, ListAltTwoTone, ListAltSharp, MenuOutlined, ArrowDropUp, Home, DateRange, LiveHelp, Rsvp, Loyalty, Slideshow, Bookmark, CloseOutlined, Diversity2Sharp} from '@mui/icons-material';
import "./topbar.scss";

import { ROUTER_LINKS, ROUTER_LINKS_ARRAY } from '../../utils/ROUTER_LINKS';

import {useNavigate, Link} from "react-router-dom";



import splash from '../../assets/imgs/ekb.PNG'
import { List, ListItemIcon, Menu } from '@mui/material';

const DesktopTopbarModal = ({route_array, toggleFunction}) => {
    const schedule1 = {
        sessions: ROUTER_LINKS.schedule.sessions,
        workshops: ROUTER_LINKS.schedule.workshops,
        special_destinations: ROUTER_LINKS.schedule.special_destinations,
        speakers: ROUTER_LINKS.schedule.speakers
    }

    return (
        <div className='desktop-topbar-dropdown'>
            {/* <div onClick={toggleFunction()}>Close</div> */}
            <div className='dtdl-cont'>
            {
                route_array.map((route, index) => (
                    <Link
                    className='desktop-topbar-dropdown-link link'
                    to={route[ `${(Object.keys(route)[0])}` ]  }
                    // provides the value
                    key={index}
                    >
                        {/* <li> */}

                        {(Object.keys(route)[0]).toUpperCase()}
                        {/* </li> */}
                        {/* Provides the key */}
                    </Link>
                ))
            }
            </div>
        </div>
    )
}

const TopBar1 = () => {
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [mobileMenu, setMobileMenu] = useState({
        dropDownOpen: !true,
        // home: true,
        schedule: false,
        // book_a_stand: false,
        exhibit: false,
        // sponsors: false,
        attend: false,
        // contact: false,
        // faq: false
    })

    const toggleMobileMenu = () => {
        console.log('fire toggle')
        // return ''
        setMobileMenu(prev => ({...prev,dropDownOpen: !prev.dropDownOpen}) )
    }

    const modifyMobileMenu = (section) => {
        console.log('fire modify')
        setMobileMenu( prev => ({
            ...prev,
            // dropDownOpen: true
            [section] : !prev[`${section}`]
        }))
    }

    const navigateMobileMenu = (route) => {
        scrollToTop()
        setMobileMenu(prev => ({...prev,dropDownOpen: false}) )
        navigate(`${route}`)
    }

    const [desktopMenu, setDesktopMenu] = useState({
        dropDownOpen: true,
        // home: true,
        schedule: false,
        // book_a_stand: false,
        exhibit: false,
        // sponsors: false,
        attend: false,
        // contact: false,
        // faq: false
    })

    const toggleDesktopDropDown = (menu_section)=>{
        setDesktopMenu(prev => (
            {
                schedule: false,
                exhibit: false,
                attend: false,
                // dropDownOpen: !prev.dropDownOpen,
                [menu_section]: !prev[menu_section]

            }
        ))
        // setDesktopDropDownOpen(prev => (!prev))
    }

    return(
        <div className='topbar'>
            <div className='topbar-top'>
                <div className='topbar-left'>
                    <div className='topbar-left-cont'>
                        <div className='topbar-left-item'>
                            <span>25-26th July 2023</span>
                        </div>
                        <div className='topbar-left-item'>
                            <span>International Conference Center,</span>
                        </div>
                        <div className='topbar-left-item'>
                            <span>University of Ibadan, Oyo State, Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className='topbar-center'>
                    {/* center */}
                    <div className="topbar-center-img-cont">
                        <Link to='/'>
                            <img className="topbar-center-img" src={splash} alt='logo'/>
                        </Link>
                    </div>
                </div>
                <div className='topbar-right'>
                    <div className='topbar-right-top'>

                        <div className='trr-top'>
                             <div className='trr-top-black'>Contact</div>
                             <div className='trr-top-icons'>
                                <a 
                                className='trrt-icon'
                                href='https://instagram.com' target="_blank" rel="noreferrer">
                                    <span ><Instagram /></span>
                                </a>
                                <a 
                                className='trrt-icon'
                                href='https://facebook.com' target="_blank" rel="noreferrer">
                                    <span ><Facebook /></span>
                                </a>
                                <a 
                                className='trrt-icon'
                                href='https://wa.me/+2347034701104' target="_blank" rel="noreferrer">
                                    <span ><WhatsApp /></span>
                                </a>
                            </div>
                        </div>
                        <div className='trr-bottom'>
                            
                        </div>
                    </div>

                    <div className='topbar-right-bottom'>
                        <div className='trb-left'>
                            <div className='trb-left-list'>
                                <li className='trb-left-item'>Over 250 Exhibitors From Across The World</li>
                                <li className='trb-left-item'>Over 5000 Attendees From Across The World</li>                                
                                <li className='trb-left-item'>Culture, Tourism, Hospitality, Trade</li>
                            </div>
                        </div>
                        <div className='trb-right'>
                            <div className='trb-left-list'>
                                <Link 
                                to={ROUTER_LINKS.book_a_stand.stand_form}
                                className='trb-right-item link'
                                >BOOK A STAND</Link>
                                <Link
                                className='trb-right-item link'
                                to={(ROUTER_LINKS.sponsors.be_a_sponsor)}>SPONSOR</Link>
                                <Link 
                                className='trb-right-item link'
                                to={ROUTER_LINKS.attend.register_to_attend}                   >REGISTER TO ATTEND</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='topbar-bottom'>
                <Link 
                className='topbar-bottom-item link'
                to='/'>
                    <span>HOME</span>
                </Link>
                <div
                className='topbar-bottom-item link' 
                onClick={()=> toggleDesktopDropDown('schedule')}
                >
                    <span>SCHEDULE</span>
                    {   
                        desktopMenu.schedule ?
                        <ArrowDropUp /> :
                        <ArrowDropDown />
                    }
                    {
                    desktopMenu.schedule &&
                    <DesktopTopbarModal 
                    route_array={ROUTER_LINKS_ARRAY.schedule}
                    toggleFunction = {toggleDesktopDropDown}
                    />
                    }
                </div>
                <Link 
                className='topbar-bottom-item link book-stand-link-desktop'
                to={ROUTER_LINKS.book_a_stand.stand_form}>BOOK A STAND</Link>
                <div
                className='topbar-bottom-item link' 
                onClick={()=> toggleDesktopDropDown('exhibit')}
                >
                    <span>EXHIBIT</span>
                    {   
                        desktopMenu.exhibit ?
                        <ArrowDropUp /> :
                        <ArrowDropDown />
                    }
                    {
                    desktopMenu.exhibit &&
                    <DesktopTopbarModal 
                    route_array={ROUTER_LINKS_ARRAY.exhibit}
                    toggleFunction = {toggleDesktopDropDown}
                    />
                    }
                </div>
                <Link 
                className='topbar-bottom-item link'
                to={ROUTER_LINKS.sponsors.be_a_sponsor}>SPONSORS</Link>
                <div
                className='topbar-bottom-item link' 
                onClick={()=> toggleDesktopDropDown('attend')}
                >
                    <span>ATTEND</span>
                    {   
                        desktopMenu.attend ?
                        <ArrowDropUp /> :
                        <ArrowDropDown />
                    }
                    {
                    desktopMenu.attend &&
                    <DesktopTopbarModal 
                    route_array={ROUTER_LINKS_ARRAY.attend}
                    />
                    }
                </div>
                <Link
                preventScrollReset={false}
                className='topbar-bottom-item link'
                to={ROUTER_LINKS.contact.contact_information}>CONTACT</Link>
                <Link 
                className='topbar-bottom-item link'
                to={ROUTER_LINKS.faq.list_of_faq}>FAQ</Link>
            </div>
            <div className='topbar-mobile-dropdown'>
                <div 
                className='menu-icon'
                onClick={()=>toggleMobileMenu()}
                >
                    {
                        mobileMenu.dropDownOpen ?
                        // <span className='abdee'>
                        // <ArrowDropUp /> 
                        <CloseOutlined className="tmdm-icon" fontSize="1rem"/>
                        // </span> 
                        :
                        <MenuOutlined className="tmdm-icon"fontSize="1rem"/> 
                    }
                </div>
                {
                mobileMenu.dropDownOpen &&
                <div className='menu-icon-content'>
                    <div
                    onClick={()=> navigateMobileMenu('/')}
                    className='mic-item mobile-menu-home '>
                        <span className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'>
                                    <Home fontSize="24"/>
                                </span>
                                <span>HOME</span>
                            </span>
                            {/* <span><ArrowDropDown/></span> */}
                        </span>
                    </div>

                    <div
                    className='mic-item mobile-menu-schedule' >
                        <span 
                        onClick={()=> modifyMobileMenu('schedule')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><DateRange fontSize="24" /></span>
                                <span>SCHEDULE</span>    
                            </span>
                            {
                                mobileMenu.schedule ?
                                <span><ArrowDropUp/></span>:
                                <span><ArrowDropDown/></span> 
                            }
                        </span>
                        {
                            mobileMenu.schedule &&
                            <ul 
                            className='mobile-menu-schedule-ul'
                            >
                            <span
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.schedule.sessions)}
                            >SESSIONS</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.schedule.workshops)}>WORKSHOP</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.schedule.speakers)}>SPEAKERS</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.schedule.special_destinations)}>SPECIAL DESTINATIONS</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item mobile-menu-bookstand' onClick={()=> navigateMobileMenu(ROUTER_LINKS.schedule.book_a_stand.stand_form)}>
                        <span 
                        onClick={()=> modifyMobileMenu('schedule')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><Bookmark fontSize="24" /></span>
                                <span>BOOK A STAND</span>    
                            </span>

                        </span>
                    </div>

                    <div
                    className='mic-item mobile-menu-exhibit' >
                        <span 
                        onClick={()=> modifyMobileMenu('exhibit')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><Slideshow fontSize="24" /></span>
                                <span>EXHIBIT</span>    
                            </span>
                            {
                                mobileMenu.exhibit ?
                                <span><ArrowDropUp/></span>:
                                <span><ArrowDropDown/></span> 
                            }
                        </span>
                        {
                            mobileMenu.exhibit &&
                            <ul 
                            className='mobile-menu-schedule-ul'
                            >
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.exhibit.exhibitors_info)}>EXHIBITORS</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.exhibit.exhibitors_brochure)}>DOWNLOAD BROCHURE</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.exhibit.venue_and_travel_info)}>VENUE & TRAVEL INFO</span>
                            <span
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.exhibit.exhibitors_list)}>EXHIBITORS LIST</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item sponsorsT'
                    onClick={()=> navigateMobileMenu(ROUTER_LINKS.sponsors.be_a_sponsor)}>
                        <span 
                        onClick={()=> modifyMobileMenu('schedule')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><Loyalty fontSize="24" /></span>
                                <span>SPONSORS</span>    
                            </span>
                            {/* <span><ArrowDropDown/></span> */}
                        </span>
                    </div>

                    <div
                    className='mic-item mobile-menu-attend' >
                        <span 
                        onClick={()=> modifyMobileMenu('attend')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><Rsvp fontSize="24" /></span>
                                <span>ATTEND</span>    
                            </span>
                            {
                                mobileMenu.attend ?
                                <span><ArrowDropUp/></span>:
                                <span><ArrowDropDown/></span> 
                            }
                        </span>
                        {
                            mobileMenu.attend &&
                            <ul 
                            className='mobile-menu-schedule-ul'
                            >
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.attend.attendees_info)}>ATTENDEES INFO</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.attend.venue_and_travel_info)}>VENUE AND TRAVEL INFO</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.attend.invitation_letter)}>INVITATION LETTER</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.attend.visa_application)}>VISA APPLICATION</span>
                            <span 
                            onClick={()=> navigateMobileMenu(ROUTER_LINKS.attend.terms_and_conditions)}>TERMS & CONDITIONS</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item contact'
                    onClick={()=> navigateMobileMenu(ROUTER_LINKS.contact.contact_information)}>
                        <span 
                        onClick={()=> modifyMobileMenu('schedule')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><ContactMail fontSize="24" /></span>
                                <span>CONTACT</span>    
                            </span>
                            {/* <span><ArrowDropDown/></span> */}
                        </span>
                    </div>

                    <div 
                    className='mic-item contact' 
                    onClick={()=> navigateMobileMenu(ROUTER_LINKS.faq.list_of_faq)}>
                        <span 
                        onClick={()=> modifyMobileMenu('schedule')}
                        className='mimmh-cont'>
                            <span>
                                <span className='mimmh-icon'><LiveHelp fontSize="24" /></span>
                                <span>FAQ</span>    
                            </span>
                            {/* <span><ArrowDropDown/></span> */}
                        </span>
                    </div>

                </div>
                }
            </div>
        </div>
    )
}

export default TopBar1
