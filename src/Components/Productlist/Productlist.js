import {Container,Row,Col} from 'react-bootstrap';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
function Productlist(){
    const dispatch=useDispatch();
    var [productData,setProductdata]=useState([]);
    //Pasted
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.escuelajs.co/api/v1/products", requestOptions)
        .then(response => response.json())
        .then((result) => {
            setProductdata(result);
        })
        .catch(error => console.log('error', error));
    //Pasted
    const addtocart=(i)=>{
        //console.log(i);
        dispatch({type:'addcart',value:i});
    }
    return(
        <>
        <Container>
            <Row>
                <Col md={12} >
                  <h3 className="text-center text-primary mt-5 border-bottom">Available Products</h3>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                
                    
                    {
                     productData.map((item)=>{

                        return <Col md={4} className='card'>
                        <img src={item.images[0]} className='img mt-2'/>
                        <h4 className='text-mute text-center'>{item.title}</h4>
                        <p className='text-center'>Price: &#8377; {item.price}</p>
                        <input type="number" className='form-control'/>
                        <button className='btn btn-dark w-100' onClick={()=>{
                            addtocart(item.id)
                        }}>AddCart</button>
                        </Col>
                     })   
                    }
                
            </Row>
        </Container>
        </>
    );
}
export default Productlist;