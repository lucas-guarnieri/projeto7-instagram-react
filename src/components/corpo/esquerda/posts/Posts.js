import Post from "./Post";

export default function Posts(){
    const dadosPosts = [
        {
            imgUsuario:  "assets/img/meowed.svg",
            usuario: "meowed",
            imgConteudo: "assets/img/gato-telefone.svg",
            imgCurtidas: "assets/img/respondeai.svg",
            mainCurtidas: "respondeai",
            numCurtidas: "101.523"
        },
        {
            imgUsuario:  "assets/img/barked.svg",
            usuario: "barked",
            imgConteudo: "assets/img/dog.svg",
            imgCurtidas: "assets/img/adorable_animals.svg",
            mainCurtidas: "adorable_animals",
            numCurtidas: "99.159"
        },
    ];

    return(
        <div class="posts">
            {dadosPosts.map(dado => <Post imgUsuario={dado.imgUsuario} usuario={dado.usuario} imgConteudo={dado.imgConteudo} imgCurtidas={dado.imgCurtidas} mainCurtidas={dado.mainCurtidas} numCurtidas={dado.numCurtidas}/>)}
        </div>
    )
}