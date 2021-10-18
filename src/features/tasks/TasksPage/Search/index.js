/* eslint-disable import/no-anonymous-default-export */
import { Input } from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Nhập từ khóa cần tìm"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};