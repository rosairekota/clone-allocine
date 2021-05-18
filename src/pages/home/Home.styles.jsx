import Styled from 'styled-components';
import { whiteColor, pinkColor } from '../../components/theme/GlobalStyle.styles';

export const Wrapper = Styled.div`

.pagination {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width:50%;
  cursor: pointer;
}

.pagination a {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightblue;;
  color: ${pinkColor};
  transition:200ms linear;
  
}
.pagination a:hover {
  color: ${whiteColor};
  background-color: ${pinkColor};
  
}
.pagination__link {
  font-weight: bold;
}

.pagination__link--active a {
  color: ${whiteColor};
  background: ${pinkColor};
}

.pagination__link--disabled a {
  color: lightblue;
  border: 1px solid lightblue;;
}
.grid-container{
    margin-bottom:3rem;
}


`;
