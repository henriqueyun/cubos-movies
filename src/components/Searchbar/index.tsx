import './Searchbar.css';


function Searchbar({onChange, searchText}: any) {
    return (
        <section className='search'>
            <input onChange={(e) => onChange(e.target.value)} value={searchText} type="search" placeholder='Busque um filme por um nome, ano ou gênero'/>
        </section>
    );
}

export default Searchbar;