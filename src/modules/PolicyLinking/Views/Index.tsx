import React from 'react'
import Header from '../../../Common/Component/components/header'
import { Button } from '../../../Common/Component/components/buttons'
import { BeneficiaryIcon, Info, RightArrow,  SuccessTick,  ValidateClaimID, ValidateCorporateEmployee, ValidatePolicyNumber, ViaMail, ViaSMS } from '../../../Common/Component/components/icons'
import { Input } from '../../../Common/Component/components/input'
import { CardContainer } from '../../../Common/Component/components/card'
import  OtpInput from "react18-input-otp";

const PolicyLinkingView = () => {
  return (
        <>
        <>
        <Header 
          className="transparent-header"
          name="Validate yourself"
          subtitle={false}
          isShowBackBtn={true}
          logoPath={false}
          backComponentPath={"/home"}
          showButton={false} />

        <div className="p-6 otp-verify">
          <div className="si-protect-popup text-center mb-9">
            <div className="si-protect-header mb-2">
              <Button className="secondary si-success-btn">
                <SuccessTick className="si-success" />
              </Button>
            </div>
            <h3 className='mb-2 fw-b sec-title'>OTP verified successfully</h3>
            <p className='mb-3 fw-r text-base'>Select a user to continue</p>
          </div>
          <div className='-ml-6 -mr-6'>
            {/* Toggle className="primary" to "default" for active to inactive state */}
            <div className='d-flex gap-4 items-center justify-between text-center mb-6 overflowX-auto overflow-hidden px-6'>
              <CardContainer theme="outline" className="px-3 secondary mb-0 benef-card">
                <Button className="rounded secondaryBgColor-light leading-none mb-4">
                  {/* Toggle className="fill-secondary" to "fill-gray600" for active to inactive state */}
                  <BeneficiaryIcon className="svg-fill svg-stroke fill-secondary" />
                </Button>
                <h5 className="card-subtitle mb-1">Beneficiary</h5>
                <p className="sec-subtitle mb-0">Full access from Wipro. ltd</p>
              </CardContainer>
              <CardContainer theme="outline" className="px-3 inactive mb-0 benef-card">
                <Button className="rounded secondaryBgColor-light leading-none mb-4">
                  <BeneficiaryIcon className="svg-fill svg-stroke fill-gray600" />
                </Button>
                <h5 className="card-subtitle mb-1">Beneficiary</h5>
                <p className="sec-subtitle mb-0">Full access from Cognizat.ltd</p>
              </CardContainer>
              <CardContainer theme="outline" className="px-3 inactive mb-0 benef-card">
                <Button className="rounded secondaryBgColor-light leading-none mb-4">
                  <BeneficiaryIcon className="svg-fill svg-stroke fill-gray600" />
                </Button>
                <h5 className="card-subtitle mb-1">Beneficiary</h5>
                <p className="sec-subtitle mb-0">Full access from TCS</p>
              </CardContainer>
              <CardContainer theme="outline" className="px-3 inactive mb-0 benef-card">
                <Button className="rounded secondaryBgColor-light leading-none mb-4">
                  <BeneficiaryIcon className="svg-fill svg-stroke fill-gray600" />
                </Button>
                <h5 className="card-subtitle mb-1">Beneficiary</h5>
                <p className="sec-subtitle mb-0">Full access from Cognizat.ltd</p>
              </CardContainer>
            </div>
          </div>
          <Button className="primary w-full">
            Continue
          </Button>
        </div>

        <div className="p-6 -ml-6 -mr-6">
          <h2 className="text-mdl px-6">What details do you have to find your policy?</h2>
          <div className="tabs d-flex items-center gap-2 overflowX-auto overflow-hidden px-6 mb-4">
            {/* Toggle className="active" to "inactive" for active to inactive state */}
            <CardContainer theme="outline" className="secondary d-flex items-center gap-4 justify-center select-policy p-4">
              <Button className="secondaryBgColor-light rounded h-auto">
                <ValidateCorporateEmployee className="corporate-fill-active corp-emp" />
              </Button>
              <h5 className="text-sm leading-lg">Corporate details</h5>
            </CardContainer>
            {/* Toggle className="active" to "inactive" for active to inactive state */}
            <CardContainer theme="outline" className="inactive d-flex items-center gap-4 justify-center select-policy p-4">
              <Button className="secondaryBgColor-light rounded h-auto">
                <ValidatePolicyNumber className="corporate-fill-active policy-num" />
              </Button>
              <h5 className="text-sm leading-lg" >Policy details</h5>
            </CardContainer>
            {/* Toggle className="active" to "inactive" for active to inactive state */}
            <CardContainer theme="outline" className="inactive d-flex items-center gap-4 justify-center select-policy p-4">
              <Button className="secondaryBgColor-light rounded h-auto">
                <ValidateClaimID className="corporate-fill-active claim-id" />
              </Button>
              <h5 className="text-sm leading-lg" >Claim ID</h5>
            </CardContainer>
          </div>
          <div className='px-6'>
            <Input label="Employee ID" type="" id="" />
            <Input label="Name of a covered member" type="" id="" />
            <Input label="Date of birth of Meena Gaikwad" type="date" id="" />
            <Button className="w-full inactive">Find my policy</Button>

            <Button className="p-0 h-auto text-primaryBgColor border-0 bg-none text-sm has-icon relative z-1 w-full justify-end gap-1 mt-2 fw-sb"><Info className="more-info-icon" />More info</Button>
            <div className="-mt-9">
              <Input label="Policy number" type="" id="" />
            </div>
            <Input label="Beneficiary name" type="" id="" />
            <Input label="Date of birth of Meena Gaikwad" type="date" id="" />
            <Button className="w-full primary">Find my policy</Button>

            <Input label="Claim number" className="has-error" value="123221111" type="" id="" />
            <p className='error-msg danger -mt-2'>Your claim number information is not found, please try other option</p>
            <Input label="Date of admission" type="date" id="" />
            <p className="notification note">Please provide any one of information of beneficiary name or employee ID</p>
            <Input label="Beneficiary name" type="" id="" />
            <Input label="Employee ID" type="" id="" />
            <Button className="w-full primary">Find my policy</Button>

            <Button btnTheme="text" className="w-full p-4 text-center underline">Can't identify this way, contact us</Button>
          </div>
        </div>

        <div className='p-6 signup-password'>
          <h6>Select which contact details should we use your password</h6>
          <CardContainer className="border-0 gray100 d-flex items-center gap-2 cursor-pointer">
              <ViaSMS className="via-sms-icon" />
              <p className='mb-0'>
              Via SMS
                  <br />
                  <span className='reset-input'>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>&nbsp;</span>
                      <span className='password-dots'>.</span>
                      <span className='password-dots'>.</span>
                      908
                  </span>
              </p>
          </CardContainer>
          <CardContainer className="border-0 gray100 d-flex items-center gap-2 cursor-pointer">
              <ViaMail className="via-mail-icon" />
              <p className='mb-0'>
              Email
                  <br />
                  <span className='reset-input'>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>&nbsp;</span>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>.</span>
                    <span className='password-dots'>&nbsp;</span>
                    wad@gmail.com
                  </span>
              </p>
          </CardContainer>
        </div>

        <div className="p-6">
          <p className='mb-1 text-primaryBgColor'>Enter 4- digit recovery code</p>
          <p className='mb-1 text-primaryBgColor'>The recovery code was sent to your mobile number ending with *****822 Please enter the code:</p>
          <small className="d-block mr-2 text-right text-inactive-dark">60s</small>
          <OtpInput
            containerStyle="reset-recovery-code w-full d-flex items-center gap-2 mb-0"
            inputStyle="d-block otp-input mr-0"
            numInputs={6}
            isInputNum={true}
            shouldAutoFocus
          />
        </div>

        <div className="p-6">
          <p className='mb-1 text-primaryBgColor'>We would need a bit of more information for authentication.</p>
          <div className="d-flex items-center justify-end other-option relative z-1">
            <Button className="p-0 h-auto border-0 bg-none px-2">
              <RightArrow className="other-opt-swipe other-left" />
            </Button>
            <Button className="p-0 h-auto text-secondary border-0 bg-none text-sm">Other options</Button>
            <Button className="p-0 h-auto border-0 bg-none px-1">
              <RightArrow className="other-opt-swipe" />
            </Button>
          </div>
          <div className="-mt-9">
            <Input className="mt-0" label="Date of birth of spouse" type="date" />
          </div>
          <Button className="inactive w-full">Validate</Button>
          <Button btnTheme="text" className="w-full p-4 text-center underline">Can't identify this way, contact us</Button>
        </div>

        <div className='p-6'>
          <p className='mb-1 text-primaryBgColor'>Please provide your Email ID our team will contact us soon</p>
          <Input className="mt-0" label="Email ID" type="" />
          <Button className="inactive w-full">Submit</Button>
        </div>

        <div className="modal modal-bottom">
          <CardContainer theme="outline" className="bg-white modal-content si-protect-popup">
            <div className='d-flex gap-2 items-start si-protect-header mb-6'>
              <Button className="secondary si-success-btn"  >
                <SuccessTick className="si-success" />
              </Button>
              <div>
                <h3 className="mb-3 sec-title ">Your enquiry has raised successfully</h3>
                <h5 className="card-subtitle fw-r">Out team will reach out soon with further updates.</h5>
              </div>
            </div>
            <Button className="primary w-full">Close</Button>
          </CardContainer>
        </div>

      
    </></>
  )
}

export default PolicyLinkingView
