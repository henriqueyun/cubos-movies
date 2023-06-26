import './Searchbar.css';


function Searchbar({onChange, searchText}: any) {
    return (
            <input onChange={(e) => onChange(e.target.value)} value={searchText} type="search" placeholder='Busque um filme por um nome, ano ou gênero'/>
    );
}

export default Searchbar;