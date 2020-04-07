import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Footer extends Component {
    render(){
        return (
            <Card>
                <Card.Body>
                        <footer className="footer">
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com"
                         rel="noopener noreferrer" target="_blank">Colorlib</a>

                        </footer>
                </Card.Body>
            </Card>

            // <div align="footer-container">
            //     {/*footer here*/}
            //     <footer color="black" className="footer_content page-footer font-small teal pt-4">
            //
            //         {/*footer text*/}
            //         <div className="container-fluid text-center text-md-left">
            //             {/*grid row*/}
            //             <div className="row">
            //                 {/*grid column*/}
            //                 <div className="col-md-6 mt-md-0 mt-3">
            //                     {/*content*/}
            //                     {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            //                     Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            //                 </div>
            //             </div>
            //         </div>
            //
            //     </footer>
            // </div>

        )
    }
}