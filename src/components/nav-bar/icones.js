export default function Icones(){
    return(
        <div class="icones">
            <Icone icon="paper-plane-outline" />
            <Icone icon="compass-outline" />
            <Icone icon="heart-outline" />
            <Icone icon="person-outline" />
        </div>
    );
}

function Icone(props){
    return(
        <ion-icon name={props.icon}></ion-icon>
    );
}