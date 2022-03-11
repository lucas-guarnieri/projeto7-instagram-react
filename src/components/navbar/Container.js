import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import InstagramMobile from "./InstagramMobile";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile";

export default function Container(){
    return(
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
} 