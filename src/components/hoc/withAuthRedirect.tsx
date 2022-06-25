import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';


interface MapStateToPropsType {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: RootState) => ({
    isAuth: state.auth.isAuth   
})

export const withAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component<MapStateToPropsType> {
        render(){        
            if(!this.props.isAuth) {
                return ( <Navigate to={'/login'} /> )
            } 
   

            return (<Component {...this.props} />)    
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}