import React,{useContext} from 'react'
import ButtonSizes from './button'
import HeaderComponent from './header';
import { ThemeContexts } from '../contexts/theme-context';

export default function LayoutComponent() {
    const {nightMode, setNightMode} = useContext(ThemeContexts);
    return (
        <div className={`app-container ${nightMode ? "bk-dark" : "bk-light"}`}>
        <HeaderComponent />
        <ButtonSizes />
        <button onClick={()=>{setNightMode(!nightMode)}}>Switch</button>
      </div>
    )
}
