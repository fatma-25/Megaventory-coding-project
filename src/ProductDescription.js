import React,  {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

//product's details
const ProductDescription = ({product}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            {/* modal with product description */}
        <Button variant="primary" onClick={handleShow}>
       read more
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>{product.PurchaseOrderAddress}</Modal.Body>
          <Modal.Body>{product.PurchaseOrderContactPerson}</Modal.Body>
          <Modal.Body>{product.PurchaseOrderStatus}</Modal.Body>
          <Modal.Body>{product.PurchaseOrderDetails.map(e=>
            <ul>
<li>{e.PurchaseOrderRowProductSKU}</li>
<li>{e.PurchaseOrderRowQuantity}</li>
<li>{e.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</li>
<li>{e.PurchaseOrderRowTotalAmount}</li>
            </ul>
            )}</Modal.Body>
         
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>
      </div>
    )
}
export default ProductDescription
