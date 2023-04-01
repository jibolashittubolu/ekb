import { useTheme } from "../contexts/ThemeContext";


export const TextColorPicker = (color) => {
    const {colorTheme} = useTheme()
    //colorTheme is basically background colors
    //put the context
    // let any_variants = null;
    //we can modify and return any_variants finally
    //green #22C488
    //green #f5f5dc //beige
    //red #a70331
    //yellow #fec200

    //purple #2f2544
    let red = '#a70331'
    let blue = '#74D2DE'
    let yellow = '#fec200'
    let purple = '#2f2544'
    let white = '#ffffff'
    let black = '#000000'
    let green = '#f5f5dc'
    

    if(color){
        return color
    }

    else if(colorTheme){
        if(colorTheme === red){
            return red
        }
        if(colorTheme === blue){
            return blue
        }
        if(colorTheme === yellow){
            return yellow
        }
        if(colorTheme === purple){
            return purple
        }
        if(colorTheme === white){
            return white
        }
        if(colorTheme === black){
            return black
        }
        if(colorTheme === green){
            return green
        }

        return colorTheme
    }
    else{
        return '#000'
    }

}

export const BorderColorPicker = (color) => {
    const {colorTheme} = useTheme()
    // let any_variants = null;
    //we can modify and return any_variants finally

    let red = '#a70331'
    let blue = '#74D2DE'
    let yellow = '#fec200'
    let purple = '#2f2544'
    let white = '#ffffff'
    let black = '#000000'
    let green = '#f5f5dc'

    if(color){
        return color
    }
    else if(colorTheme){
        if(colorTheme === red){
            return 'white'
        }
        if(colorTheme === blue){
            return 'white'
        }
        if(colorTheme === yellow){
            return 'black'
        }
        if(colorTheme === purple){
            return 'white'
        }
        if(colorTheme === green){
            return 'black'   
        }
        if(colorTheme === white){
            return 'black'
        }
        if(colorTheme === black){
            return 'white'
        }

        return colorTheme
    }
    else{
        return '#2b3031'
    }
}

export const BackgroundColorPicker = (color) => {
    const {colorTheme} = useTheme()
    // let any_variants = null;
    //we can modify and return any_variants finally

    let red = '#a70331'
    let blue = '#74D2DE'
    let yellow = '#fec200'
    let purple = '#2f2544'
    let white = '#ffffff'
    let black = '#000000'
    let green = '#f5f5dc'

    if(color){
        return color
    }
    else if(colorTheme){
        if(colorTheme === red){
            return 'white'
        }
        if(colorTheme === blue){
            return 'black'
        }
        if(colorTheme === yellow){
            return 'black'
        }
        if(colorTheme === purple){
            return 'white'
        }
        if(colorTheme === green){
            return 'black'   
        }
        if(colorTheme === white){
            return 'black'
        }
        if(colorTheme === black){
            return 'white'
        }

        return colorTheme
    }
    else{
        return '#f9fafb'
    }
}

export const themePickers = (otherStyles) => {
    //will provide the styles based on darkTheme or not
    //but also permit the addition of additional styles
    return {
        color: TextColorPicker(),
        // backgroundColor: BackgroundColorPicker(),
        borderColor: BorderColorPicker(),
        ...otherStyles
        //otherStyles will overwrite the rest elements if provided
        //but we must provide an object as themePickers parameter if any
    }
}

export const changeTheme = (color) => ({
    type:'TOGGLE',
    payload: color
})

// dispatch(changeTheme('yellow'))

