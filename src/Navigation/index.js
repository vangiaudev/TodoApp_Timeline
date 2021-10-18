import { toAuthor, toTasks } from "../routes";
import { StyledItem, StyledList, StyledNav, StyledNavLink } from "./styled";


const Navigation = () => (
    <StyledNav>
        <StyledList>
            <StyledItem>
                <StyledNavLink to={toTasks()}>Todo App</StyledNavLink>
            </StyledItem>
            <StyledItem>
                <StyledNavLink to={toAuthor()}>Tác giả</StyledNavLink>
            </StyledItem>
        </StyledList>
    </StyledNav>
);

export default Navigation;