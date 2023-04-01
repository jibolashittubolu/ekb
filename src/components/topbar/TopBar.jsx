import React, {useEffect, useRef, useState} from 'react'
import { Facebook , Twitter, Pinterest, Instagram, Search, Brightness6, Close, ScatterPlot, CalendarMonth, Apartment, FilterVintage, Yard, AccountBalance, ContactMail, NotificationAdd, ArrowDropDown, WhatsApp, ListAltOutlined, ListAltTwoTone, ListAltSharp, MenuOutlined, ArrowDropUp, Home, DateRange, LiveHelp, Rsvp, Loyalty, Slideshow, Bookmark, CloseOutlined} from '@mui/icons-material';
import "./topbar.scss";

import {useNavigate, Link, useLocation} from "react-router-dom";
import {MenuIcon1} from '../navDrawer/NavDrawer'
import { useNavConsiderPrevRoute } from '../../hooks/useNavConsiderPrevRoute';
import logo_trans_96 from '../../assets/images/logo_trans_96.png'
import { useTheme } from '../../contexts/ThemeContext';
import { LI } from '../../utils/StyledComps';


import splash from '../../assets/imgs/splash_screen.jpg'
import { List, ListItemIcon, Menu } from '@mui/material';

function TopBar() {
    const outsideTopbarRef = useRef()
    const outsideSidebarRef = useRef()
    const [topBarOpened, setTopBarOpened] = useState(false)
    const [sideBarOpened, setSideBarOpened] = useState(false)
    const PublicFolderURL = "http://localhost:5000/submittedimages/"

    const [themeChooserUI, setThemeChooserUI] = useState(false)
 

    // we assign the user variable to the userIsLoggedIn. 
    //Why? Because I am too lazy to go to the components and set them back to user
    // console.log(userIsLoggedIn)

    const navigate = useNavigate()
    const [isScrolled, setisScrolled] = React.useState(false)
    const {navAndAddPrevLocation} = useNavConsiderPrevRoute()
    // window.onscroll = () => {
    //     setisScrolled(window.pageYOffset === 0 ? false : true)
    //     return () => (window.onscroll = null)
    // }

    const resetThemeChooserUI = () => {
        setThemeChooserUI(false)
        // setTopBarOpened(!topBarOpened)
    }

    const resetTopbar= () => {
        setTopBarOpened(false)
        // resetThemeChooserUI()
        // alert('heyt')
        // setSideBarOpened(false)
    }
    const resetSideBar = () => {
        // setSideBarOpened(!sideBarOpened)
        setSideBarOpened(false)
    } 

    

    const closeTopbarFromOutside = async (event) => {
        if (
            // topBarOpened 
            outsideTopbarRef.current.contains(event.target) 
            ){
            //     alert('hello')
            await resetTopbar()

            //the topbar must be open and
            //the click must be at any point where the modal itself is positioned

            // && modalOuterRef.current.contains(event.target) && 
        }
    }
    const closeSidebarFromOutside = async (event) => {
        if (
            // topBarOpened 
            outsideSidebarRef.current.contains(event.target) 
            ){
            //     alert('hello')
            await resetSideBar()

            //the topbar must be open and
            //the click must be at any point where the modal itself is positioned

            // && modalOuterRef.current.contains(event.target) && 
        }
    }


    const scrollListenerFunction = () => {
        // var calls_debounce =0;
        // var calls_throttle =0;
        const meatCode = () => {
            // calls_debounce++
            // calls_throttle++
            
            // if (window.innerWidth >= 620){
            //     setTopBarOpened(false)
            // }
            window.onscroll = async () => {
                //always close the navbar when we scroll
                if (window.pageYOffset === 0){
                   await resetTopbar()
                   setisScrolled(false);
                   resetSideBar()

                //    setSideBarOpened(false);
                }
                else if (window.pageY !== 0){
                    await resetTopbar()
                    setisScrolled(true)
                    resetSideBar()
                    // setSideBarOpened(false)
                }
                // setisScrolled(window.pageYOffset === 0 ? false : true)
                return () => (window.onscroll = null)
            }
            // console.log(
            //     'calls_debounce: ',calls_debounce, ' ', 
            //     'calls_throttle: ', calls_throttle
            // )
        }
        
        const throttle = () => {
            //we use throttling here
            const delay_throttle = 100;
            let throttled = false;
            
            if (!throttled){
                meatCode();
                throttled = true;
                setTimeout(()=>{throttled=false}, delay_throttle)
            }
        }

        const debounce = () => {
            //we use debouncing here
            //debounce starts
            const delay_debounce = 100;
            let timeout = false;
        
            clearTimeout(timeout);
            timeout = setTimeout(meatCode, delay_debounce)
            //debounce ends
        }
        
        debounce()
        // throttle()
        // meatCode()


    }
    
    useEffect(() => {
        // listenerFunctions();
       window.addEventListener('scroll', scrollListenerFunction);

      return () => {
        listenerFunctions()
        window.removeEventListener('scroll', scrollListenerFunction)
      }
    }, [])

    const listenerFunctions = () => {
        //this one listens for resizing
        // var calls_debounce =0;
        // var calls_throttle =0;
        const meatCode = () => {
            // calls_debounce++
            // calls_throttle++
            
            if (window.innerWidth >= 620){
                setTopBarOpened(false)
            }
            // console.log(
            //     'calls_debounce: ',calls_debounce, ' ', 
            //     'calls_throttle: ', calls_throttle
            // )
        }
        
        const throttle = () => {
            //we use throttling here
            const delay_throttle = 100;
            let throttled = false;
            
            if (!throttled){
                meatCode();
                throttled = true;
                setTimeout(()=>{throttled=false}, delay_throttle)
            }
        }

        const debounce = () => {
            //we use debouncing here
            //debounce starts
            const delay_debounce = 100;
            let timeout = false;
        
            clearTimeout(timeout);
            timeout = setTimeout(meatCode, delay_debounce)
            //debounce ends
        }
        
        debounce()
        // throttle()
        // meatCode()


    }
    
    useEffect(() => {
        // listenerFunctions();
       window.addEventListener('resize', listenerFunctions);

      return () => {
        listenerFunctions()
        window.removeEventListener('resize', listenerFunctions)
      }
    }, [window.innerWidth])


    const Content = () => {
        const navigate = useNavigate()

        const navigateAndResetTopbarOpened = (route) => {
            setTopBarOpened(!topBarOpened)
            navigate(route)
        }
        const nartO = async (route) => {
            await navigateAndResetTopbarOpened(route)
            resetThemeChooserUI()
        }

        const openSideBar = async () => {
            await resetTopbar()
            setSideBarOpened(true)
        }

        return (
            <div 
            ref={outsideTopbarRef}
            className='menu-icon-content-container'>
                <div 
                className='menu-icon-content'
                style={{
                    // display:'flex', 
                    flexDirection:'column', 
                    gap:'1rem',
                    // backgroundColor:'lightgray'
                }}>
                    <div 
                    className='dummy-fill-mic'
                    style={{
                        height:'2%'
                    }}>

                    </div>
                    <ul className='ul'>
                        <LI
                        className='li'
                        onClick={() => nartO('/schedule')}>Schedule <span><CalendarMonth/></span></LI>
                        <LI
                        className='li'
                        onClick={() => nartO('/establishment')}>Establishment <span><Apartment/></span></LI>
                        <LI
                        className='li'
                        onClick={() => nartO('/exhibit')}>Exhibit <span><Yard/></span></LI>
                        <LI 
                        className='li'
                        onClick={() => nartO('/sponsors')}>Sponsors<span><AccountBalance/></span></LI>
                        <LI 
                        className='li'
                        onClick={() => nartO('/contact')}>Contact<span><ContactMail/></span></LI>
                        <LI
                        className='li'
                        onClick={() => nartO('/notify')}>Get Notified<span><NotificationAdd/></span></LI>
                    </ul>
                </div>
                <div 
                className='outside-menu-icon-content'
                onClick={(event)=>closeTopbarFromOutside(event)}>
                    {/* a dummy div to fill the remaining available screen space */}
                </div>
            </div>
        )
    } 

    const ThemeChooserComponent = () => {
        const {dispatch} = useTheme()

        const changeTheme = (color) => {
            dispatch({
                type:'TOGGLE',
                payload: color
            })
            setThemeChooserUI(false)
        }
 
        return (  
            <div
            className='tChooser-ui-wrap'>
                <div className='tChooser-ui-cont'>
                    <ul className='tChooser-ui-list'>
                        <li 
                        onClick={() => changeTheme('pink')}
                        style={{backgroundColor:'red', color:'white'}}
                        className='tChooser-ui-item'>Red</li>

                        <li 
                        onClick={() => changeTheme('#74D2DE')}
                        style={{backgroundColor:'blue', color:'white'}}
                        className='tChooser-ui-item'>Blue</li>

                        <li 
                        onClick={() => changeTheme('#fec200')}
                        style={{backgroundColor:'yellow', color:'black'}}className='tChooser-ui-item'>Yellow</li>
    
                        <li 
                        onClick={() => changeTheme('lime')}
                        style={{backgroundColor:'green',color:'white'}}className='tChooser-ui-item'>Green</li>
                        

                        <li 
                        onClick={()=>changeTheme('#f5f5dc')}
                        style={{backgroundColor:'beige', color:'black'}}
                        className='tChooser-ui-item'>Default</li>
                    </ul>
                </div>
            </div>
        )
    }


    return (
            <div className={
                isScrolled === true ? "top" : "top isNotScrolled"
                }>
                <div
                className='menu-icon-1'
                >
                <MenuIcon1 
                opened={topBarOpened} 
                setOpened={setTopBarOpened}
                resetThemeChooserUI = {resetThemeChooserUI}
                styler={{
                    backgroundColor: '#2f2544',
                    width:'2rem'
                }}
                />
                </div>
                {
                    topBarOpened && 
                    <Content />
                }
                <div className="topRight"
                onClick={() => navigate('/')}>
                    <span
                    className='tr-dummy-span'>

                    </span>
                    <a href='/'
                    className='topRight-real-stuff'>
                        <div className='tb-ekaabo-imgCont'>
                            <img
                            className='tb-ekaabo-img'
                             src={logo_trans_96} alt='Ekaabo logo' />
                        </div>
                    </a>
                </div>
                <div className="topCenter">
                    <ul className="topCenterList">
                        <LI
                            onClick={() => navigate('/schedule')} className="topCenterListItem">
                            <a href='/schedule'>SCHEDULE</a>
                        </LI>
                        <LI
                        onClick={() => navigate('/establishment')} 
                        className="topCenterListItem">
                        <a href='/establishment'>ESTABLISHMENT</a>
                        </LI>
                        <LI
                        onClick={() => navAndAddPrevLocation('/exhibit')} 
                        className="topCenterListItem">
                        <a href='/exhibit'>EXHIBIT</a>
                        </LI>
                        <LI 
                        onClick={() => navigate('/sponsors')} 
                        className="topCenterListItem">
                        <a href='/sponsors'>SPONSORS</a>
                        </LI>                        <LI
                        onClick={() => navigate('/contact')} 
                        className="topCenterListItem">
                        <a href='/contact'>CONTACT</a>
                        </LI>
                    </ul>
                </div>

                <div className="topLeft-mobile">
                    <span
                    className='topLeft-mobile-real'
                    onClick={() => {setThemeChooserUI(!themeChooserUI); setTopBarOpened(false)} }>
                    
                    {
                        themeChooserUI ?
                        <Close /> :
                        <>
                        <abbr title='click to change the theme/color' className='topLeftIcon tlmi'>
                        <Brightness6 className='topLeftIcon tlmi' />
                        </abbr>
                        <abbr title='click to change the theme/color'>
                            <span className='adropd'><ArrowDropDown/></span>
                        </abbr>
                        </>
                    }
                    </span>
                    <span className='topLeft-mobile-dummy'>

                    </span>
                </div>
                {
                    themeChooserUI &&
                    <ThemeChooserComponent />
                }

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
        schedule: !false,
        // book_a_stand: false,
        exhibit: !false,
        // sponsors: false,
        attend: !false,
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
                                <span className='trb-right-item'>BOOK A STAND</span>
                                <span className='trb-right-item'>SPONSOR</span>
                                <span className='trb-right-item'>REGISTER TO ATTEND</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='topbar-bottom'>
                <span className='topbar-bottom-item'>
                    <span>HOME</span>
                </span>
                <span className='topbar-bottom-item'>
                    <span>SCHEDULE</span>
                    <ArrowDropDown />
                </span>
                <span className='topbar-bottom-item'>BOOK A STAND</span>
                <span className='topbar-bottom-item'>
                    <span>EXHIBIT</span>
                    <ArrowDropDown />
                </span>
                <span className='topbar-bottom-item'>SPONSORS</span>
                <span className='topbar-bottom-item'>
                    <span>ATTTEND</span>
                    <ArrowDropDown />
                </span>
                <span className='topbar-bottom-item'>CONTACT</span>
                <span className='topbar-bottom-item'>FAQ</span>
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
                        <CloseOutlined />
                        // </span> 
                        :
                        <MenuOutlined /> 
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
                            onClick={()=> navigateMobileMenu('/schedule/sessions')}
                            >SESSIONS</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/schedule/workshops')}>WORKSHOP</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/schedule/speakers')}>SPEAKERS</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/schedule/special-destinations')}>SPECIAL DESTINATIONS</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item mobile-menu-bookstand' onClick={()=> navigateMobileMenu('/book-a-stand/stand-form')}>
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
                            onClick={()=> navigateMobileMenu('/exhibit/exhibitors')}>EXHIBITORS</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/exhibit/download-brochure')}>DOWNLOAD BROCHURE</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/exhibit/exhibitors-list')}>VENUE & TRAVEL INFO</span>
                            <span>EXHIBITORS LIST</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item sponsorsT'
                    onClick={()=> navigateMobileMenu('/sponsors/download-brochure')}>
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
                            onClick={()=> navigateMobileMenu('/attend/attendees-info')}>ATTENDEES INFO</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/attend/venue-and-travel-info')}>VENUE AND TRAVEL INFO</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/attend/invitation-letter')}>INVITATION LETTER</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/attend/visa-application')}>VISA APPLICATION</span>
                            <span 
                            onClick={()=> navigateMobileMenu('/attend/terms-and-conditions')}>TERMS & CONDITIONS</span>
                        </ul>
                        }
                    </div>

                    <div 
                    className='mic-item contact'
                    onClick={()=> navigateMobileMenu('/contact/contact-information')}>
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
                    onClick={()=> navigateMobileMenu('/faq/list-of-faq')}>
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
