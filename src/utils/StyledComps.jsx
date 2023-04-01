import { themePickers } from './Utils'


export const UL = ({children, style, className, onClick}) => {
    return(
        <ul
                className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </ul>
    )
}

// INLINE

export const A = ({children, style, href, rel, target, className, onClick}) => {
    return(
        <a        className={className}
        onClick={onClick}
        style={themePickers(style)}
        href={href}
        rel={rel}
        target={target}
        >
            {children}
        </a>
    )
}

export const LI = ({children, style, className, onClick}) => {
    return(
        <li        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </li>
    )
}


export const SPAN  = ({children, style, className, onClick}) => {
    return(
        <span        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </span>
    )
}

// BLOCK LEVEL

export const DIV  = ({children, style, className, onClick}) => {
    return(
        <div
        onClick={onClick}
        className={className}
        style={themePickers(style)}
        >
            {children}
        </div>
    )
}

export const H1 = ({children, style, className, onClick}) => {
    return(
        <h1 
                className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h1>
    )
}

export const H2 = ({children, style, className, onClick}) => {
    return(
        <h2        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}
export const H3 = ({children, style, className, onClick}) => {
    return(
        <h2        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}
export const H4 = ({children, style, className, onClick}) => {
    return(
        <h2        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}
export const H5 = ({children, style, className, onClick}) => {
    return(
        <h2        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}

export const H6 = ({children, style, className, onClick}) => {
    return(
        <h2
                className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}

export const SECTION = ({children, style, className, onClick}) => {
    return(
        <section 
                className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </section>
    )
}

export const P = ({children, style, className, onClick}) => {
    return(
        <p 
        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </p>
    )
}

export const ABBR = ({children, style, className, title, onClick}) => {
    return(
        <abbr
        title={title}
        className={className}
        onClick={onClick}
        style={themePickers(style)}
        >
            {children}
        </abbr>
    )
}




// const AppInt = () => {
// //   const {theme} = useTheme()

// //   console.log(theme)
  
//   return (
//         <div className='main-box' 
//         style={themePickers({width:'100%', height:'100%'})}>
//             <div 
//             id="container--main" 
//             >
//                 <Toggle />
//                 <section 
//                 id="wrapper--hero" className="section--page">
//                     {/* <img id="profile-pic" src="./assets/images/profile_pic.jpg"> */}

//                     <div 
//                     >
//                         <h1 style={{fontSize:'48px', lineHeight: '1em'}} >
//                             Moboluwarin Jibola-Shittu
//                         </h1>
//                         <p 
//                         id="bio">Fullstack software developer and a cross-functionally adaptive team player.
//                         </p>
//                         <p 
//                         id="email"
//                         // style={{fontSize:'5rem'}}
//                         >👉 jibolashittubolu@gmail.com</p>
//                     </div>  
//                 </section>

//                 <section className="section--page"
//                 >
//                     <div 
//                     id="socials--list">
//                         <A 
//                         href="https://www.linkedin.com/in/jibolashittubolu/" target="_blank" rel='noreferrer'>Linkedin</A>
//                         <A 
//                         href="https://twitter.com/mazithechief" target="_blank" rel='noreferrer'>Twitter</A>
//                         <A 
//                         href="https://github.com/jibolashittubolu" target="_blank" rel='noreferrer'>Github</A>
//                         <A 
//                         href="./assets/resume.pdf" target="_blank">Download Resume</A>
//                     </div>
//                 </section>

//                 <section 
//                 className="section--page"
//                 >
//                     <h2
//                     >Skills & Qualifications</h2>
//                     <ul id="qualifications--list"
                    
//                     >
//                         <li
                        
//                         >✔️ 4+ Years experience with front & backend development</li>
//                         <li
                        
//                         >✔️ Proficient knowledge in API & Database Design.</li>
//                         <li
                        
//                         >✔️ Quick grasp of emerging technologies and stacks</li>
//                         <li
                        
//                         >✔️ Fullstack (React, Node.js, MongoDB, Express, Next, PostgreSQL, Frontend, Backend, API)</li>
//                     </ul>
//                 </section>

//                 <section className="section--page"
                
//                 >
//                     <h2
                    
//                     >Tech stack</h2>

//                     <div id="wrapper--techstack__items"
                    
//                     >
//                         <div className="card--techstack"
                        
//                         ><span 
                        
//                         >React, Next JS</span></div>
//                         <div className="card--techstack"
                        
//                         ><span
                        
//                         >JavaScript, NodeJS, Express</span></div>
//                         <div className="card--techstack"
                        
//                         ><span
                        
//                         >PostgreSQL, MongoDB, Python</span></div>
//                         <div className="card--techstack"
                        
//                         ><span
                        
//                         >SASS, SCSS, Material-UI, Bootstrap</span></div>
//                     </div>
//                 </section>

//                 <section id="work-history-wrapper" className="section--page"
                
//                 >
//                     <h2
                
//                     >Work History</h2>

//                     <div className="line-break"
                
//                     ></div>
//                     <div className="card--work-history"
                
//                     >
//                         <strong
                
//                         >🚧 Web Developer, BeCreative Imaginations Ltd.</strong>
//                         <p
                
//                         >01/2020 - 04/2020</p>
//                         <p
                
//                         >Worked on providing an online presence for the firm through the use of web development and deployment technologies - hence, providing an online availability </p>
//                     </div>


//                     <div className="card--work-history"
                
//                     >
//                         <strong
//                         >🚧 Web and IT Support Engineer</strong>
//                         <p
                
//                         >07/2021 - 01/2022</p>
//                         <p
                
//                         >Utilized and improved on existing internal web technologies.</p>
//                         <ul
                
//                         >
//                             <li
                
//                             >Added Security patches and mechanisms to protect confidential files</li>
//                             <li
                
//                             >Developed an online repository/web app for managing internal organization files</li>
//                             <li
                
//                             >Utilized and tested existing web technologies</li>
//                             <li
                
//                             >Configuration, management and integration of new and existing web technologies</li>
//                             <li
                
//                             >Provided makeshift training for fresh interns in the use of web technologies</li>
//                         </ul>
//                     </div>

//                 </section>

//                 <section className="section--page"
//                 >
//                     <h2 className="h2-special"
//                     >Projects & Portfolio</h2>
//                     <div className="card--project"
//                     >
//                         <A href="project1.html" rel='noreferrer'
//                         ><span
//                         >🏆 </span>Developed a booking and reservation app  plus Payment integration analogous to Booking.com</A>
//                     </div>

//                     <div className="card--project"
                
//                     >
//                         <A href="project1.html" 
                
//                         ><span
                
//                         >🏆 </span>Developed a fully functional and responsive Pizza ordering web app with payment integration </A>
//                     </div>

//                     <div className="card--project"
                
//                     >
//                         <A href="project1.html" 
                
//                         ><span
                
//                         >🏆 </span>Developed a fullstack social network application where content creators, users can document and share their stories</A>
//                     </div>

//                     <div className="card--project"
                
//                     >
//                         <A href="project1.html"
                
//                         ><span
                
//                         >🏆 </span>Developed a video streaming application (analogous to Netflix, Youtube)</A>
//                     </div>

//                     <div className="card--project"
                
//                     >
//                         <A href="project1.html"
                
//                         ><span
                
//                         >🏆 </span>Developed a fun trivia app where users are advertently limited to learning not more than one fact per day to aid memory juggling </A>
//                     </div>

//                     <div className="card--project"
//                     style={themePickers()}
//                     >
//                         <A href="project1.html"
                
//                         ><span
                
//                         >🏆 </span>Developed an admin app for adding, recording and managing inventory</A>
//                     </div>

//                 </section>
                
//                 <section
//                 className="section--page"
//                 >
//                     <h2>Education</h2>
//                     <p>Obafemi Awolowo University</p>
//                     <h5>Computer Science with Economics (BSc) </h5>

//                 </section>
        
//             </div>
//         </div>

//   )
// }
