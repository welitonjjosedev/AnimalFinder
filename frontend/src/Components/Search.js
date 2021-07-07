import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = () => {
    return(
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Buscar Pet"
                aria-label="Buscar Pet"
                aria-describedby="Buscar Pet"
            />
            <InputGroup.Append>
                <Button variant="dark">ENCONTAR</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Search;