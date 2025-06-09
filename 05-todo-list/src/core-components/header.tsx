import Container from "../components/container";
import Logo from "../assets/images/Logo.png"


export default function Header() {
    return (<Container as="header">
        <img src={Logo}></img>
        </Container>
    )
}