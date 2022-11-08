import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.section`
    width: 100%;
    padding: 16px;

    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px 0px;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    .container {
        display: flex;
        width: 100%;

    }

    .item {
        display: block;
        text-align: center;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

`;

export default function Favoritos() {
    return (
        <StyledHeader>
            <section>
                <h2>
                    AluraTubes Favoritos
                </h2>

                <div className="container">
                    {config.favoritos.map(favorito => {
                        return (
                            <div key={favorito.user} className="item">
                                <img src={`https://github.com/${favorito.user}.png`} alt={favorito.user} />
                                <p>@{favorito.user}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </StyledHeader>
    )
}
