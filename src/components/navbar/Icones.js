export default function Icones(){
    const iconNames = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
    return(
        <div class="icones">
            {iconNames.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

