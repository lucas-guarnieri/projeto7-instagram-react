export default function Post(props){
    const {imgUsuario, usuario, imgConteudo, imgCurtidas, mainCurtidas, numCurtidas} = props;
    return(
    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={imgUsuario} />
                {usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
                <img src={imgConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={imgCurtidas} />
                <div class="texto">
                    Curtido por <strong>{mainCurtidas}</strong> e <strong>outras {numCurtidas}</strong>
                </div>
            </div>
        </div>
    </div>
    );

}