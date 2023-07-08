
import { useState } from 'react';
import { toast } from 'react-toastify';



function SearchInput(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = event => {
      setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
      event.preventDefault();

      if (searchQuery.trim() === '') {
          //Setting searchQuery state '' in case query got spaces
          setSearchQuery('');

          return toast.info("Input your search query");
      }

      console.log('se ha almacenado su busqueda')

      props.onSubmit(searchQuery);
      
      setSearchQuery('');
  }
  
    return (
        <form  onSubmit={handleSubmit}>
          <button type="submit" >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 30 30"
            >
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
            <span >Search</span>
          </button>
  
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={searchQuery}
            onChange={handleSearchQuery}
          />
        </form>
      );
  };
  
  export default SearchInput;
  
