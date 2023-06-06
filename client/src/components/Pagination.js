import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

const Pagination = ({page, setPage, max}) => {

    const [displayPages, setDisplayPages] = useState([])

    useEffect(() => {
      const pagesToShow = 5;
      let startPage = page - Math.floor(pagesToShow / 2)
      let endPage = page + Math.floor(pagesToShow / 2) 
      if(startPage < 1){
        startPage = 1;
        endPage = pagesToShow;
      }
      if(endPage > max){
        endPage = max
        startPage = max - (pagesToShow - 1)
        if(startPage < 1){
          startPage = 1;
        }
      }
      const pages = Array.from({length: endPage - startPage + 1}, (_, idx) => startPage + idx)
      setDisplayPages(pages)
    }, [page, max])


    const handlePrevPage = () => {
        if(page < 2) return;
        setPage(page -1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const pageNumber = Array.from({length: max}, (_, idx) => idx + 1);

  return (
    <>
    {max === 0 ? (
      null
    ) : (
      <Container>
        <button style={{backgroundColor:'transparent', border:'none', cursor:'pointer'}} onClick={handlePrevPage}>
          <span style={{color:'white'}} className="material-symbols-outlined">
            arrow_left
          </span>
        </button>
        
        
          {displayPages.map((pn, idx) => (
            <ul key={idx}>
              <li style={{color:'white', listStyle: "none", color: pn === page ? "#00FF66" : "white", cursor:'pointer', width:'50px', textAlign:'center'}}
                  onClick={() => setPage(pn)}>{pn}</li>
            </ul>
          ))}
        

        <button style={{backgroundColor:'transparent', border:'none', cursor:"pointer"}} onClick={handleNextPage} disabled={page >= max}>
          <span style={{color:'white', marginLeft:'30px'}} className="material-symbols-outlined">
            arrow_right
          </span>
        </button>
    </Container>
    )}
    
    </>
  )
}
 
export default Pagination