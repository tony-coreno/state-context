import { useEffect, useState } from "react";

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if(isOpen){
            const dialog = document.querySelector('dialog');
            const cancel = document.querySelector('#cancel');
            const show = document.querySelector('#show');
            
            show.addEventListener('click', () => dialog.showModal())
            cancel.addEventListener('click', () => dialog.closest())
        }
    },[isOpen])

    return ( 
        <>
        <button id="show" className="btn btn-primary" onClick={() => setIsOpen(true)}>Abrir Modal</button>
            { isOpen ?
                <dialog>
                <h1>Modal</h1>
                <p>Método de pago</p>
                <button id="cancel" onClick={() => setIsOpen(false)} className="btn btn-danger">Salir</button>
            </dialog>
            : null
            
            }
        </>
     );
}
 
export default Modal;