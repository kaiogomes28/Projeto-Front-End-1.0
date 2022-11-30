import { Container, Header, Logo, Burguer, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo />
                <Burguer />
            </Header>

            <Footer>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/%F0%9F%92%BB-kaio-eduardo-gomes-3b29a922b/">App created</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/%F0%9F%92%BB-kaio-eduardo-gomes-3b29a922b/">made with ❤</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/%F0%9F%92%BB-kaio-eduardo-gomes-3b29a922b/">by Kaio Gomes</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay;