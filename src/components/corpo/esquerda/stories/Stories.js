import Story from "./Story";
import Setinha from "./Setinha";

export default function Stories(){
    const dadosStories = [
        {
            imagem: "assets/img/9gag.svg",
            usuario: "9gag"
        },
        {
            imagem: "assets/img/meowed.svg",
            usuario: "meowed"
        },
        {
            imagem: "assets/img/barked.svg",
            usuario: "barked"
        },
        {
            imagem: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },
        {
            imagem: "assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        },
        {
            imagem: "assets/img/respondeai.svg",
            usuario: "respondeai"
        },
        {
            imagem: "assets/img/filomoderna.svg",
            usuario: "filomoderna"
        },
        {
            imagem: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        }
        
    ]

    return(
        <div class="stories">
            {dadosStories.map(dado => <Story imagem = {dado.imagem} usuario = {dado.usuario}/>)}
            <Setinha />
        </div>
    );
}