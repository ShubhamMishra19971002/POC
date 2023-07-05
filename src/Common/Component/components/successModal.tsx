import React from "react";
import { useHistory } from "react-router-dom";
import { SuccessTick } from "../styles/icons/icons";
import { Button } from "./buttons";
import { CardContainer } from "./card";

interface IProps {
    title: any;
    subtitle: any;
    btntitle: any;
}

function SuccessModal(props: IProps) {
    const history = useHistory();

    return (
        <CardContainer>
            {(
                <div className="modal modal-bottom">
                    <CardContainer theme="outline" className="bg-white modal-content si-protect-popup">
                        <div className='d-flex gap-2 items-center si-protect-header mb-6'>
                            <Button className="secondary si-success-btn"  >
                                <SuccessTick className="si-success" /></Button>
                            <h4 className="mb-0">
                                {props.title}
                                <br />
                                <span>{props.subtitle}</span>
                            </h4>
                        </div>
                        <Button className="primary w-full"
                            onClick={() => {
                                history.push('/account');
                            }}
                        >{props.btntitle}</Button>
                    </CardContainer>
                </div>
            )}
        </CardContainer>
    );
}

export default SuccessModal;