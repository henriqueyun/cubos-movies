import './Searchbar.css';

function Searchbar() {
    return (
        <section className='search'>
            <input type="search" placeholder='Busque um filme por um nome, ano ou gênero'/>
        </section>
    );
}

export default Searchbar;