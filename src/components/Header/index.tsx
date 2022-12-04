import { 
    StyledHeader,
    HeaderContent ,
    StyledH1 , 
    SwitchThemes
} from './header.styles';
import {
    Container
 } from '../../Global.style';

 
type PropsTypes = {
    clickEvent : () => void
}


function Header(props : PropsTypes) {
    return (
        <StyledHeader>
            <Container>
                <HeaderContent>
                    <StyledH1>
                        Where in the world?
                    </StyledH1>
                    <SwitchThemes onClick={props.clickEvent}>
                        Dark Mode
                    </SwitchThemes>
                </HeaderContent>
            </Container>
        </StyledHeader>
    );

}
export default Header;