import './navDrawer.scss'


export const MenuIcon1 = ({opened, setOpened, resetThemeChooserUI, content, styler}) => {
    
    const handleToggle = () => {
        resetThemeChooserUI(false)
        if (!setOpened){
            alert('set a toggler')
            opened = !opened;
            return ;
        }
        setOpened(prev => !prev)
    }

    return (
        <div
        onClick={() => {handleToggle()}}
        className='chief-container'
        style={{
            display: styler ? styler.display : 'block',
            // width: styler ? styler.width : 'inherit'
        }}
        >
            <div 
            
            className='main-container'
            style={{
                backgroundColor: styler ? styler.backgroundColor : 'inherit'
            }}
            >
                <div 
                // style={{left: toggle.icon ? '1.5rem' : 0}}
                style={{
                    transform: opened ? 'translateX(-2rem)' : 'translateX(-0rem)',
                    // animation: toggle.icon && 'move 1s ease-in-out',
                    // animationFillMode: 'forwards'
                    // overflow:'hidden'
                        backgroundColor: styler ? styler.backgroundColor : 'inherit'
                    
                }}
                className='main-container-2'>
                    <div
                    className='menuIconWrapper'
                    style={{
                        backgroundColor: styler ? styler.backgroundColor : 'inherit'
                    }}>
                        <div className='menuIconLine'></div>
                        <div className='menuIconLine'></div>
                        <div className='menuIconLine'></div>
                    </div>
                    <div
                    className='menuIcon-closer'
                    style={{
                        backgroundColor: styler ? styler.backgroundColor : 'inherit'
                    }}
                    >
                        ✕
                    </div>
                </div>
            </div>
            {opened && content}
        </div>
    )


}
