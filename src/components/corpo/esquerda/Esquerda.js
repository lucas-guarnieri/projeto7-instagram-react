import Stories from "./stories/Stories";
import Posts from "./posts/Posts";
//add POsts

export default function Esquerda(){
    return(
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}