import React from 'react';
export default function Root() {
  return (
    <>
      <div id='sidebar'>
        <h1>Agencia de Autos</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Buscar'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>Nuevo</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/inicio`}>Inicio</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Crear Cliente</a>
            </li>
            <li>
              <a href={`/catalogo`}>Catalogo</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'></div>
    </>
  );
}
