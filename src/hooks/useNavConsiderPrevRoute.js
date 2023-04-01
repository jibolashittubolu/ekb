import { useLocation, useNavigate } from "react-router-dom"



export const useNavConsiderPrevRoute = (to_url) => {
    //very useful for protected routes, 
    //for experiment, we can use this and always set the back button to navigate to the previous route
    const navigate = useNavigate()
    const location = useLocation()

    const navAndAddPrevLocation = (to_url) => {
        navigate(
            to_url, 
            {state: 
                {...location.state, was_prev_goingTo: to_url}
            }
        ) 
    }
    //for example if we are trying to navigate to login page
    //from settings page and we are then redirected to login page because we are unauthenticated
    //the nav will store the settings route and finally when we authenticate and try to navigate, we will be redirected to the settings page

    const navAndUsePrevLocation = (to_url) => {
        //must have used navAndAddLocation, lest this will work as a regular navigate function
        if(location?.state?.was_prev_goingTo){
            //if we specified somewhere before we were rerouted for authentication?
            navigate(location.state.was_prev_goingTo)
        }
        else{
            navigate(to_url)
        }
    }

    return {
        navAndAddPrevLocation,
        navAndUsePrevLocation
    }

}


