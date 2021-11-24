/* eslint-disable import/no-anonymous-default-export */
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Image, StyledParagraph, Wrapper } from "./styled";
import VanGiau from "./VanGiau.jpg";
import './style.css'

export default () => (
    <Container>
        <Header title="SINH VIÊN THỰC HIỆN" />
        <Section
            title="Nguyễn Văn Giàu"
            body={
                <>
                    <Wrapper>
                        <Image src={VanGiau} alt="Nguyễn Văn Giàu avatar" />
                        <StyledParagraph>
                            <p className="context">Họ và tên: Nguyễn Văn Giàu</p>
                            <p className="context">MSSV: 45.01.104.061</p>
                            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
                            <p className="context">Học phần: Công nghệ Web</p>
                        </StyledParagraph>
                    </Wrapper>
                    
                </>
            }
        />
    </Container>
);
