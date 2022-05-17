import styles from './ToggleButton.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../App';


const ToggleButton = () =>{
    const theme = useContext(ThemeContext).theme;
    const setTheme = useContext(ThemeContext).setTheme;

    const changeTheme = (theme) =>{
        //mengubah tema dari toggleButton
        // TODO: answer here
        setTheme(theme === 'light' ? 'dark': 'light');
    }

    const renderToggleButtonText = (theme) =>{
        //mengubah tulisan dari toggleButton
        // TODO: answer here
        return theme === 'light' ? 'Toggle Dark Theme': 'Toggle Light Theme';
    }

    return(
        <div className={styles['toggle-button__container']}>
            <label className={styles['switch']}>
                <input data-testid="toggle-button" className={styles['input']}  type="checkbox" onChange={()=>{changeTheme(theme)}}/>
                <span className={`${styles['slider']} ${styles['round']}`}></span>
            </label>
            <p data-testid="toggle-button-text">{renderToggleButtonText(theme)}</p>
        </div>
    )
}

export default ToggleButton;