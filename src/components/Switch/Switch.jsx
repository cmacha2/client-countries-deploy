import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../Redux/actions';
import { ContainerSwitch, InputCheckBox, LaberlSwitch, LaberTheme, SpanSlider } from './Switch.css';

export default function Switch() {
     const theme = useSelector(state => state.theme);
     const dispatch = useDispatch();

     useEffect(() => {
      var data = window.localStorage.getItem('MY_CURRENT_MODE')
      if(data!==null)dispatch(switchTheme(JSON.parse(data)))
     }, []);

    useEffect(() => {
      window.localStorage.setItem('MY_CURRENT_MODE', JSON.stringify(theme))
    }, [theme]);
    
  return (
    <ContainerSwitch>
    <LaberTheme htmlFor="theme" > {theme ? "Light Mode" : "Dark Mode" } </LaberTheme>
     <LaberlSwitch>
     <InputCheckBox type="checkbox" name="theme" id="theme" onChange={()=>dispatch(switchTheme(!theme))}/>
     <SpanSlider id='changeMode' ></SpanSlider>
     </LaberlSwitch>
     </ContainerSwitch>
  )
}

