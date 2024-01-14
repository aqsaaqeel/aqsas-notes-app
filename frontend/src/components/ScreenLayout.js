import { Container } from "@mui/material"

export const ScreenLayout = (props) =>{
    return(
        <div>
            <Container >
                <h1>{props.title}</h1>
                <hr />
                <Container>{props.children}</Container>
            </Container>
        </div>
    )
}