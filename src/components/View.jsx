import React,{useState} from 'react';
import BookTest from './BookTest';
import History from './History';
//
import axios from 'axios';

const View = (props) => {
    const { } = props;
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    const [operation, setOperation] = useState('no-op');
    return (
        <div className="p-5">
            <div className="col-md-6  my-auto mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
               {
            (() => {
          switch (operation) {
            case 'book-test':
              return <BookTest/>
            case 'history':
              return <History/>
            
            default:
              return <div>
                    <div className="card text-dark" >
                        <div className="card-body">
                        <button onClick={() => setOperation('book-test')}>Book Test</button>
                        </div>
                    </div>

                    <div className="card mt-3 text-dark" >
                        <div className="card-body">
                        <button onClick={() => setOperation('history')}>History</button>
                        </div>
                    </div>
            </div> 
          }
        })()}
            </div>
        </div>
    )
}

export default View